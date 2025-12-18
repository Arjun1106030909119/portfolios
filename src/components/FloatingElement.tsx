interface FloatingElementProps {
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FloatingElement({
  delay = 0,
  duration = 3,
  className = ''
}: FloatingElementProps) {
  return (
    <div
      className={`absolute rounded-full blur-2xl opacity-20 -z-10 animate-pulse ${className}`}
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    />
  );
}
