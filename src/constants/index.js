import { useEffect, useState } from 'react'

export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export function usePrefersReducedMotion() {
    const [prefersReducedMotion, set] = useState(false)
    useEffect(() => {
        const media = window.matchMedia('(prefers-reduced-motion: reduce)')
        set(media.matches)
        const listener = () => set(media.matches)
        media.addEventListener('change', listener)
        return () => media.removeEventListener('change', listener)
    }, [])
    return prefersReducedMotion
}

export function useHover() {
    const [hovered, hover] = useState(false)
    return [hovered, { onPointerOver: (e) => hover(true), onPointerOut: () => hover(false) }]
}


