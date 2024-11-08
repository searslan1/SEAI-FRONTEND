import React, { ReactNode } from 'react';

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({ htmlFor, children, className = '' }) => (
  <label htmlFor={htmlFor} className={`text-gray-700 font-medium ${className}`}>
    {children}
  </label>
);
