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
} from '@chakra-ui/react';
import GoogleLogo from '@components/GoogleLogo';
import { BsApple, BsFacebook } from 'react-icons/bs';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { AuthService } from '@services/index';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import Loader from '@components/Loader';
export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  //   set state for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  //   login handler
  const handleLogin = async (formData: { email: string; password: string }) => {
    setLoading(true);
    const response = await AuthService.login(formData);
    setLoading(false);
    if (response) {
      if (router.query.redirect) {
        const redirectUrl = router.query.redirect as string;
        router.push(redirectUrl);
        return;
      }
      router.push('/');
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <ToastContainer />
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
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
                      icon={
                        showPassword ? <AiFillEye /> : <AiFillEyeInvisible />
                      }
                      onClick={handleTogglePassword}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'end'}
                  justify={'flex-end'}
                >
                  <Link color={'gray.500'} href="/auth/forgot-password">
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  bg="secondary"
                  color={'black'}
                  _hover={{
                    bg: 'secondary',
                  }}
                  onClick={() => handleLogin({ email, password })}
                >
                  Login
                </Button>
              </Stack>
              <Stack>
                <Center>
                  <Divider />
                  <Text
                    fontSize={'md'}
                    fontFamily={'400'}
                    color={'gray.500'}
                    m="4"
                  >
                    Or
                  </Text>
                  <Divider />
                </Center>
              </Stack>
              <Stack>
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
              <Stack textAlign={'center'} py={2}>
                <Text color={'gray.500'} fontWeight={'500'}>
                  Don't have an account?{' '}
                  <Link color={'secondary'} href="/auth/register">
                    <u>Sign Up</u>
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      )}
    </Flex>
  );
}
