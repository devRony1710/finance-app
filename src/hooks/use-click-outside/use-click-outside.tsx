import type { RefObject } from 'react'
import { useEffect } from 'react'

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handleOnClickOutside: (event: MouseEvent | TouchEvent) => void,
  options?: {
    ignoreRefs?: Array<RefObject<HTMLElement>>
    ignorePredicate?: (event: MouseEvent | TouchEvent) => boolean
  }
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      // If consumer provided a predicate to ignore events, honor it
      if (options?.ignorePredicate && options.ignorePredicate(event)) {
        return
      }

      // If click is inside any of the ignoreRefs, ignore
      if (options?.ignoreRefs?.some((r) => r.current?.contains(event.target as Node))) {
        return
      }
      handleOnClickOutside(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handleOnClickOutside, options])
}
