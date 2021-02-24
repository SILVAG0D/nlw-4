import { useState,useEffect } from "react";
import styles from "../styles/components/Countdown.module.css";


let countdownTimeout : NodeJS.Timeout;

export function Countdown () {

        const [time,setTime] = useState(25*60);
        const [isActive,setIsActive] = useState(false);
        const [hasFinished,setHasFinished] = useState(false);

        const minutes = Math.floor(time / 60);
        const seconds = time % 60;


        const [minuteLeft,minuteRight] = String(minutes).padStart(2, '0').split('');
        const [secondLeft,secondRight] = String(seconds).padStart(2, '0').split('');



        function startCountdown () {
            setIsActive(true);
        }

        useEffect(() =>{
            if (isActive && time > 0) {
               countdownTimeout = setTimeout(() =>{
                    setTime(time - 1);
                }, 1000);
            } else if (isActive && time == 0) {
                setHasFinished(true);
                setIsActive(false);
            }
        }, [isActive,time]);


        function resetCountdown(){
            clearTimeout(countdownTimeout);
            setIsActive(false);
            setTime(25*60);
        }

    return (
        <div>
        <div className={styles.CountdownContainer}>
            
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
            <span>{secondLeft}</span>
            <span>{secondRight}</span>
            </div>

        </div>


            {hasFinished ? (
                <button disabled className={styles.CountdownButton} >
                Closed cycle
            </button>
            ) : (
                <>
                     {isActive ?(
                 <button type="button" className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`} onClick={resetCountdown}>
                 Leave cycle
             </button>
            ) :(
                <button type="button" className={styles.CountdownButton} onClick={startCountdown}>
                Start a cycle
            </button>

            )}

                </>
            )}

           
                       

        </div>
    );
}
