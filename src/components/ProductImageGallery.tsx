import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  thumbnail: string;
}

export function ProductImageGallery({ images, productName, thumbnail }: ProductImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openViewer = (index: number) => {
    setViewerIndex(index);
    setIsOpen(true);
  };

  const navigateViewer = (direction: 'prev' | 'next') => {
    setViewerIndex(prev => {
      if (direction === 'next') {
        return (prev + 1) % images.length;
      } else {
        return (prev - 1 + images.length) % images.length;
      }
    });
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <button
          onClick={() => openViewer(currentIndex)}
          className="w-full h-full"
          aria-label="View larger image"
        >
          <img
            src={images[currentIndex] || thumbnail}
            alt={`${productName} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
          />
        </button>
        
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-square overflow-hidden rounded-md border-2 transition-all ${
                currentIndex === index ? 'border-primary' : 'border-transparent'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Viewer Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
          <div className="relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full z-10"
              aria-label="Close viewer"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative aspect-square max-h-[80vh] bg-black">
              <img
                src={images[viewerIndex] || thumbnail}
                alt={`${productName} - Image ${viewerIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              <button
                onClick={() => navigateViewer('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={() => navigateViewer('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
            
            <div className="mt-2 text-center text-white text-sm">
              Image {viewerIndex + 1} of {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
