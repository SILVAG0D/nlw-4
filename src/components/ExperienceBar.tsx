import { useTheme } from 'next-themes';
import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';
import Switch from "react-switch";


export function  ExperienceBar(){
    const {currentExperience,experienceToNextLevel} = useContext(ChallengesContext);

    const percentToNextLevel = Math.round((currentExperience*100)) / experienceToNextLevel;

    const {theme, setTheme}  = useTheme();

    const [mounted,setMounted] = useState(false);

    function toogleTheme() {
      if(theme === 'dark') {
        setTheme('light');
      }else {
        setTheme('dark');
      }
    }

    useEffect(() => setMounted(true),[])

    if (!mounted) return null;

    return (
        <div className={styles.menu}>

        <header className={styles.experienceBar}>
          <span>0 xp</span>
          <div>
            <div style={{ width: `${percentToNextLevel}%` }} />
  
            <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
              {currentExperience}
              {' '}
              xp
            </span>
          </div>
          <span>
            {experienceToNextLevel}
            {' '}
            xp
          </span>
        </header>
  
        <div>
        <Switch className={styles.switch} onChange={toogleTheme} checked={theme ==='dark'}  onColor="#fff" offColor="#000" onHandleColor="#000"/>
        </div>
  
      </div>
    );
} 