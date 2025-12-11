'use client';
import { useState, useEffect } from 'react';

export default function C7cart(props) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <div id="c7-cart" className={props.seenAnimation ? "" : "animated"}></div>
    );
}

