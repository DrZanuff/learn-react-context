import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding : 0.5rem;
    background: #AFAFAF;

    span{
        display: flex;
        justify-content: center; 
    }

    strong{
        display: flex;
        justify-content: center; 
    }

    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;

        button{
            max-width: 159px;
        }
    }
`;