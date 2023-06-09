import {
  Avatar,
  AvatarGroup,
  Box,
  Checkbox,
  Flex,
  IconButton,
  Text,
  Heading,
  Spacer,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { CiGrid31, CiCircleList } from "react-icons/ci";
import { BsPlayFill, BsPauseFill, BsThreeDots } from "react-icons/bs";
import { useState } from "react";

const List = [
  {
    title: "Request server username & password",
    status: "In progress",
    time: "02:54",
    id_number: "78",
    responsibles: [
      {
        name: "Ryan Florence",
        src: "https://bit.ly/ryan-florence",
      },
      {
        name: "Segun Adebayo",
        src: "https://bit.ly/sage-adebayo",
      },
      {
        name: "Kent Dodds",
        src: "https://bit.ly/kent-c-dodds",
      },
      {
        name: "Prosper Otemuyiwa",
        src: "https://bit.ly/prosper-baba",
      },
      { name: "Christian Nwamba", src: "https://bit.ly/code-beast" },
    ],
  },
  {
    title: "Change color pallete to more bright",
    status: "In progress",
    time: "play",
    id_number: "25",
    responsibles: [
      {
        name: "Ryan Florence",
        src: "https://bit.ly/ryan-florence",
      },
      {
        name: "Segun Adebayo",
        src: "https://bit.ly/sage-adebayo",
      },
      {
        name: "Kent Dodds",
        src: "https://bit.ly/kent-c-dodds",
      },
      {
        name: "Prosper Otemuyiwa",
        src: "https://bit.ly/prosper-baba",
      },
      { name: "Christian Nwamba", src: "https://bit.ly/code-beast" },
    ],
  },
  {
    title: "Create project page with all tabs",
    status: "In progress",
    time: "pause",
    id_number: "33",
    responsibles: [
      {
        name: "Ryan Florence",
        src: "https://bit.ly/ryan-florence",
      },
      {
        name: "Segun Adebayo",
        src: "https://bit.ly/sage-adebayo",
      },
      {
        name: "Kent Dodds",
        src: "https://bit.ly/kent-c-dodds",
      },
      {
        name: "Prosper Otemuyiwa",
        src: "https://bit.ly/prosper-baba",
      },
      { name: "Christian Nwamba", src: "https://bit.ly/code-beast" },
    ],
  },
  {
    title: "Design system",
    status: "In progress",
    time: "play",
    id_number: "03",
    responsibles: [
      {
        name: "Ryan Florence",
        src: "https://bit.ly/ryan-florence",
      },
      {
        name: "Prosper Otemuyiwa",
        src: "https://bit.ly/prosper-baba",
      },
      { name: "Christian Nwamba", src: "https://bit.ly/code-beast" },
    ],
  },
  {
    title: "Make unique page for costumers",
    status: "In Progress",
    time: "pause",
    id_number: "99",
    responsibles: [
      {
        name: "Ryan Florence",
        src: "https://bit.ly/ryan-florence",
      },
      { name: "Christian Nwamba", src: "https://bit.ly/code-beast" },
      {
        name: "Kent Dodds",
        src: "https://bit.ly/kent-c-dodds",
      },
      {
        name: "Prosper Otemuyiwa",
        src: "https://bit.ly/prosper-baba",
      },
    ],
  },
  {
    title: "Make fixes on homepage",
    status: "In progress",
    time: "pause",
    id_number: "27",
    responsibles: [
      { name: "Christian Nwamba", src: "https://bit.ly/code-beast" },
      {
        name: "Kent Dodds",
        src: "https://bit.ly/kent-c-dodds",
      },
      {
        name: "Prosper Otemuyiwa",
        src: "https://bit.ly/prosper-baba",
      },
    ],
  },
];

const AvatarList = (user) => {
  return <Avatar name={user.name} src={user.src} />;
};
const RowList = ({
  Element,
  setTaskSelect,
  idx,
  setIdxSelect,
  selected,
  idxSelect,
}) => {
  const toggleTodo = (todo) => {
    setTaskSelect(todo);
    if (idxSelect === idx) return setIdxSelect(null);
    setIdxSelect(idx);
  };
  const renderTime = () => {
    if (Element.time === "pause") {
      return (
        <IconButton
          aria-label="Play"
          variant="primary"
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
          variant="primary"
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
      my={3}
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
          toggleTodo(Element);
        }}
        isChecked={selected}
      >
        {Element.title}
      </Checkbox>
      <Flex w="40%" justifyContent="space-around" alignItems="center">
        <Flex>
          <Text fontSize="0.8em" color="neutrals.gray.steel">
            {Element.status}
          </Text>
        </Flex>
        <Flex>
          <Flex>{renderTime()}</Flex>
        </Flex>
        <Flex align="end">
          <AvatarGroup size="sm" max={2}>
            {Element.responsibles.map(AvatarList)}
          </AvatarGroup>
        </Flex>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            bgColor="brand.primary.200"
            size="sm"
            icon={<BsThreeDots color="brand.primary.hover" fontSize="1.4rem" />}
            color="brand.primary.default"
          />
          <MenuList bg="neutrals.gray.navy" color="neutrals.light.100">
            <MenuItem bg="neutrals.gray.navy">Open</MenuItem>
            <MenuItem bg="neutrals.gray.navy">Get link</MenuItem>
            <MenuItem bg="neutrals.gray.navy">Clone</MenuItem>
            <MenuItem bg="neutrals.gray.navy" color="semantic.error.reds">
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export const TaskList = ({ setTaskSelect }) => {
  const [idxSelect, setIdxSelect] = useState(null);
  return (
    <>
      <Flex mt={12} alignItems="center" justifyContent="space-between">
        <Flex w="60%">
          <Heading as="h3" fontWeight="light">
            Tasks list
          </Heading>
          <IconButton
            aria-label="Search database"
            variant="primary"
            icon={<AddIcon />}
            rounded="full"
            ml={4}
            mr={6}
          />
          <AvatarGroup size="md" max={4}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
        </Flex>
        <Flex w="40%" justifyContent="end" alignItems="center">
          <Spacer />
          <Text
            fontWeight="regular"
            color="neutrals.gray.ash"
            fontSize="0.8rem"
            mr={4}
          >
            200 elements
          </Text>
          <Divider orientation="vertical" height="20px" mr={4} />
          <IconButton
            bg="transparent"
            color="neutrals.gray.steel"
            aria-label="Search database"
            icon={<CiGrid31 fontSize="1.5rem" />}
            mr={4}
          />
          <IconButton
            variant="outline"
            color="brand.primary.default"
            aria-label="Search database"
            icon={<CiCircleList fontSize="1.5rem" />}
          />
        </Flex>
      </Flex>
      {List.map((element, idx) => (
        <>
          <RowList
            Element={element}
            setTaskSelect={setTaskSelect}
            key={idx}
            idx={idx}
            selected={idxSelect === idx}
            setIdxSelect={setIdxSelect}
            idxSelect={idxSelect}
          />
        </>
      ))}
    </>
  );
};
