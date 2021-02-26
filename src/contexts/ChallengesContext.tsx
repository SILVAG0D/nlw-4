import {createContext, ReactNode, useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

interface challengesProviderProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}



export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider ({children,...rest} : challengesProviderProps) {
    const [level,setLevel] = useState(rest.level  );
    const [currentExperience,setCurrenceExperience] = useState(rest.currentExperience );
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted );

    
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1)*4,2)


    useEffect(() => {
        Notification.requestPermission(); //serve para aparecer notificação no browser
    }, [])


    useEffect(() => {
        Cookies.set('level',String(level));
        Cookies.set('currentExperience',String(currentExperience));
        Cookies.set('challengesCompleted',String(challengesCompleted));
    }, [level,currentExperience,challengesCompleted]);


    function levelUp() {
        setLevel(level + 1);
    }


    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random()* challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge)

         new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
            new Notification ('New challenge', {
                body: `Worth ${challenge.amount}xp!` 
            })
        }
    }

    function resetChallenge () {
        setActiveChallenge(null);
    }


    function completeChallenge () {
        if (!activeChallenge) {
            return;
        }

        const {amount} = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrenceExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }

    

    return (
        <ChallengesContext.Provider value={{level,experienceToNextLevel,currentExperience,challengesCompleted, levelUp,startNewChallenge,activeChallenge,resetChallenge,completeChallenge}}>
            {children}
        </ChallengesContext.Provider>
    )

}