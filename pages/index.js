import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Heading,
  Flex,
  Link,
  Icon,
  Text,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Badge,
  Stack,
  Divider,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  Checkbox,
  VStack,
  HStack,
  Image,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  Search2Icon,
  DragHandleIcon,
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  ArrowDownIcon,
  ChevronRightIcon
} from "@chakra-ui/icons";
import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import {TaskBadge} from "../components/TaskBadge";
import {UserBadge} from "../components/UserBadge";
import { TimeTrackingCollapse } from "@/components/TimeTrackingCollapse";


const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const circular = definePartsStyle({
  control: defineStyle({
    rounded: "full",
  }),
});

export const checkboxTheme = defineMultiStyleConfig({
  variants: { circular },
});

export default function Home() {
  const [collapse, setCollapse] = useState({ index: null, state: false });
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex h="100vh" flexDirection="row" overflow="hidden" maxWidth="2000px">
        <Flex
          as="aside"
          w="full"
          h="full"
          maxW={collapse.state ? 350 : 100}
          bg="white"
          alignItems="start"
          flexDirection="column"
          transition="ease-in-out .2s"
        >
          <Sidebar setCollapse={setCollapse} collapse={collapse} />
        </Flex>
        <Flex as="main" w="full" h="full" bg="white">
          {/* Starts second column */}
          <Flex
            w="75%"
            p="2%"
            flexDirection="column"
            overflow="auto"
            minH="100vh"
            backgroundColor="neutrals.light.100"
            position="relative"
          >
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(8, 1fr)"
              gap={3}
            >
              <GridItem colSpan={4}>
                {" "}
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Search2Icon color="gray.300" />
                  </InputLeftElement>
                  <Input type="search" placeholder="Search oin CRM..." />
                </InputGroup>
              </GridItem>
              <GridItem colStart={7} colEnd={9}>
                <Flex justifyContent="space-evenly">
                  <IconButton
                    aria-label="Search database"
                    bgColor="brand.primary.default"
                    icon={<Search2Icon />}
                    rounded="full"
                    color="neutrals.light.100"
                  />
                  <Badge
                    px="3"
                    py="2"
                    fontSize="1em"
                    bg="neutrals.light.300"
                    fontWeight="regular"
                    borderRadius="md"
                    alignItems="center"
                    textAlign="center"
                  >
                    01:34
                  </Badge>
                </Flex>
              </GridItem>
              <GridItem colSpan={8}>
                <Stack direction="row" spacing={4}>
                  <Button
                    leftIcon={<Search2Icon />}
                    colorScheme="pink"
                    variant="solid"
                  >
                    General
                  </Button>

                  <Button
                    leftIcon={<Search2Icon />}
                    colorScheme="blue"
                    variant="outline"
                  >
                    Tasks
                  </Button>
                  <Button
                    leftIcon={<Search2Icon />}
                    colorScheme="blue"
                    variant="outline"
                  >
                    Invoices & Documents
                  </Button>
                </Stack>
              </GridItem>
            </Grid>
            <Divider mt={5} />
            <Flex justifyContent="space-between">
              <Flex
                flexDir="column"
                bg="neutrals.light.200"
                px={4}
                py={2}
                borderRadius="lg"
                w="30%"
                mt={4}
              >
                <Flex justify="flex-end">
                  <Badge
                    bgColor="brand.secondary.default"
                    w={4}
                    borderRadius="md"
                  >
                    <Text
                      fontSize="0.7rem"
                      color="neutrals.light.100"
                      fontWeight="bold"
                      textTransform="none"
                      textAlign="center"
                    >
                      h
                    </Text>
                  </Badge>
                </Flex>
                <Text
                  color="neutrals.gray.steel"
                  fontWeight="regular"
                  fontSize="0.9rem"
                >
                  Yours & total time
                </Text>
                <Stack direction="row" alignItems="baseline">
                  <Text
                    fontWeight="regular"
                    color="neutrals.gray.steel"
                    fontSize="1.2rem"
                  >
                    03:09
                  </Text>
                  <Text
                    fontWeight="regular"
                    color="neutrals.gray.ash"
                    fontSize="0.7rem"
                  >
                    (05:21)
                  </Text>
                </Stack>
              </Flex>

              <Flex
                flexDir="column"
                bg="neutrals.light.200"
                px={4}
                py={2}
                borderRadius="lg"
                w="30%"
                mt={4}
              >
                <Flex justify="flex-end">
                  <Badge
                    bgColor="semantic.success.green"
                    w={4}
                    borderRadius="md"
                  >
                    <Text
                      fontSize="0.7rem"
                      color="neutrals.light.100"
                      fontWeight="bold"
                      textTransform="none"
                      textAlign="center"
                    >
                      $
                    </Text>
                  </Badge>
                </Flex>
                <Text
                  color="neutrals.gray.steel"
                  fontWeight="regular"
                  fontSize="0.9rem"
                >
                  Yours & total earnings
                </Text>
                <Stack direction="row" alignItems="baseline">
                  <Text
                    fontWeight="regular"
                    color="neutrals.gray.steel"
                    fontSize="1.2rem"
                  >
                    1695.00
                  </Text>
                  <Text
                    fontWeight="regular"
                    color="neutrals.gray.ash"
                    fontSize="0.7rem"
                  >
                    (4,695.00)
                  </Text>
                </Stack>
              </Flex>

              <Flex
                flexDir="column"
                bg="neutrals.light.200"
                px={4}
                py={2}
                borderRadius="lg"
                w="30%"
                mt={4}
              >
                <Flex justify="flex-end">
                  <Badge
                    bgColor="brand.primary.default"
                    w={4}
                    borderRadius="md"
                  >
                    <Text
                      fontSize="0.7rem"
                      color="neutrals.light.100"
                      fontWeight="bold"
                      textTransform="none"
                      textAlign="center"
                    >
                      %
                    </Text>
                  </Badge>
                </Flex>
                <Text
                  color="neutrals.gray.steel"
                  fontWeight="regular"
                  fontSize="0.9rem"
                >
                  Project progress
                </Text>
                <Stack direction="row" alignItems="baseline">
                  <Text
                    fontWeight="regular"
                    color="neutrals.gray.steel"
                    fontSize="1.2rem"
                  >
                    34%
                  </Text>
                  <Text
                    fontWeight="regular"
                    color="neutrals.gray.ash"
                    fontSize="0.7rem"
                  >
                    (34/100)
                  </Text>
                </Stack>
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" mt={12} alignItems="center">
              <Heading as="h3" fontWeight="light">
                Tasks list
              </Heading>
              <IconButton
                aria-label="Search database"
                bgColor="brand.primary.default"
                icon={<Search2Icon />}
                rounded="full"
                color="neutrals.light.100"
              />
              <AvatarGroup size="md" max={2}>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </AvatarGroup>
              <Text
                fontWeight="regular"
                color="neutrals.gray.ash"
                fontSize="0.8rem"
              >
                200 elements
              </Text>
              <Divider orientation="vertical" />
              <IconButton
                bg="transparent"
                color="neutrals.gray.steel"
                aria-label="Search database"
                icon={<DragHandleIcon />}
              />
              <IconButton
                variant="outline"
                color="brand.primary.default"
                aria-label="Search database"
                icon={<HamburgerIcon />}
              />
            </Flex>
            <Flex mt={4} flexDirection="column">
              <Box
                p={3}
                my={2}
                border="0.5px"
                borderColor="neutrals.gray.light"
                borderRadius="lg"
                w="100%"
                display="flex"
                alignItems="center"
                boxShadow={"md"}
              >
                <Checkbox
                  variant="circular"
                  size="sm"
                  color="neutrals.gray.navy"
                  w="60%"
                  colorScheme="green"
                  onChange={() => {
                    toggleTodo(todo);
                  }}
                >
                  Request server username & password
                </Checkbox>
                <Flex w="40%" justifyContent="space-around" alignItems="center">
                  <Flex>
                    <Text fontSize="0.8em"> In progress</Text>
                  </Flex>
                  <Flex>
                    <Text
                      fontWeight="bold"
                      fontSize="0.8em"
                      color="neutrals.gray.navy"
                    >
                      {" "}
                      02:54
                    </Text>
                  </Flex>
                  <Flex>
                    <AvatarGroup size="sm" max={2}>
                      <Avatar
                        name="Ryan Florence"
                        src="https://bit.ly/ryan-florence"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://bit.ly/kent-c-dodds"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                  </Flex>
                  <IconButton
                    variant="outline"
                    color="brand.primary.default"
                    aria-label="Search database"
                    icon={<HamburgerIcon />}
                  />
                </Flex>
              </Box>
              <Box
                p={3}
                my={2}
                border="0.5px"
                borderColor="neutrals.gray.light"
                borderRadius="lg"
                w="100%"
                display="flex"
                alignItems="center"
                boxShadow={"md"}
              >
                <Checkbox
                  variant="circular"
                  size="sm"
                  color="neutrals.gray.navy"
                  w="60%"
                  colorScheme="green"
                  onChange={() => {
                    toggleTodo(todo);
                  }}
                >
                  Request server username & password
                </Checkbox>
                <Flex w="40%" justifyContent="space-around" alignItems="center">
                  <Flex>
                    <Text fontSize="0.8em"> In progress</Text>
                  </Flex>
                  <Flex>
                    <Text
                      fontWeight="bold"
                      fontSize="0.8em"
                      color="neutrals.gray.navy"
                    >
                      {" "}
                      02:54
                    </Text>
                  </Flex>
                  <Flex>
                    <AvatarGroup size="sm" max={2}>
                      <Avatar
                        name="Ryan Florence"
                        src="https://bit.ly/ryan-florence"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://bit.ly/kent-c-dodds"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                  </Flex>
                  <IconButton
                    variant="outline"
                    color="brand.primary.default"
                    aria-label="Search database"
                    icon={<HamburgerIcon />}
                  />
                </Flex>
              </Box>
              <Box
                p={3}
                my={2}
                border="0.5px"
                borderColor="neutrals.gray.light"
                borderRadius="lg"
                w="100%"
                display="flex"
                alignItems="center"
                boxShadow={"md"}
              >
                <Checkbox
                  variant="circular"
                  size="sm"
                  color="neutrals.gray.navy"
                  w="60%"
                  colorScheme="green"
                  onChange={() => {
                    toggleTodo(todo);
                  }}
                >
                  Request server username & password
                </Checkbox>
                <Flex w="40%" justifyContent="space-around" alignItems="center">
                  <Flex>
                    <Text fontSize="0.8em"> In progress</Text>
                  </Flex>
                  <Flex>
                    <Text
                      fontWeight="bold"
                      fontSize="0.8em"
                      color="neutrals.gray.navy"
                    >
                      {" "}
                      02:54
                    </Text>
                  </Flex>
                  <Flex>
                    <AvatarGroup size="sm" max={2}>
                      <Avatar
                        name="Ryan Florence"
                        src="https://bit.ly/ryan-florence"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://bit.ly/kent-c-dodds"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                  </Flex>
                  <IconButton
                    variant="outline"
                    color="brand.primary.default"
                    aria-label="Search database"
                    icon={<HamburgerIcon />}
                  />
                </Flex>
              </Box>
            </Flex>
          </Flex>
          <Flex
            w="25%"
            p="1%"
            flexDirection="column"
            overflow="auto"
            minH="100vh"
            bg="neutrals.light.100"
          >
            <Flex justifyContent="space-between">
              <TaskBadge/>
              <Center>
              <Divider orientation="vertical" height="20px"/>
              </Center>
              <UserBadge/>
            </Flex>

            <HStack mt={6}>
            <TimeTrackingCollapse/>
            </HStack>
            <Box
              bg="neutrals.light.600"
              w="100%"
              px={3}
              py={6}
              display="flex"
              flexDirection="column"
              borderRadius="lg"
              mt={4}
            >
              <Flex justify="flex-start">
                <Badge
                  bgColor="brand.secondary.default"
                  w={24}
                  borderRadius="md"
                  py={2}
                >
                  <Text
                    fontSize="0.7rem"
                    color="neutrals.light.100"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    TIMER IS ON
                  </Text>
                </Badge>
              </Flex>
              <Flex flexDirection="column">
                <Text textAlign="center" color="neutrals.light.gray">
                  Task: #78
                </Text>
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  color="neutrals.gray.navy"
                >
                  Create project page with all tabs
                </Text>
                <Text textAlign="center" fontSize="4xl">
                  01:34
                </Text>
              </Flex>
              <Center>
                <HStack borderRadius="lg" borderColor="neutrals.gray.ash">
                  <HStack>
                    <HStack>
                      <IconButton
                        aria-label="Search database"
                        bgColor="brand.primary.default"
                        icon={<Search2Icon />}
                        rounded="full"
                        color="neutrals.light.100"
                      />
                      <Text fontWeight="bold" color="brand.primary.default">
                        Pause
                      </Text>
                    </HStack>
                  </HStack>
                  <Divider orientation="vertical" />
                  <HStack>
                    <HStack>
                      <Text fontWeight="bold" color="semantic.success.green">
                        Complete
                      </Text>
                      <IconButton
                        aria-label="Search database"
                        bgColor="semantic.success.green"
                        icon={<Search2Icon />}
                        rounded="full"
                        color="neutrals.light.100"
                      />
                    </HStack>
                  </HStack>
                </HStack>
              </Center>
            </Box>
            <HStack mt={8}>
              <Text fontSize="2xl" fontWeight="bold">
                Task Description
              </Text>
              <Spacer />
              <IconButton
                aria-label="Search database"
                bgColor="brand.primary.default"
                icon={<Search2Icon />}
                color="neutrals.light.100"
              />
            </HStack>
            <Divider />
            <Flex flexDirection="row" justifyContent="space-between" mt={2}>
              <Flex alignItems="center">
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <VStack>
                  <Text>Contractor</Text>
                  <Text>Kolin F.</Text>
                </VStack>
              </Flex>
              <Divider orientation="vertical" />
              <Flex alignItems="center">
                <VStack>
                  <Text>Author</Text>
                  <Text>Nikolas P.</Text>
                </VStack>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
              </Flex>
            </Flex>
            <Box
              bg="neutrals.light.600"
              w="100%"
              px={5}
              py={6}
              display="flex"
              flexDirection="column"
              borderRadius="lg"
              mt={4}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Button
                  bg="brand.primary.default"
                  fontWeight="bold"
                  color="neutrals.light.100"
                  rightIcon={<Search2Icon />}
                >
                  In progress
                </Button>
                <Text>Normal Priority</Text>
              </Flex>
              <Text fontSize="md" mt={4}>
                Create project page with bootstrap 12 grid, you can use figma
                our project.
              </Text>
              <Box w="100%">
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  objectFit="cover"
                  borderRadius="xl"
                />
              </Box>
              <Flex mt={4}>
                <Button
                  color="brand.primary.default"
                  leftIcon={<Search2Icon />}
                  size="sm"
                  variant="outline"
                  borderRadius="lg"
                  py={2}
                  borderColor="brand.primary.default"
                >
                  Attach file
                </Button>
                <Spacer />
              </Flex>
            </Box>
            <HStack mt={4}>
              <VStack>
                <Text fontSize="xs"> Created: 23 July 2020 at 8:23 pm</Text>
                <Text fontSize="xs">Updated: 24 July 2020 at 6:12 pm</Text>
              </VStack>
              <Spacer />
              <Button
                color="semantic.error.red"
                variant="outline"
                borderRadius="full"
                borderColor="semantic.error.red"
                px={6}
                py={2}
              >
                Delete Task
              </Button>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
