import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { FaGithub, FaHeart, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import Logo from './Logo';

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
	return (
		<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

export default function Footer() {
	return (
		<Box>
			<Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
				<Logo />
			</Container>

			<Box borderTopWidth={1} borderStyle={'solid'}>
				<Container
					as={Stack}
					maxW={'6xl'}
					py={4}
					direction={{ base: 'column', md: 'row' }}
					spacing={4}
					justify={{ base: 'center', md: 'space-between' }}
					align={{ base: 'center', md: 'center' }}
				>
					<Stack
						direction={'row'}
						justify={{ base: 'center', md: 'space-between' }}
						align={{ base: 'center', md: 'center' }}
					>
						<Text> Made with</Text>
						<FaHeart />
						<Text>in India</Text>
					</Stack>
					<Stack direction={'row'} spacing={6}>
						<SocialButton label={'Github'} href={'https://github.com/ashusharmatech/qoutes-frontend-app'}>
							<FaGithub />
						</SocialButton>
						<SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/ashusharma31/'}>
							<FaLinkedinIn />
						</SocialButton>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
}
