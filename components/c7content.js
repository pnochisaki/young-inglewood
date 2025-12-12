'use client';
import { useState, useEffect } from 'react';

export default function C7content(props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return <div id="c7-content"></div>;
}

