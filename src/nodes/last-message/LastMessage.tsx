import { useState } from 'react'
import { useMessage } from '../../hooks/useMessage';
import { Box } from './LastMessageStyle';

export function LastMessage(){

    const [ newNickName , setNewNickName ] = useState('')
    const { nickName , setNickName } = useMessage()
    
    function handleChangeNickName(){
        setNickName(newNickName)
        setNewNickName('');
    }
    
    return(
        <Box>
            <h4>User Name: {nickName}</h4>
            <span>Last Message</span>
            <strong>Message</strong>
            <div>
                <input
                    type='text' 
                    value={newNickName} 
                    onChange={ e => setNewNickName(e.target.value)}
                >   
                </input>
                <button onClick={ handleChangeNickName }>Change Nick</button>
            </div>
        </Box>
    )
}