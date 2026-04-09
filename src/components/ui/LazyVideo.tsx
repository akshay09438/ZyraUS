'use client'

import { useRef, useEffect, forwardRef } from 'react'

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
}

export const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(
  ({ src, ...props }, forwardedRef) => {
    const internalRef = useRef<HTMLVideoElement>(null)
    const ref = (forwardedRef ?? internalRef) as React.RefObject<HTMLVideoElement>

    useEffect(() => {
      const el = ref.current
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.src = src
            observer.disconnect()
          }
        },
        { rootMargin: '600px' }
      )

      observer.observe(el)
      return () => {
        observer.disconnect()
        el.src = ''
      }
    }, [src, ref])

    return <video ref={ref} {...props} />
  }
)

LazyVideo.displayName = 'LazyVideo'
