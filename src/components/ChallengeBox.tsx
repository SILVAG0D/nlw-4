import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {

    const {activeChallenge,resetChallenge,completeChallenge} = useContext(ChallengesContext);

    

    

    return (
        <div className={styles.challengeBoxContainer}>
           {activeChallenge ? (
               <div className={styles.challengeActive}>
                   <header> Get {activeChallenge.amount} xp</header>

                   <main>
                       <img src={`icons/${activeChallenge.type}.svg`} />
                       <strong>New challenge</strong>
                       <p>{activeChallenge.description} </p>
                   </main>

                   <footer>
                       <button 
                         type="button"
                         className={styles.challengeFailedButton}
                         onClick= {resetChallenge}
                         
                         >
                             Failed
                       </button>

                       <button
                        type="button"
                        className={styles.challengeSucceededButton}
                         onClick={completeChallenge}         
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