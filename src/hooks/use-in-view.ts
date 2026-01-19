
import { useEffect, useState, useRef, type RefObject } from 'react'

export function useInView(
    options: IntersectionObserverInit = { threshold: 0.1 }
): [RefObject<HTMLElement | null>, boolean] {
    const ref = useRef<HTMLElement | null>(null) // Explicitly type the ref to allow null
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true)
                observer.disconnect() // Trigger once
            }
        }, options)

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [options]) // Re-run if options change (rare, but correct)

    return [ref, isInView]
}
