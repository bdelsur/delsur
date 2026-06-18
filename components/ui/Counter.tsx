'use client'

import { useEffect, useState } from 'react'

export function useCounter(target: number, duration: number, triggered: boolean): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!triggered) return
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const elapsed = ts - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [triggered, target, duration])

  return count
}

interface CounterProps {
  target: number
  duration: number
  triggered: boolean
  prefix?: string
  suffix?: string
  decimals?: number
}

export default function Counter({ target, duration, triggered, prefix = '', suffix = '', decimals = 0 }: CounterProps) {
  const scale = Math.pow(10, decimals)
  const raw = useCounter(Math.round(target * scale), duration, triggered)
  const display = decimals > 0
    ? (raw / scale).toFixed(decimals).replace('.', ',')
    : raw
  return <>{prefix}{display}{suffix}</>
}
