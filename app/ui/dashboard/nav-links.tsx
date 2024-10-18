"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href; // Check if the link is active
        return (
          <Link
            key={link.href} // Use href as the key
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium ${isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-50 hover:bg-sky-100 hover:text-blue-600'} md:flex-none md:justify-start md:p-2 md:px-3`}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
