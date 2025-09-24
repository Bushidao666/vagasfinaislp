import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate = new Date('2025-09-26T23:00:00-03:00'), // 26/09/2025 às 23h00 GMT-3
  className = ""
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <motion.div 
      className="seven-segment bg-bss-carbon border border-bss-green/30 rounded-lg p-2 md:p-4 min-w-[60px] md:min-w-[80px] text-center"
      whileHover={{ scale: 1.05, borderColor: 'rgba(123, 251, 78, 0.6)' }}
      transition={{ duration: 0.2 }}
    >
      <motion.div 
        className="text-lg md:text-2xl lg:text-3xl font-bold text-bss-green font-ibm-mono seven-segment"
        key={value}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          fontFamily: "'Courier New', monospace",
          fontWeight: 'bold',
          letterSpacing: '2px'
        }}
      >
        {String(value).padStart(2, '0')}
      </motion.div>
      <div className="text-xs text-bss-gray uppercase tracking-wide font-poppins">
        {label}
      </div>
    </motion.div>
  );

  return (
    <div className={`font-ibm-mono ${className}`}>
      <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-6 flex-wrap">
        <TimeUnit value={timeLeft.days} label="dias" />
        <div className="text-bss-green text-lg md:text-2xl font-bold animate-pulse">:</div>
        <TimeUnit value={timeLeft.hours} label="horas" />
        <div className="text-bss-green text-lg md:text-2xl font-bold animate-pulse">:</div>
        <TimeUnit value={timeLeft.minutes} label="min" />
        <div className="text-bss-green text-lg md:text-2xl font-bold animate-pulse">:</div>
        <TimeUnit value={timeLeft.seconds} label="seg" />
      </div>
    </div>
  );
};