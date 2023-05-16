import { Box, Circle, Flex, Stack, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode'; 
import { useMediaQuery } from '@chakra-ui/media-query';
import { Image } from '@chakra-ui/image';

export default function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const { isNotSmallerScreen } = useMediaQuery("(min-width: 600px)");

    return (
        <Stack>
            <Circle
                position="absolute"
                bg="blue.100"
                opacity="0.1"
                w="250px"
                h="250px"
                right="200px"
                zIndex="0"
                alignSelf="flex-end"
            />
            <Flex
                direction={isNotSmallerScreen ? "column" : "row"}
                spacing="150px"
                p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start"
            >
                <Box
                    mt={isNotSmallerScreen ? "0" : "16"}
                    align="flex-start"
                >
                    <Text
                        fontSize="5xl"
                        fontWeight="semibold"
                    >
                        Hi, I am
                    </Text>
                    <Text
                        fontSize="7xl"
                        fontWeight="bold"
                        bgClip="text"
                        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                    >
                        Tejesh Kumar Kota
                    </Text>
                    <Text
                        color={isDark ? "gray.200" : "gray.500"}
                    >
                        Iam a Front End UI Developer
                    </Text>
                    <Button
                        mt={8}
                        colorScheme="blue"
                    >
                        Hire Me
                    </Button>
                </Box>
                <Image 
                    src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/5e6742f47d64450d01a75c48/0bc3a3b9-18e8-47a6-9018-4ab1af3eedf1/48"
                    alignSelf="center"
                    mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"}
                    borderRadius="full"
                    backgroundColor="transparent"
                    boxShadow="lg"
                    boxSize="250px"
                />
            </Flex>
        </Stack>
    )
}
