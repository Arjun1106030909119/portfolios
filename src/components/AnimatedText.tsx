import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ children, className = '', delay = 0 }: AnimatedTextProps) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div ref={ref} className="inline-block">
      {children.split(' ').map((word, index) => (
        <span
          key={index}
          className={`inline-block ${className} transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{
            transitionDelay: isVisible ? `${delay + index * 50}ms` : '0ms',
            marginRight: '0.25em'
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
