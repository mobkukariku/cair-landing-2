'use client';

import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

interface ImageWrapperProps extends ImageProps {
  fallbackSrc?: string;
}

export default function ImageWrapper({
  suppressHydrationWarning = true,
  ...props
}: ImageWrapperProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return <Image {...props} />;
  }

  return (
    <Image {...props} suppressHydrationWarning={suppressHydrationWarning} />
  );
}
