"use client";

import { useState, useMemo, useEffect } from 'react';
import type { Experience, TimeSlot, Availability } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { CalendarDays, Clock, Users, Minus, Plus } from 'lucide-react';
import { format, parseISO, isBefore, startOfDay } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

interface BookingWidgetProps {
  experience: Experience;
}

const TAX_RATE = 0.1; // 10% tax

export function BookingWidget({ experience }: BookingWidgetProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const availableDates = useMemo(() => {
    return experience.availability.map(avail => parseISO(avail.date));
  }, [experience.availability]);
  
  const today = startOfDay(new Date());

  useEffect(() => {
    // Pre-select the first available future date
    const firstAvailableDate = availableDates.find(date => !isBefore(date, today));
    if (firstAvailableDate) {
      setSelectedDate(firstAvailableDate);
    }
  }, [availableDates]);


  const currentAvailability = useMemo<Availability | undefined>(() => {
    if (!selectedDate) return undefined;
    const dateString = format(selectedDate, 'yyyy-MM-dd');
    return experience.availability.find((a) => a.date === dateString);
  }, [selectedDate, experience.availability]);

  useEffect(() => {
    setSelectedTimeSlot(null);
    setQuantity(1);
  }, [selectedDate]);
  
  const handleDateSelect = (date: Date | undefined) => {
    if (date && isBefore(date, today)) {
       toast({
        title: "Invalid Date",
        description: "Please select a date from today onwards.",
        variant: 'destructive',
      });
      return;
    }
    setSelectedDate(date);
  }

  const subtotal = experience.price * quantity;
  const taxes = subtotal * TAX_RATE;
  const total = subtotal + taxes;

  const handleBooking = () => {
    if (!selectedDate || !selectedTimeSlot) {
      toast({
        title: "Incomplete Selection",
        description: "Please select a date and time slot.",
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: 'Booking Confirmed!',
      description: `Your spot for ${experience.title} on ${format(selectedDate, 'PPP')} at ${selectedTimeSlot.time} is booked for ${quantity} person(s).`,
    });
  };

  const maxQuantity = selectedTimeSlot ? selectedTimeSlot.capacity - selectedTimeSlot.booked : 1;

  useEffect(() => {
    if (quantity > maxQuantity) {
      setQuantity(maxQuantity > 0 ? maxQuantity : 1);
    }
  }, [selectedTimeSlot, quantity, maxQuantity]);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Book Your Spot</span>
          <span className="text-2xl font-bold text-primary">
            ₹{experience.price.toLocaleString()}
            <span className="text-sm font-normal text-muted-foreground">/person</span>
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Date Selection */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2 font-semibold text-lg"><CalendarDays className="w-5 h-5 text-primary" /> Choose Date</Label>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            className="rounded-md border"
            disabled={(date) => isBefore(date, today) || !availableDates.some(d => d.getTime() === date.getTime())}
            initialFocus
          />
        </div>

        {/* Time Slot Selection */}
        {currentAvailability && (
          <div className="space-y-2">
             <Label className="flex items-center gap-2 font-semibold text-lg"><Clock className="w-5 h-5 text-primary" /> Choose Time</Label>
            <RadioGroup
              value={selectedTimeSlot?.time}
              onValueChange={(time) => setSelectedTimeSlot(currentAvailability.slots.find(s => s.time === time) || null)}
              className="grid grid-cols-2 gap-2"
            >
              {currentAvailability.slots.map((slot) => {
                 const remaining = slot.capacity - slot.booked;
                 const isSoldOut = remaining <= 0;
                 return (
                  <div key={slot.time}>
                    <RadioGroupItem value={slot.time} id={slot.time} className="peer sr-only" disabled={isSoldOut} />
                    <Label
                      htmlFor={slot.time}
                      className={`flex flex-col items-center justify-center rounded-md border-2 p-3 hover:bg-accent hover:text-accent-foreground ${isSoldOut ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary`}
                    >
                      <span className="font-bold">{slot.time}</span>
                      <span className={`text-xs ${isSoldOut ? 'text-destructive' : 'text-muted-foreground'}`}>
                        {isSoldOut ? 'Sold Out' : `${remaining} left`}
                      </span>
                    </Label>
                  </div>
                 );
              })}
            </RadioGroup>
          </div>
        )}

        {/* Quantity Selection */}
        {selectedTimeSlot && (
           <div className="space-y-2">
            <Label className="flex items-center gap-2 font-semibold text-lg"><Users className="w-5 h-5 text-primary" /> Quantity</Label>
             <div className="flex items-center justify-between border rounded-md p-2">
               <span>Number of people</span>
               <div className="flex items-center gap-2">
                 <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setQuantity(q => Math.max(1, q - 1))} disabled={quantity <= 1}>
                   <Minus className="h-4 w-4" />
                 </Button>
                 <span className="font-bold w-8 text-center">{quantity}</span>
                 <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setQuantity(q => Math.min(maxQuantity, q + 1))} disabled={quantity >= maxQuantity}>
                   <Plus className="h-4 w-4" />
                 </Button>
               </div>
             </div>
           </div>
        )}

        {/* Price Calculation */}
        {quantity > 0 && selectedTimeSlot && (
          <div className="space-y-2 pt-4">
             <Separator />
             <div className="flex justify-between text-muted-foreground">
               <span>Subtotal (₹{experience.price} x {quantity})</span>
               <span>₹{subtotal.toLocaleString()}</span>
             </div>
             <div className="flex justify-between text-muted-foreground">
               <span>Taxes ({(TAX_RATE * 100)}%)</span>
               <span>₹{taxes.toLocaleString()}</span>
             </div>
             <Separator />
             <div className="flex justify-between font-bold text-lg">
               <span>Total</span>
               <span>₹{total.toLocaleString()}</span>
             </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button size="lg" className="w-full font-bold" onClick={handleBooking} disabled={!selectedTimeSlot}>
          Confirm & Book
        </Button>
      </CardFooter>
    </Card>
  );
}
