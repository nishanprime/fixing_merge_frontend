import { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  Center,
  IconButton,
  Icon,
  InputGroup,
  InputRightElement,
  HStack,
} from '@chakra-ui/react';
import GoogleLogo from '@components/GoogleLogo';
import { BsApple, BsFacebook } from 'react-icons/bs';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { IRestaurantOwner } from 'Interfaces';
import { useRouter } from 'next/router';
import { AuthService } from '@services/index';
import { ToastContainer } from 'react-toastify';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const onFinishRegister = async (values: Partial<IRestaurantOwner>) => {
    setLoading(true);
    const response = await AuthService.register({
      ...values,
    });
    setLoading(false);
    if (response) {
      router.push('/auth/login');
    }
  };
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <ToastContainer />
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          minW="424px"
          p={8}
        >
          <Stack align={'center'} mb="6">
            <Text>LOGO</Text>
            <Heading fontSize={'2xl'} fontWeight="700">
              Welcome back
            </Heading>
            <Text fontSize={'md'} fontWeight="400" color="#A0AEC0">
              Please enter your details
            </Text>
          </Stack>
          <Stack>
            <Text fontSize={'sm'} fontWeight={'600'}>
              Continue with
            </Text>
            <Flex gap={'10'} justifyContent={'space-between'}>
              <IconButton
                icon={<Icon as={BsFacebook} color={'blue'} />}
                variant="ghost"
                aria-label="Facebook"
                px="12"
                py="6"
                border={'1px solid'}
                borderColor={'gray.200'}
                boxShadow={'md'}
              />
              <IconButton
                icon={<GoogleLogo />}
                variant="ghost"
                aria-label="Google"
                px="12"
                py="6"
                border={'1px solid'}
                borderColor={'gray.200'}
                boxShadow={'md'}
              />
              <IconButton
                icon={<Icon as={BsApple} />}
                variant="ghost"
                aria-label="Apple"
                px="12"
                py="6"
                border={'1px solid'}
                borderColor={'gray.200'}
                boxShadow={'md'}
              />
            </Flex>
          </Stack>

          <Stack>
            <Center>
              <Divider />
              <Text fontSize={'md'} fontFamily={'400'} color={'gray.500'} m="4">
                Or
              </Text>
              <Divider />
            </Center>
          </Stack>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement>
                  <IconButton
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    icon={showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    onClick={handleTogglePassword}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} mb={'4'}>
              <Button
                onClick={(e) => {
                  onFinishRegister({
                    first_name: firstName,
                    last_name: lastName,
                    email,
                    password,
                  });
                }}
                bg="secondary"
                color={'black'}
                _hover={{
                  bg: 'secondary',
                }}
              >
                Create Account
              </Button>
            </Stack>

            <Stack textAlign={'center'} py={2}>
              <Text color={'gray.500'} fontWeight={'500'}>
                Already have an account?{' '}
                <Link color={'secondary'} href="/auth/login">
                  <u>Login</u>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
