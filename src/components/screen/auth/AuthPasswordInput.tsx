'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

interface AuthPasswordInputProps extends React.ComponentProps<typeof Input> {
  leftIcon?: React.ReactNode;
}

const AuthPasswordInput = React.forwardRef<HTMLInputElement, AuthPasswordInputProps>(
  ({ className, leftIcon, ...props }, ref) => {
    const [show, setShow] = useState(false);

    return (
      <div className="relative">
        {leftIcon && (
          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400">
            {leftIcon}
          </span>
        )}
        <Input
          ref={ref}
          type={show ? 'text' : 'password'}
          className={cn(
            'border-white/10 bg-slate-800/50 pr-12 text-white placeholder:text-slate-500 focus-visible:ring-cyan-500/50',
            leftIcon && 'pl-11',
            className,
          )}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setShow((prev) => !prev)}
          className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2 text-slate-400 hover:bg-transparent hover:text-slate-300"
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </Button>
      </div>
    );
  },
);

AuthPasswordInput.displayName = 'AuthPasswordInput';

export default AuthPasswordInput;
