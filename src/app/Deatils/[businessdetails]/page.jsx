"use client"

import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

const BusinessDetails = () => {
  const { data, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn('descope');
    }
  }, [status]);

  if (status === 'loading') {
    return <p className='mx-6 md:mx-16 font-bold text-4xl ' >Loading...</p>;
  }

  if (status === 'unauthenticated') {
   confirm("you must login first")
  }

  if (status === 'authenticated') {
    return (
      <div className='mx-6 md:mx-16'>
        <h1>Hello Moto</h1>
      </div>
    );
  }

  return null; // This line handles unexpected status values
};

export default BusinessDetails;
