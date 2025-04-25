import React from 'react';

interface LinkProps {
  href: string;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href,isActive,onClick,children }) => {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className={`text-white font-medium hover:underline transition-all duration-300 ${isActive ? 'underline font-bold' : '' }`}
      >
        {children}
      </a>
    </li>
  );
};