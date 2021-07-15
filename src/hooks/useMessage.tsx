import { useState, createContext , useContext , ReactNode } from 'react';
import { Toaster , toast } from 'react-hot-toast';

interface FunctionsContextData{
    alertSucess : ( message : string) => void,
    alertFailure : ( message : string) => void,
    setNickName : (name : string) => void,
    nickName : string,
}

interface FunctionsContextProviderProps {
    children : ReactNode;
}

const FunctionsContext = createContext<FunctionsContextData>( { } as FunctionsContextData )

export function FunctionsContextProvider( { children } : FunctionsContextProviderProps ){

    const [nickName , setNickName ] = useState('User');

    function alertSucess(message : string){
        toast.success(message)
    }

    function alertFailure(message : string){
        toast.error(message)
    }

    return(
        <FunctionsContext.Provider value={ {alertSucess , alertFailure , setNickName , nickName } }>
            <Toaster />
            {children}
        </FunctionsContext.Provider>
    )
}

export function useMessage(){
    const context = useContext(FunctionsContext);

    return context;
}