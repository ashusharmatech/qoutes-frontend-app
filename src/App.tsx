import { ChakraProvider, VStack, theme, Flex, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Footer from './Footer';
import Qoute from './Qoute';

export const App = () => (
	<ChakraProvider theme={theme}>
		<Flex
			w={'full'}
			h={'100vh'}
			bgColor={[ 'pink.400' ]}
			backgroundSize={'cover'}
			backgroundPosition={'center center'}
		>
			<VStack w={'full'} justify={'center'} bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
				<Qoute />
				<Footer />
			</VStack>
		</Flex>
	</ChakraProvider>
);
