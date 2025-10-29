
import Link from 'next/link';
import { Logo } from './icons';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="font-bold font-headline text-lg sm:inline-block">
              highway delite
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-2">
            <Input type="search" placeholder="Search..." className="w-[300px]" />
            <Button>Search</Button>
        </div>
      </div>
    </header>
  );
}
