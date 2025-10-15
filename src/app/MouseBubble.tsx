"use client"
import { useEffect, useRef } from 'react';

export function InteractiveBubble() {
    const bubbleRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>();
    const cursorPos = useRef({ curX: 0, curY: 0, tgX: 0, tgY: 0 });

    useEffect(() => {
        const move = () => {
            const { curX, curY, tgX, tgY } = cursorPos.current;

            cursorPos.current.curX += (tgX - curX) / 20;
            cursorPos.current.curY += (tgY - curY) / 20;

            if (bubbleRef.current) {
                bubbleRef.current.style.transform =
                    `translate(${Math.round(cursorPos.current.curX)}px, ${Math.round(cursorPos.current.curY)}px)`;
            }

            animationRef.current = requestAnimationFrame(move);
        };

        const handleMouseMove = (event: MouseEvent) => {
            cursorPos.current.tgX = event.clientX;
            cursorPos.current.tgY = event.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        animationRef.current = requestAnimationFrame(move);

        // Очистка
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div ref={bubbleRef} className="interactive">
            {/* содержимое пузырька */}
        </div>
    );
}
