'use client';
import { useState, useEffect } from 'react';

export default function C7account(props) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <div id="c7-account" className={props.seenAnimation ? "c7-btn" : "c7-btn animated"}></div>
    );
}

