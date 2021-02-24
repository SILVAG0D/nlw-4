import {createContext, ReactNode, useState} from 'react';




interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
}

interface challengesProviderProps {
    children: ReactNode;
}


export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider ({children} : challengesProviderProps) {
    const [level,setLevel] = useState(1);
    const [currentExperience,setCurrenceExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);





    function levelUp() {
        setLevel(level + 1);
    }


    function startNewChallenge(){
        console.log('New challenge');
    }

    return (
        <ChallengesContext.Provider value={{level,currentExperience,challengesCompleted, levelUp,startNewChallenge}}>
            {children}
        </ChallengesContext.Provider>
    )

}