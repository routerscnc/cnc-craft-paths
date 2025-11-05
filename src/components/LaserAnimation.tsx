import { useEffect, useState } from "react";

const LaserAnimation = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Watch Our Precision in Action
            </h2>
            <p className="text-muted-foreground text-lg">
              CNC routing, jali pattern work, and laser precision combined
            </p>
          </div>

          <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
            {/* Background grid effect */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Laser beam animation */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 800 200" className="w-full h-full">
                {/* Laser head */}
                <g className="laser-head">
                  <circle cx="50" cy="30" r="8" fill="#ef4444" className="animate-pulse" />
                  <line x1="50" y1="38" x2="50" y2="200" stroke="#ef4444" strokeWidth="2" opacity="0.6" className="laser-beam" />
                </g>

                {/* ROUTERS text being "cut" */}
                <text 
                  x="400" 
                  y="120" 
                  fontFamily="Arial, sans-serif" 
                  fontSize="80" 
                  fontWeight="bold" 
                  textAnchor="middle" 
                  fill="none" 
                  stroke="url(#laser-gradient)" 
                  strokeWidth="3"
                  className="writing-text"
                >
                  ROUTERS
                </text>

                {/* Gradient for laser effect */}
                <defs>
                  <linearGradient id="laser-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Sparks/particles animation */}
                {[...Array(12)].map((_, i) => (
                  <circle
                    key={i}
                    className="spark"
                    r="2"
                    fill="#fbbf24"
                    style={{
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    <animateMotion
                      dur="0.6s"
                      repeatCount="indefinite"
                      path={`M ${100 + i * 60} 100 Q ${120 + i * 60} ${80 + Math.random() * 40} ${140 + i * 60} ${60 + Math.random() * 80}`}
                      begin={`${i * 0.3}s`}
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;0"
                      dur="0.6s"
                      repeatCount="indefinite"
                      begin={`${i * 0.3}s`}
                    />
                  </circle>
                ))}
              </svg>
            </div>

            {/* Glow effect */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${animationComplete ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-primary/10 blur-3xl rounded-full" />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-card/50 rounded-lg border border-border">
              <div className="text-2xl font-bold text-primary mb-1">CNC</div>
              <div className="text-sm text-muted-foreground">Routing</div>
            </div>
            <div className="p-4 bg-card/50 rounded-lg border border-border">
              <div className="text-2xl font-bold text-accent mb-1">Jali</div>
              <div className="text-sm text-muted-foreground">Pattern Work</div>
            </div>
            <div className="p-4 bg-card/50 rounded-lg border border-border">
              <div className="text-2xl font-bold text-primary mb-1">Laser</div>
              <div className="text-sm text-muted-foreground">Precision</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .laser-head {
          animation: moveHead 4s ease-in-out infinite;
        }

        @keyframes moveHead {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(200px); }
          50% { transform: translateX(400px); }
          75% { transform: translateX(600px); }
        }

        .writing-text {
          stroke-dasharray: 1200;
          stroke-dashoffset: 1200;
          animation: write 4s ease-in-out infinite;
        }

        @keyframes write {
          0% { stroke-dashoffset: 1200; }
          100% { stroke-dashoffset: 0; }
        }

        .laser-beam {
          animation: beamPulse 0.3s ease-in-out infinite;
        }

        @keyframes beamPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </section>
  );
};

export default LaserAnimation;
