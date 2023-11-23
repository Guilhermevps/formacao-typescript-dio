import { Box, Center, ChakraProvider, Flex, Input } from '@chakra-ui/react';
import Botao from '../Button/Button';

export const Card = () => {
  return(
    <ChakraProvider>
    <Box minHeight="95vh" backgroundColor="#02021E" padding="5px">
    <Box backgroundClip="#ffffff" borderRadius="25px">
      <b>
        <h1>Faça o Login</h1>
      </b>
      <Flex direction="column" marginLeft="30%" marginRight="30%" justify="center" h="25vh">
        <Box mb="5">
          <Input
            placeholder="Email"
            size="md"
            h="40px"
            color="white"
            _placeholder={{ color: 'white' }}
            _focus={{ borderColor: 'teal.500', boxShadow: 'outline', bg: 'gray.900' }}
          />
        </Box>
        <Box mb="5">
          <Input
            placeholder="Senha"
            size="md"
            h="40px"
            color="white"
            _placeholder={{ color: 'white' }}
            _focus={{ borderColor: 'teal.500', boxShadow: 'outline', bg: 'gray.900' }}
          />
        </Box>
      </Flex>
      <Center>
        <Botao/>
      </Center>
    </Box>
  </Box>
  </ChakraProvider>
  )
}