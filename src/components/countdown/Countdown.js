import React, { useState, useEffect } from 'react';
import { CountDownWrapper, ClocksWrapper, Clock } from './index.style';

const CountDown = () => {
    const [isExpired, setIsExpired] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const countDownDate = new Date("Nov 13, 2022 11:00:00").getTime();
        const x = setInterval(() => {

            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const day = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const second = Math.floor((distance % (1000 * 60)) / 1000);
            if (days !== day) {
                setDays(day);
            }
            if (hours !== hour) {
                setHours(hour);
            }
            if (minutes !== minute) {
                setMinutes(minute);
            }
            if (seconds !== second) {
                setSeconds(second);
            }

            // If the count down is finished, write some text 
            if (distance < 0) {
                clearInterval(x);
                setIsExpired(true);
            }
        }, 1000);

        return () => {
            clearInterval(x);
        }

    }, [days, hours, minutes, seconds]);

    return (
        <>
            {isExpired
                ? <div>Yay....</div>
                :
                <CountDownWrapper>
                    <h2>Don't miss it!</h2>
                    <ClocksWrapper>
                        <Clock><span>{days}</span> Days</Clock>
                        <Clock><span>{hours}</span> Hours</Clock>
                        <Clock><span>{minutes}</span> Minutes</Clock>
                        <Clock><span>{seconds}</span> Seconds</Clock>
                    </ClocksWrapper>
                </CountDownWrapper>
            }

        </>
    );
}

export default CountDown;


