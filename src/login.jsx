import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import { GithubLogo } from "./github-logo";

export function Login() {
  return (
    <Box>
      <Center>
        <Stack spacing="4">
          <VStack as="header" spacing="6" mt="8">
            <GithubLogo />
            <Heading
              as="h1"
              fontWeight="300"
              fontSize="24px"
              letterSpacing="-0.5px"
            >
              Sign in to GitHub
            </Heading>
          </VStack>

          <Card bg="#f6f8fa" variant="outline" borderColor="#d8dee4" w="308px">
            <CardBody>
              <form>
                <Stack spacing="4">
                  <FormControl>
                    <FormLabel size="sm">Username or email address</FormLabel>
                    <Input
                      type="text"
                      bg="white"
                      borderColor="#d8dee4"
                      borderRadius="6px"
                      size="sm"
                    />
                  </FormControl>
                  <FormControl>
                    <HStack justify="space-between">
                      <FormLabel size="sm">Password</FormLabel>
                      <Button
                        variant="link"
                        size="xs"
                        color="#0969da"
                        fontWeight="500"
                        as="a"
                        href="#"
                      >
                        Forget Password
                      </Button>
                    </HStack>
                    <Input
                      type="password"
                      bg="white"
                      borderColor="#d8dee4"
                      borderRadius="6px"
                      size="sm"
                    />
                  </FormControl>
                  <Button
                    bg="#2da44e"
                    color="white"
                    size="sm"
                    _hover={{ bg: "#2c974b" }}
                    _active={{ bg: "#298e46" }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>
          <Card variant="outline" borderColor="#d0d7de">
            <CardBody>
              <Center>
                <HStack fontSize="sm" spacing="1">
                  <Text>New to GitHub?</Text>
                  <Link isExternal color="#0969da" href="#">
                    Create an account
                  </Link>
                </HStack>
              </Center>
            </CardBody>
          </Card>
        </Stack>
      </Center>
      <Center as="footer" mt="16">
        <HStack spacing="4" pt="2">
          <Link isExternal href="#" fontSize="xs" color="#0969da">
            Terms
          </Link>
          <Link isExternal href="#" fontSize="xs" color="#0969da">
            Privacy
          </Link>
          <Link isExternal href="#" fontSize="xs" color="#0969da">
            Security
          </Link>
          <Link isExternal href="#" fontSize="xs">
            Contact GitHub
          </Link>
        </HStack>
      </Center>
    </Box>
  );
}
