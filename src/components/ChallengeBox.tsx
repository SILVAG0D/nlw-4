import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
    return (
        <div className={styles.challengeBoxContainer}>
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
        </div>
    );
}