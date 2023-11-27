import { Box, Center, ChakraProvider, Flex, Input, Spinner } from '@chakra-ui/react';
import Botao from '../Button/Button';
import { useState, useEffect } from 'react';
import { api } from '../../api';
import './Card.css'// 

interface UserData{
  email: string
  senha: string
  nome: string
}

export const Card = () => {
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState< null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };
    getData();
  }, []);

  return (
    <ChakraProvider>
      <Box minHeight="95vh" backgroundColor="#02021E" padding="5px">
        <Flex justify='center'>
        { userData === null || userData === undefined && <Spinner color='white' size='xl'/> }
        </Flex>
        <Box backgroundClip="#ffffff" borderRadius="25px">
          <b>
            <h1>Realize o login!</h1>
          </b>
          <Flex direction="column" marginLeft="30%" marginRight="30%" justify="center" h="25vh">
            <Box mb="5">
              <Input
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
            <Botao />
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
};
