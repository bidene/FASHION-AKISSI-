import { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
}

function StatItem({ end, suffix, label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60 fps approx

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={elementRef} className="text-center p-6 transition-transform hover:scale-105 duration-300">
      <div className="text-4xl md:text-5xl font-black text-white mb-2 flex justify-center items-baseline">
        <span>{count}</span>
        <span className="text-2xl md:text-3xl ml-0.5">{suffix}</span>
      </div>
      <div className="text-rose-100 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-90">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-rose-700 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[60%] border-[40px] border-white rounded-full rotate-12" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[80%] border-[60px] border-white rounded-full -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <StatItem end={500} suffix="+" label="Clients Satisfaits" />
          <StatItem end={120} suffix="+" label="Articles en Stock" />
          <StatItem end={5} suffix="+" label="Années d'Expérience" />
          <StatItem end={100} suffix="%" label="Qualité Garantie" />
        </div>
      </div>
    </section>
  );
}
