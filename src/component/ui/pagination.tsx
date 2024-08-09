import Link from 'next/link';
import React from 'react';

// Pagination Component
export const Pagination: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <nav className="pagination">{children}</nav>;
};

// PaginationContent Component
export const PaginationContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ul className="pagination-content">{children}</ul>;
};

// PaginationItem Component
export const PaginationItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <li className="pagination-item">{children}</li>;
};

// PaginationLink Component
export const PaginationLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="pagination-link">{children}</a>
    </Link>
  );
};

// PaginationNext Component
export const PaginationNext: React.FC<{ href: string; className?: string }> = ({ href, className }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={`pagination-next ${className}`}>Next</a>
    </Link>
  );
};

// PaginationPrevious Component
export const PaginationPrevious: React.FC<{ href: string; className?: string }> = ({ href, className }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={`pagination-previous ${className}`}>Previous</a>
    </Link>
  );
};
