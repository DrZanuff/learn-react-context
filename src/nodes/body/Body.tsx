import { Box } from './BotyStyle';
import { ReactNode } from 'react'

interface BodyProps{
    children : ReactNode;
}

export function Body({ children} : BodyProps  ){
    return(
        <Box>
            {children}
        </Box>
    )
}