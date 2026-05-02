import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[var(--bokana-slate)] text-white hover:bg-[var(--bokana-slate-hover)] focus:ring-[var(--bokana-slate)] shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
    secondary: "bg-[var(--bokana-amber)] text-white hover:bg-[var(--bokana-amber-hover)] focus:ring-[var(--bokana-amber)] shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
    outline: "border-2 border-[var(--bokana-slate)] text-[var(--bokana-slate)] hover:bg-[var(--legacy-gray)] focus:ring-[var(--bokana-slate)]",
    whatsapp: "bg-[var(--bokana-amber)] text-white hover:bg-[var(--bokana-amber-hover)] focus:ring-[var(--bokana-amber)] shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
