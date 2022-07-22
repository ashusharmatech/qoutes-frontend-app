import { Box, Button, Spinner, Stack, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Qoute = () => {
	const url = 'https://qoutes.cyclic.app/random';

	const [ isLoading, setLoading ] = useState(true);
	const [ qoute, setQoute ] = useState();

	const getQoute = () => {
		setLoading(true);
		axios.get(url).then((res) => {
			setQoute(res.data.data[0]);
			setLoading(false);
		});
	};

	useEffect(() => {
		getQoute();
	}, []);

	return (
		<Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
			{isLoading && <Spinner thickness="40px" speed="2s" emptyColor="pink.200" color="pink.500" size="10xl" />}
			{!isLoading &&
			qoute && (
				<VStack m={{ base: 4, md: 0 }} gap={6}>
					<Text
						color={'white'}
						fontWeight={{ base: '400', sm: '200', md: '300', lg: '700' }}
						lineHeight={1.2}
						fontSize={{ base: '3xl', sm: '3xl', md: '4xl', lg: '6xl' }}
					>
						{qoute['quote']}
					</Text>
					<Text
						color={'pink'}
						fontWeight={{ base: '400', sm: '200', md: '300', lg: '700' }}
						lineHeight={1.2}
						fontSize={{ base: '3xl', sm: '3xl', md: '4xl', lg: '6xl' }}
					>
						{qoute['author']}
					</Text>
					<Button
						bg={'whiteAlpha.300'}
						rounded={'full'}
						color={'white'}
						_hover={{ bg: 'whiteAlpha.500' }}
						onClick={getQoute}
					>
						Get More!
					</Button>
				</VStack>
			)}
		</Stack>
	);
};

export default Qoute;
