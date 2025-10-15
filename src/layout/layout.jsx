import React from 'react';
import ReactLenis from "lenis/react";

export const Layout = ({ children }) => {
    return (
        <ReactLenis root options={{lerp: 0.025}}>
            {children}
        </ReactLenis>
    );
}

