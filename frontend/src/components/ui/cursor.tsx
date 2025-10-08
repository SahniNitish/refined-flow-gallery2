import { useCursor } from '@/hooks/useCursor';

const CustomCursor = () => {
  const { position, isHovering, isClicking } = useCursor();

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-300 ease-out mix-blend-difference ${
          isHovering ? 'scale-150' : 'scale-100'
        } ${isClicking ? 'scale-75' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-3 h-3 bg-white rounded-full" />
      </div>
      
      {/* Trailing cursor effect */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-500 ease-out opacity-20 ${
          isHovering ? 'scale-200' : 'scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-8 h-8 border border-white rounded-full" />
      </div>
    </>
  );
};

export default CustomCursor;