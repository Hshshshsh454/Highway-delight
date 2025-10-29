
'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

function SuccessContent() {
  const searchParams = useSearchParams();
  const refId = searchParams.get('refId');

  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
      <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
      <h1 className="text-3xl font-bold mb-2">Booking Confirmed</h1>
      <p className="text-muted-foreground mb-8">Ref ID: {refId}</p>
      <Button asChild variant="outline">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="flex-grow flex items-center justify-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
