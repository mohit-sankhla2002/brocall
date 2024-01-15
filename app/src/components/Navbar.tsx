"use client"

import React from 'react';
import { Webhook } from 'lucide-react';
import { Button } from './ui/button';
import { signIn } from "next-auth/react";
import { Session } from 'next-auth';
import UserProfile from './UserProfile';
import Link from 'next/link';
interface NavbarProps {
  session: Session | null
}

const Navbar: React.FC<NavbarProps> = ({session}) => {
  
  return (
    <div className='py-2 items-center px-10 border-b md:block flex justify-center'>
      <Link href="/">
        <Webhook className='w-10 h-10'/>
      </Link>
      {!(session && session.user) ? null : <UserProfile session={session} />}
    </div>
  )
}

export default Navbar;