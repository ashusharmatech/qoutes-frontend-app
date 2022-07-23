import { Image } from '@chakra-ui/react'
import React from 'react'

const Logo = (props: any) => {
  return (
    <Image src={process.env.PUBLIC_URL + '/favicon.gif'} height={20}></Image>
  )
}

export default Logo
