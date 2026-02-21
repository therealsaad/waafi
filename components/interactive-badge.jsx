"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"

export function InteractiveBadge({ className = "" }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <button
        aria-pressed={playing}
        onClick={() => setPlaying((s) => !s)}
        className="interactive-play-btn"
      >
        {playing ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
        <span>{playing ? "Pause" : "Play"}</span>
      </button>

      <div className={`interactive-dots ${playing ? "playing" : ""} flex items-center gap-2`}> 
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
