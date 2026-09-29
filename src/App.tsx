function App() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-p5red text-white font-body">
      <div className="absolute inset-0 overflow-hidden">
        <div className="halftone absolute inset-0" />
        <div className="absolute left-[-10%] top-[-5%] w-[60%] h-[112%] bg-p5black [clip-path:polygon(0_0,100%_0,72%_100%,0_100%)] animate-shardx" />
        <div className="absolute right-[-5%] bottom-[-8%] w-[55%] h-[35%] bg-p5black [clip-path:polygon(30%_0,100%_20%,100%_100%,0_100%)] animate-shardy" />
        <div className="absolute right-[8%] top-[-4%] w-[16%] h-[20%] bg-white [clip-path:polygon(0_0,100%_0,60%_100%)] animate-shardy" />
        <svg viewBox="-100 -100 200 200" className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[min(70vh,60vw)] animate-spin-slow">
          <polygon points="0,-95 27,-30 95,-29 42,15 59,80 0,42 -59,80 -42,15 -95,-29 -27,-30" fill="#000" stroke="#fff" strokeWidth="3" />
        </svg>
      </div>
    </div>

    
  )
}

export default App
