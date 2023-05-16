import React from 'react'
import { DiCodeigniter, DiResponsive, DiWebplatform } from 'react-icons/di';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';

export default function Profile() {

    const { isNotSmallerScreen } = useMediaQuery("(min-width: 600px)");

    return (
        <Flex
            direction={isNotSmallerScreen ? "row" : "column"}
            w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
        >
            <Box
                alignSelf="center"
                px="32"
                py="16"
            >
                <Text
                    fontWeight="bold"
                    fontSize="2xl"
                    textAlign="center"
                >
                    Product Developer, specialised in web development.
                </Text>
                <Flex
                    direction={isNotSmallerScreen ? "column" : "row"}
                    mt={8}
                >
                    <Flex
                        direction="column"
                        mt={4}
                        h="25vh"
                        w="25vh"
                        justify="center"
                        alignSelf="center"
                        py="4"
                    >
                        <Heading
                            fontWeight="extrabold"
                            color="cyan.500"
                            size="3xl"
                            pb="5"
                        >
                            3+
                        </Heading>
                        <Text
                            fontSize="xl"
                            color="gray.400"
                        >
                            Years of Experience
                        </Text>
                    </Flex>
                    <Flex
                        rounded="xl"
                        direction="column"
                        mt={4}
                        bg="blue.400"
                        h="25vh"
                        ml={isNotSmallerScreen ? 0 : 4}
                        w="25vh"
                        justify="flex-end"
                    >
                        <Icon
                            color="white"
                            p="4"
                            as={DiWebplatform}
                            w="24"
                            h="24"
                        />
                        <Text
                            color="white"
                            p="4"
                            fontSize="xl"
                            fontWeight="semibold"
                        >
                            Web Apps
                        </Text>
                    </Flex>
                    <Flex
                        rounded="xl"
                        direction="column"
                        mt={4}
                        ml={isNotSmallerScreen ? 0 : 4}
                        bg="gray.100"
                        h="25vh"
                        w="25vh"
                        justify="flex-end"
                        _hover={{ bg: "teal.400" }}
                    >
                        <Icon
                            color="black"
                            p="4"
                            as={DiCodeigniter}
                            w="24"
                            h="24"
                        />
                        <Text
                            color="black"
                            p="4"
                            fontSize="xl"
                            fontWeight="semibold"
                        >
                            Mendix Web
                        </Text>
                    </Flex>
                    <Flex
                        rounded="xl"
                        direction="column"
                        mt={4}
                        ml={isNotSmallerScreen ? 0 : 4}
                        bg="gray.100"
                        h="25vh"
                        w="25vh"
                        justify="flex-end"
                        _hover={{ bg: "green.400" }}
                    >
                        <Icon
                            color="black"
                            p="4"
                            as={DiResponsive}
                            w="24"
                            h="24"
                        />
                        <Text
                            color="black"
                            p="4"
                            fontSize="xl"
                            fontWeight="semibold"
                        >
                            Web Responsive 
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}
