import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 600);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 10 + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-600 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated logo */}
      <div className="mb-8 relative">
        <div className="text-6xl font-bold name-font animate-pulse">
          NS
        </div>
        <div className="absolute inset-0 text-6xl font-bold name-font opacity-30 animate-ping">
          NS
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-muted rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-primary transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Progress text */}
      <div className="text-sm text-muted-foreground font-mono">
        Loading... {Math.floor(Math.min(progress, 100))}%
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float-delayed" />
      </div>
    </div>
  );
};

export default LoadingScreen;