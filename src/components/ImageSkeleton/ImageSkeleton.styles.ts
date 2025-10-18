import styled, { keyframes } from 'styled-components';

export const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const SkeletonContainer = styled.div<{ width?: string; height?: string; borderRadius?: string }>`
  position: relative;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  border-radius: ${props => props.borderRadius || '0'};
  overflow: hidden;
`;

export const Skeleton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 37%,
    #f0f0f0 63%
  );
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;
`;

export const Image = styled.img<{ isLoaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => props.isLoaded ? 1 : 0};
  transition: opacity 0.3s ease;
`;
