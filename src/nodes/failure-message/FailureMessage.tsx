import { useMessage } from '../../hooks/useMessage';
import { useState } from 'react';
import { Box } from './FailureMessageStyle';

export function FailureMessage(){

    const { alertFailure , nickName } = useMessage(); 
    const [message , setMessage] = useState('');

    function handleMessage(){
        alertFailure( (nickName + ': ' + message ))
        setMessage('');
    }

    return(
        <Box>
            <span>Sucess Message - Nick</span>
            <div>
                <input type="text" value={message} onChange={ (e) => setMessage(e.target.value) } />
                <button onClick={ handleMessage }>Send</button>
            </div>
        </Box>
    )
}