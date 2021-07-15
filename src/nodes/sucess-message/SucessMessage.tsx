import { useMessage } from '../../hooks/useMessage';
import { useState } from 'react';
import { Box } from './SucessMessageStyle';


export function SucessMessage(){

    const { alertSucess , nickName } = useMessage(); 
    const [message , setMessage] = useState('');

    function handleMessage(){
        alertSucess( (nickName + ': ' + message ));
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