'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton = (props) => {
  const router = useRouter();
  return <button onClick={() => router.back()} {...props}></button>;
};

export default BackButton;
