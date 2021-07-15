import React from 'react';
import {Body} from './nodes/body/Body';
import { LastMessage } from './nodes/last-message/LastMessage';
import { SucessMessage } from './nodes/sucess-message/SucessMessage';
import { FailureMessage } from './nodes/failure-message/FailureMessage';
import { FunctionsContextProvider } from './hooks/useMessage';
 
export function App() {
  return (
    <FunctionsContextProvider>
      <Body>
        <LastMessage></LastMessage>
        <SucessMessage></SucessMessage>
        <FailureMessage></FailureMessage>
      </Body>
    </FunctionsContextProvider>
  );
}
