import React, { useState, useEffect, useRef } from 'react';
import './CSS Files/ParallaxEffect.css';

const AlternateParallax = () => {
    const [scrollY, setScrollY] = useState(0);
    const parallaxBgRef = useRef(null); // Reference to the background element

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            setScrollY(scrollPos);

            // Update the background position based on the scroll position
            if (parallaxBgRef.current) {
                parallaxBgRef.current.style.transform = `translateY(${scrollPos * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-container">
            <div className="parallax-bg" ref={parallaxBgRef}></div>
            <div className="parallax-content">
                <h1>Parallax Scroll Effect</h1>
                <p>Enjoy the scroll magic!</p>
            </div>
        </div>
    );
};

export default AlternateParallax;




