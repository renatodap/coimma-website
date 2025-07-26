'use client';

import { useState, useRef } from 'react';

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function VideoPlayer({
  src = '/video.mp4',
  poster = '/placeholder.jpg',
  title = 'Vídeo Institucional COIMMA',
  description = 'Conheça nossa história, missão e compromisso com a excelência em equipamentos para pecuária.',
  className = ''
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Video Title and Description */}
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="w-16 h-0.5 bg-gray-900 mx-auto mt-6"></div>
      </div>

      {/* Video Container */}
      <div 
        className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleVideoClick}
      >
        <div className="aspect-video relative">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={poster}
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={src} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>

          {/* Play Button Overlay */}
          <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 transition-opacity duration-300 ${
            isPlaying ? 'opacity-0' : 'opacity-100'
          }`}>
            <button
              onClick={togglePlay}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all duration-200 hover:scale-110 shadow-lg"
              aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
            >
              {isPlaying ? (
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Custom Controls Bar */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 transition-opacity duration-300 ${
            showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex items-center space-x-4 text-white">
              <button
                onClick={togglePlay}
                className="hover:scale-110 transition-transform duration-200"
                aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
              >
                {isPlaying ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
              
              <div className="flex-1 text-sm opacity-90">
                Vídeo Institucional COIMMA
              </div>
              
              <button 
                className="hover:scale-110 transition-transform duration-200"
                onClick={(e) => {
                  e.stopPropagation();
                  if (videoRef.current) {
                    if (videoRef.current.requestFullscreen) {
                      videoRef.current.requestFullscreen();
                    }
                  }
                }}
                aria-label="Tela cheia"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Caption */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">
          Clique para assistir ao nosso vídeo institucional
        </p>
      </div>
    </div>
  );
}
