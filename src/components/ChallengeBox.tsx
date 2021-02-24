import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {

    const contextData = useContext(ChallengesContext);

    console.log(contextData);

    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
           {hasActiveChallenge ? (
               <div className={styles.challengeActive}>
                   <header>Get 400 xp</header>

                   <main>
                       <img src="icons/body.svg" />
                       <strong>New challenge</strong>
                       <p>Get up and get out walking </p>
                   </main>

                   <footer>
                       <button 
                         type="button"
                         className={styles.challengeFailedButton}
                         
                         >
                             Failed
                       </button>

                       <button
                        type="button"
                        className={styles.challengeSucceededButton}
                                  
                       >
                           Completed
                       </button>
                   </footer>
               </div>
           ) : (
                <div className={styles.challengeNotActive}>
                <strong>
                    Start a cycle
                    to receive challenges to
                    be completed
                </strong>
    
                <p>
                    <img src="icons/level-up.svg" alt="Level up"/>
                    Level advance completing challenges
                </p>
                </div>
           )}
        </div>
    );
}