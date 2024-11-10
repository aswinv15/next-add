/* eslint-disable import/no-unresolved */
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// eslint-disable-next-line import/no-unresolved
import { Button } from '@/components/ui/button';
import { IconMoon, IconSun } from '@/components/ui/icons';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      {!theme ? null : theme === 'dark' ? (
        <IconMoon className="transition-all" />
      ) : (
        <IconSun className="transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
