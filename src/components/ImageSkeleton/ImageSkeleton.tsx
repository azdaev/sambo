import React, { useState } from 'react';
import {
  SkeletonContainer,
  Skeleton,
  Image,
} from './ImageSkeleton.styles';

interface ImageSkeletonProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ImageSkeleton: React.FC<ImageSkeletonProps> = ({
  src,
  alt,
  width,
  height,
  borderRadius,
  className,
  style,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <SkeletonContainer 
      width={width} 
      height={height} 
      borderRadius={borderRadius}
      className={className}
      style={style}
    >
      {!isLoaded && <Skeleton />}
      <Image
        src={src}
        alt={alt}
        isLoaded={isLoaded}
        onLoad={handleLoad}
      />
    </SkeletonContainer>
  );
};

export default ImageSkeleton;
