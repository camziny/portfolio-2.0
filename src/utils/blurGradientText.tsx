import { useSpring, animated } from '@react-spring/web';

interface BlurGradientTextProps {
  text: string;
  className?: string;
  colors?: string[];
  initialBlur?: string;
  finalBlur?: string;
  delay?: number;
  duration?: number;
}

export default function BlurGradientText({
  text,
  className = '',
  colors = ['#ffaa40', '#9c40ff', '#ffaa40'],
  initialBlur = '10px',
  finalBlur = '0px',
  delay = 200,
  duration = 800,
}: BlurGradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    backgroundSize: '300% 100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  };

  const animationProps = useSpring({
    from: { filter: `blur(${initialBlur})` },
    to: { filter: `blur(${finalBlur})` },
    delay,
    config: { duration },
  });

  return (
    <animated.span
      className={`inline-block ${className}`}
      style={{ ...gradientStyle, ...animationProps }}
    >
      {text}
    </animated.span>
  );
}
