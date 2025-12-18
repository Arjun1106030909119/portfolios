interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 animate-pulse ${className}`}>
      {children}
    </span>
  );
}
