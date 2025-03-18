import { useEffect, useState } from "react";
import dayjs from "dayjs";

export const useCounter = (date) => {
    
    let timer = null;

    const [timeDown, setTimeDown] = useState('00:00');
    const [countComplete, setCountComplete] = useState(false);

    useEffect(() => {
        setCountComplete(false);

        if(date) return countDown();

        return () => removeTimer();
    }, [date]);

    const countDown = () => {
        timer = setInterval(() => {
            let totalSeconds = dayjs(date).diff(Date.now(), 's');
            let currentMinutes = dayjs(date).diff(Date.now(), 'm');
            let currentSeconds = totalSeconds % 60;

            setTimeDown(() => {
                let formatMinutes = currentMinutes <= 9 ? `0${ currentMinutes }` : currentMinutes;
                let formatSeconds = currentSeconds <= 9 ? `0${ currentSeconds }` : currentSeconds;

                return `${ formatMinutes }:${ formatSeconds }`
            })

            totalSeconds--;

            if(totalSeconds < 0) return removeTimer();
        }, 1000);
    }

    const removeTimer = () => {
        clearInterval(timer);
        setCountComplete(true);
        timer = null;
    }

	return {
        countComplete,
        timeDown
    }
}