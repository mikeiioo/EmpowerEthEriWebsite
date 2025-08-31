
import React, { useState, useEffect } from 'react';
import { removeBackground, loadImage } from '../utils/backgroundRemoval';

type ImageProcessorProps = {
  originalImageUrl: string;
  onProcessedImage: (processedImageUrl: string) => void;
};

const ImageProcessor = ({ originalImageUrl, onProcessedImage }: ImageProcessorProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      if (!originalImageUrl || originalImageUrl === '/placeholder.svg') return;
      
      setIsProcessing(true);
      setError(null);
      
      try {
        // Fetch the original image
        const response = await fetch(originalImageUrl);
        const blob = await response.blob();
        
        // Load image element
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for processed image
        const processedImageUrl = URL.createObjectURL(processedBlob);
        onProcessedImage(processedImageUrl);
        
      } catch (err) {
        console.error('Failed to process image:', err);
        setError('Failed to process image');
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
  }, [originalImageUrl, onProcessedImage]);

  if (isProcessing) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-sm text-gray-600">Processing image...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-sm text-red-600">{error}</div>
      </div>
    );
  }

  return null;
};

export default ImageProcessor;
