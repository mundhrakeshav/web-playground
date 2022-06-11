import { FunctionComponent } from 'react';
import { Text } from '@chakra-ui/react'

interface ResultBoxProps {
    
}
 
const ResultBox: FunctionComponent<ResultBoxProps> = () => {
    return (<Text fontSize="3xl" textAlign="right" m="2" background="#2a2d38" borderRadius="10" p="2" pr="4">
        ResultBox
    </Text> );
}
 
export default ResultBox;