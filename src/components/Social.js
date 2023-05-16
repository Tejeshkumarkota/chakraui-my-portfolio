import Icon from '@chakra-ui/icon'
import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa'
import { HStack } from '@chakra-ui/layout'

export default function Social() {
    return (
        <HStack 
            spacing="24"
        >
            <Icon 
                as={FaFacebookF}
                boxSize="25"
            />
            <Icon 
                as={FaGoogle}
                boxSize="25"
            />
            <Icon 
                as={FaLinkedin}
                boxSize="25"
            />
            <Icon 
                as={FaGithub}
                boxSize="25"
            />
        </HStack>
    )
}
