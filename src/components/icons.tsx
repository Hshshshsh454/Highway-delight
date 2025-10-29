import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 18.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
      <path d="M12 4.5v-2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M2 12.5h2" />
      <path d="m4.93 20.07 1.41-1.41" />
      <path d="M12 21.5v2" />
      <path d="m19.07 20.07-1.41-1.41" />
      <path d="M22 12.5h-2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M4 17.5a8.91 8.91 0 0 1 8-1.5 8.91 8.91 0 0 1 8 1.5" />
    </svg>
  );
}
