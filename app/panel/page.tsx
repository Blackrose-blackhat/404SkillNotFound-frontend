import React from 'react'

const PanelIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <circle cx="32" cy="20" r="12" stroke="currentColor" strokeWidth="3" />
    <path d="M12 54c0-8.837 8.059-16 20-16s20 7.163 20 16" stroke="currentColor" strokeWidth="3" />
  </svg>
)

const Panel = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-end bg-gradient-to-b from-black via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Crowd in a semi-circle */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <div className="flex gap-8 justify-center" style={{ transform: 'rotate(-10deg)' }}>
          {Array.from({ length: 7 }).map((_, i) => (
            <PanelIcon key={i} className="w-12 h-12 text-white drop-shadow-[0_0_8px_white]" style={{ transform: `rotate(${(i-3)*8}deg)` }} />
          ))}
        </div>
        <div className="flex gap-8 justify-center mt-2" style={{ transform: 'rotate(10deg)' }}>
          {Array.from({ length: 7 }).map((_, i) => (
            <PanelIcon key={i} className="w-12 h-12 text-white drop-shadow-[0_0_8px_white]" style={{ transform: `rotate(${(i-3)*8}deg)` }} />
          ))}
        </div>
        <span className="mt-4 text-white text-base font-semibold tracking-wide">Crowd</span>
      </div>

      {/* Judges behind a desk */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 flex flex-col items-center z-20">
        <div className="relative flex items-end justify-center gap-16">
          {/* Judges */}
          <PanelIcon className="w-20 h-20 text-yellow-200 drop-shadow-[0_0_12px_yellow] z-10" />
          <PanelIcon className="w-20 h-20 text-yellow-200 drop-shadow-[0_0_12px_yellow] z-10" />
          <PanelIcon className="w-20 h-20 text-yellow-200 drop-shadow-[0_0_12px_yellow] z-10" />
          {/* Desk */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[320px] h-10 bg-gradient-to-t from-yellow-900/80 to-yellow-200/30 rounded-t-3xl shadow-2xl -z-0" />
        </div>
        <span className="mt-4 text-yellow-100 text-lg font-semibold tracking-wide">AI Judges</span>
        <span className="text-yellow-50 text-xs">Brutally honest. Hilariously accurate.</span>
      </div>

      {/* Contestant on a spotlight stage */}
      <div className="relative flex flex-col items-center mb-16 z-30">
        {/* Spotlight */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-44 h-10 bg-cyan-400/30 blur-2xl rounded-full" />
        <PanelIcon className="w-28 h-28 text-cyan-400 drop-shadow-[0_0_24px_cyan] animate-pulse relative z-10" />
        <span className="mt-4 text-cyan-200 text-xl font-bold tracking-wide">Contestant</span>
        <span className="text-cyan-100 text-sm">(Your resume is being roasted)</span>
        <span className="absolute -top-3 -right-10 bg-cyan-400 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg border-2 border-cyan-200">YOU</span>
      </div>
    </div>
  )
}

export default Panel