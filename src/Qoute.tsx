import { Box, Button, Spinner, Stack, Text } from '@chakra-ui/react';
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
			{isLoading && <Spinner thickness="40px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="6xl" />}
			{!isLoading &&
			qoute && (
				<Box>
					<Text color={'white'} fontWeight={700} lineHeight={1.2} fontSize="6xl">
						{qoute['quote']}
					</Text>
					<Text color={'pink'} fontWeight={700} lineHeight={1} fontSize="4xl">
						{qoute['author']}
					</Text>
				</Box>
			)}
			<Stack direction={'row'}>
				<Button
					bg={'whiteAlpha.300'}
					rounded={'full'}
					color={'white'}
					_hover={{ bg: 'whiteAlpha.500' }}
					onClick={getQoute}
				>
					Show me more
				</Button>
			</Stack>
		</Stack>
	);
};

export default Qoute;
