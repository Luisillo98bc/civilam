"use client";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="var(--accent-blue)"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
