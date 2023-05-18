import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, AvatarGroup, Box, Checkbox, Flex, IconButton, Text , Heading, Spacer, Divider} from "@chakra-ui/react";
import { AddIcon, DragHandleIcon } from "@chakra-ui/icons";
import {CiGrid31, CiCircleList} from "react-icons/ci";
import { BsPlayFill, BsPauseFill, BsThreeDots } from "react-icons/bs";




const List = [
    {
        title: "Request server username & password",
        status: "In progress",
        time: "02:54",
        responsibles: [{
            name:"Ryan Florence",
        src:"https://bit.ly/ryan-florence"
      },{
        name:"Segun Adebayo",
        src:"https://bit.ly/sage-adebayo"
      },{
        name:"Kent Dodds",
        src:"https://bit.ly/kent-c-dodds"
      },{
        name:"Prosper Otemuyiwa",
        src:"https://bit.ly/prosper-baba"
      },{  name:"Christian Nwamba",
        src:"https://bit.ly/code-beast"}]
    },
    {
        title: "Request server username & password",
        status: "In progress",
        time: "play",
        responsibles: [{
            name:"Ryan Florence",
        src:"https://bit.ly/ryan-florence"
      },{
        name:"Segun Adebayo",
        src:"https://bit.ly/sage-adebayo"
      },{
        name:"Kent Dodds",
        src:"https://bit.ly/kent-c-dodds"
      },{
        name:"Prosper Otemuyiwa",
        src:"https://bit.ly/prosper-baba"
      },{  name:"Christian Nwamba",
        src:"https://bit.ly/code-beast"}]
    },{
        title: "Request server username & password",
        status: "In progress",
        time: "pause",
        responsibles: [{
            name:"Ryan Florence",
        src:"https://bit.ly/ryan-florence"
      },{
        name:"Segun Adebayo",
        src:"https://bit.ly/sage-adebayo"
      },{
        name:"Kent Dodds",
        src:"https://bit.ly/kent-c-dodds"
      },{
        name:"Prosper Otemuyiwa",
        src:"https://bit.ly/prosper-baba"
      },{  name:"Christian Nwamba",
        src:"https://bit.ly/code-beast"}]
    }
]

const AvatarList = (user) => {
    // console.log("user", user)
    return(<Avatar
        name={user.name}
        src={user.src}
      />)
}
const RowList = (Element) =>{
  const renderTime = () => {
    if (Element.time === "pause") {
      return (
        <IconButton
          aria-label="Play"
          bgColor="brand.primary.default"
          size="sm"
          icon={<BsPlayFill fontSize="1.4rem" />}
          rounded="full"
          color="neutrals.light.100" 
        />
      );
    } else if (Element.time === "play") {
      return (
        <IconButton
          aria-label="Pause"
          bgColor="brand.primary.default"
          size="sm"
          icon={<BsPauseFill fontSize="1.4rem" />}
          rounded="full"
          color="neutrals.light.100" 
        />
      );
    } else {
      return (
        <Text fontWeight="bold" fontSize="0.8em" color="neutrals.gray.navy">
          {Element.time}
        </Text>
      );
    }
  };
    return (
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
      {Element.title}
    </Checkbox>
    <Flex w="40%" justifyContent="space-around" alignItems="center">
      <Flex>
        <Text fontSize="0.8em"                 color="neutrals.gray.steel"
>{Element.status}</Text>
      </Flex>
      <Flex>
      <Flex>{renderTime()}</Flex>
      </Flex>
      <Flex align="end">
        <AvatarGroup size="sm" max={2}>
            {Element.responsibles.map(AvatarList)}
        </AvatarGroup>
      </Flex>
      <IconButton
            aria-label="Search database"
            bgColor="blue.100"
            size="sm"
            icon={<BsThreeDots color="brand.primary.hover" fontSize="1.4rem" />}
            color="brand.primary.default"
          />
    </Flex>
      </Box>)
}

export const TaskList = () => {
    return (
    <>
    <Flex mt={12} alignItems="center" justifyContent="space-between">
              <Flex w="60%">
              <Heading as="h3" fontWeight="light">
                Tasks list
              </Heading>
              <IconButton
                aria-label="Search database"
                bgColor="brand.primary.default"
                icon={<AddIcon />}
                rounded="full"
                color="neutrals.light.100"
                ml={6}
              />
              </Flex>
              <Flex w="40%" justifyContent="end" alignItems="center">
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
              <Spacer/>
              <Text
                fontWeight="regular"
                color="neutrals.gray.ash"
                fontSize="0.8rem"
                mr={4}
              >
                200 elements
              </Text>
              <Divider orientation="vertical" height="20px"                 mr={4} />
              <IconButton
                bg="transparent"
                color="neutrals.gray.steel"
                aria-label="Search database"
                icon={<CiGrid31 fontSize="1.5rem"  />}
                mr={4}
              />
              <IconButton
                variant="outline"
                color="brand.primary.default"
                aria-label="Search database"
                icon={<CiCircleList fontSize="1.5rem"  />}
              />
            </Flex>
            </Flex>
    {List.map(RowList)}
    </>
)
}