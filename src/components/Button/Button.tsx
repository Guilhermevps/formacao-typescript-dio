import { Button, ChakraProvider } from "@chakra-ui/react"

export function Botao(){
        const handleClick = () => {
            alert('Bem vindo!');
        }

        return(
            <ChakraProvider>
            <Button colorScheme="whiteAlpha" size="lg" width="95px" onClick={handleClick}> Entrar </Button>
            </ChakraProvider>
        )
    }

export default Botao;