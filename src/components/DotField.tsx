import { useEffect, useRef } from 'react'

type Dot = {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  alpha: number
}

export function DotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0
    let dots: Dot[] = []
    let raf = 0
    let w = 0
    let h = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.max(18, Math.floor((w * h) / 52000))
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 10 + Math.random() * 28,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        alpha: 0.08 + Math.random() * 0.18,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy

        if (d.x < -d.r) d.x = w + d.r
        if (d.x > w + d.r) d.x = -d.r
        if (d.y < -d.r) d.y = h + d.r
        if (d.y > h + d.r) d.y = -d.r

        const pulse = 0.85 + Math.sin(frame * 0.012 + d.x * 0.01) * 0.15
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(240, 180, 41, ${d.alpha})`
        ctx.fill()
      }

      frame += 1
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas className="dot-field" ref={canvasRef} aria-hidden="true" />
}
