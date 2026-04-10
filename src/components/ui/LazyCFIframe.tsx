'use client'

import { useRef, useEffect, useState } from 'react'

interface LazyCFIframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  lazySrc: string
}

/**
 * CF iframe that only sets `src` once it's within 400px of the viewport.
 * The iframe element is always in the DOM (layout is unaffected), but the
 * network request is deferred until the user is close to scrolling to it.
 */
export function LazyCFIframe({ lazySrc, ...props }: LazyCFIframeProps) {
  const ref = useRef<HTMLIFrameElement>(null)
  const [src, setSrc] = useState<string | undefined>(undefined)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSrc(lazySrc)
          observer.disconnect()
        }
      },
      { rootMargin: '1200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [lazySrc])

  return <iframe ref={ref} src={src} {...props} />
}
