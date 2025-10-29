"use client";

import { useState, useMemo, useEffect } from 'react';
import type { Experience, TimeSlot, Availability } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus } from 'lucide-react';
import { format, parseISO, isBefore, startOfDay, isSameDay } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

interface BookingWidgetProps {
  experience: Experience;
}

const TAX_RATE = 0.055; // 5.5% tax

export function BookingWidget({ experience }: BookingWidgetProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const availableDates = useMemo(() => {
    const today = startOfDay(new Date());
    return experience.availability
      .map(avail => parseISO(avail.date))
      .filter(date => !isBefore(date, today));
  }, [experience.availability]);

  useEffect(() => {
    if (availableDates.length > 0 && !selectedDate) {
      setSelectedDate(availableDates[0]);
    }
  }, [availableDates, selectedDate]);

  const currentAvailability = useMemo<Availability | undefined>(() => {
    if (!selectedDate) return undefined;
    const dateString = format(selectedDate, 'yyyy-MM-dd');
    return experience.availability.find((a) => a.date === dateString);
  }, [selectedDate, experience.availability]);

  useEffect(() => {
    setSelectedTimeSlot(null);
    setQuantity(1);
  }, [selectedDate]);

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

  // Get next 5 available dates
  const nextFiveDates = availableDates.slice(0, 5);

  return (
    <Card className="shadow-none border bg-gray-50 rounded-lg">
      <CardHeader className="p-4">
        <div className="flex justify-between items-baseline">
            <span className="text-sm text-muted-foreground">Starts at</span>
            <span className="text-xl font-bold text-foreground">
                ₹{experience.price.toLocaleString()}
            </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-4">
        {/* Date Selection */}
        <div className="space-y-2">
          <Label className="font-semibold">Choose Date</Label>
          <div className="flex gap-2">
            {nextFiveDates.map(date => (
              <Button
                key={date.toISOString()}
                variant={selectedDate && isSameDay(date, selectedDate) ? 'default' : 'outline'}
                onClick={() => setSelectedDate(date)}
                className="flex flex-col h-auto px-3 py-2"
              >
                <span>{format(date, 'MMM')}</span>
                <span className="font-bold text-lg">{format(date, 'd')}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Time Slot Selection */}
        {currentAvailability && (
          <div className="space-y-2">
            <Label className="font-semibold">Choose Time</Label>
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
                      className={`flex items-center justify-center rounded-md border-2 p-3 text-sm transition-colors ${isSoldOut ? 'cursor-not-allowed bg-muted/50 text-muted-foreground' : 'cursor-pointer hover:bg-accent hover:text-accent-foreground'} peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10`}
                    >
                      {slot.time}
                      {!isSoldOut && (
                        <span className="text-red-500 text-xs ml-2">{remaining} left</span>
                      )}
                      {isSoldOut && (
                        <span className="text-muted-foreground text-xs ml-2">Sold out</span>
                      )}
                    </Label>
                  </div>
                 );
              })}
            </RadioGroup>
            <p className="text-xs text-muted-foreground">All times are in IST (GMT +5:30)</p>
          </div>
        )}
        
        {/* Quantity and Price */}
        <div className="space-y-2 pt-2">
             <div className="flex items-center justify-between">
               <span className="text-muted-foreground">Quantity</span>
               <div className="flex items-center gap-2">
                 <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => setQuantity(q => Math.max(1, q - 1))} disabled={quantity <= 1}>
                   <Minus className="h-3 w-3" />
                 </Button>
                 <span className="font-bold w-6 text-center">{quantity}</span>
                 <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => setQuantity(q => Math.min(10, q + 1))} disabled={quantity >= 10}>
                   <Plus className="h-3 w-3" />
                 </Button>
               </div>
             </div>
             <div className="flex justify-between text-muted-foreground">
               <span>Subtotal</span>
               <span>₹{subtotal.toLocaleString()}</span>
             </div>
             <div className="flex justify-between text-muted-foreground">
               <span>Taxes</span>
               <span>₹{taxes.toFixed(0)}</span>
             </div>
             <Separator className="my-2"/>
             <div className="flex justify-between font-bold text-lg">
               <span>Total</span>
               <span>₹{total.toFixed(0)}</span>
             </div>
          </div>

      </CardContent>
      <CardFooter className="p-4">
        <Button size="lg" className="w-full font-bold bg-primary hover:bg-primary/90" onClick={handleBooking}>
          Confirm
        </Button>
      </CardFooter>
    </Card>
  );
}
