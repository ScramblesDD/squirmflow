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

{/*
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
*/}

export function useHover() {
    const [hovered, hover] = useState(false)
    return [hovered, { onPointerOver: (e) => hover(true), onPointerOut: () => hover(false) }]
}

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        displayScale : isSmall ? 0.7 : isMobile ? 0.9 : isTablet ? 1 : 1.8,
        zPos : isSmall ? [0, 0, 2.2] : isMobile ? [0, 0, 2.2] : isTablet ? [0, 0, 1.5] : [0, 0, 1.6],
        camPos : isSmall ? [0, .75, 0] : isMobile ? [0, 1.2, 1] : isTablet ? [0, 1, 0.8] : [0, 2.5, 0],
    }
}
