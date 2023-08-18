//global state bu dosya içerisinde tutulacak. Kim bu context içerisimdeki state erişmek istiyorsa useContext hook kullanacak!

import { createContext, useState } from "react";


export var counterContext = createContext<CounterContextType | null>(null);


export const CounterProvider = ({children}:any) => {

    //burada tanımlanan state global statedir!
    const [counter, setcounter] = useState<number>(0);

    const values = {
        counter,
        setcounter
    }

    return <counterContext.Provider value={values}>{children}</counterContext.Provider>
}


export type CounterContextType = {
    counter:number;
    setcounter: (value:number) => void 
} 