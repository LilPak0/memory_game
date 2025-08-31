import { useEffect, useRef, useState } from "react";


export default function useTimer() {
    const [time, setTime] = useState("00:00");
    const timeRef = useRef(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isActive) {
            interval = setInterval(() => {
                timeRef.current += 1;
                setTime(
                    `${Math.floor(timeRef.current / 60).toString().padStart(2, '0')}:${(timeRef.current % 60).toString().padStart(2, '0')}`
                );
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isActive]);

    const startTimer = () => {
        setIsActive(true);
    };

    const stopTimer = () => {
        setIsActive(false);
    };

    const resetTimer = () => {
        setTime("00:00");
        timeRef.current = 0;
        setIsActive(false);
    };

    return {
        time,
        startTimer,
        stopTimer,
        resetTimer
    };
};