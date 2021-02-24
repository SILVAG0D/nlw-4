import styles from "../styles/components/CompletedChallenges.module.css";

export function CompletedChallenges(){
    return(
        <div className={styles.CompletedChallengesContainer}>
            <span>Desafios hardcores completos</span>
            <span>12</span>
        </div>
    );
}