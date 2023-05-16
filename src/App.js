import { Flex, Heading, IconButton, Spacer, useColorMode, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8"
          size="md"
          fontWeight="semibold"
          color="blue"
        >
          Tejesh
        </Heading>
        <Spacer></Spacer>
        <IconButton
          icon={<FaLinkedin />}
          onClick={toggleColorMode}
          isRound="true"
        >
        </IconButton>
        <IconButton
          ml="2"
          icon={<FaGithub />}
          onClick={toggleColorMode}
          isRound="true"
        >
        </IconButton>
        <IconButton
          ml="8"
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
          isRound="true"
        >
        </IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
