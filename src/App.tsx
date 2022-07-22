import { ChakraProvider, VStack, theme, Flex } from '@chakra-ui/react';
import Qoute from './Qoute';

export const App = () => (
	<ChakraProvider theme={theme}>
		<Flex
			w={'full'}
			h={'100vh'}
			bgColor={[ 'pink.400']}
			backgroundSize={'cover'}
			backgroundPosition={'center center'}
		>
			<VStack w={'full'} justify={'center'} bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
				<Qoute />
			</VStack>
		</Flex>
	</ChakraProvider>
);
