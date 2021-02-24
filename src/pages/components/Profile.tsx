import styles from "../styles/components/Profile.module.css";

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/SILVAG0D.png" alt="Gustavo da Silva Liesch" />


            <div>
                <strong>Gustavo da Silva Liesch</strong>
               
                <p>
                <img src="icons/level.svg" alt="Level"/>
                    Level 1
                    </p>
            </div>
        </div>
    );
}