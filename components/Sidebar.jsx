import { useState } from "react";
import { Box, Flex, IconButton, Stack, Text, HStack } from "@chakra-ui/react";
import {
  FiChevronDown,
  FiChevronUp,
  FiUser,
  FiSettings,
  FiMail,
} from "react-icons/fi";

export const Sidebar = ({ collapse, setCollapse }) => {
  const changeMenu = (index) => {
    if (collapse.index === index)
      return setCollapse({ index, state: !collapse.state });
    setCollapse({ index, state: true });
  };
  const secondListData = [
    {
      icon: <FiUser />,
      items: [
        { label: "Elemento 1-1", value: "valor 1-1" },
        { label: "Elemento 1-2", value: "valor 1-2" },
        { label: "Elemento 1-3", value: "valor 1-3" },
      ],
    },
    {
      icon: <FiSettings />,
      items: [
        { label: "Elemento 2-1", value: "valor 2-1" },
        { label: "Elemento 2-2", value: "valor 2-2" },
      ],
    },
    {
      icon: <FiMail />,
      items: [{ label: "Elemento 3-1", value: "valor 3-1" }],
    },
  ];

  const selectedItems =
    collapse.index !== null ? secondListData[collapse.index].items : [];

  return (
    <Flex height="100vh">
      {/* Primera lista */}
      <Stack spacing={4} bg="gray.200" p={4}>
        {secondListData.map((data, index) => (
          <IconButton
            key={index}
            icon={data.icon}
            onClick={() => {
              changeMenu(index);
            }}
            colorScheme={collapse.index === index ? "blue" : undefined}
            bg={collapse.index === index ? "blue.500" : undefined}
            _hover={{ bg: "blue.400" }}
            _active={{ bg: "blue.600" }}
          />
        ))}
      </Stack>

      {/* Segunda lista */}
      <Box
        flex={1}
        bg="gray.100"
        style={!collapse.state ? { display: "none" } : { display: "flex" }}
      >
        {/*  <Flex align="center" mb={4}>
          <IconButton
            icon={collapsed ? <FiChevronDown /> : <FiChevronUp />}
            onClick={handleCollapseToggle}
          /> 
                    <Text ml={2}>Segunda lista</Text>

        </Flex>*/}
        {collapse.state && (
          <Stack pt={2}>
            <HStack>
              <IconButton
                icon={collapse.state ? <FiChevronDown /> : <FiChevronUp />}
                // onClick={handleCollapseToggle}
              />
              <Text>CRM Project</Text>
            </HStack>
            {selectedItems.map((item, idx) => (
              <Text key={idx} px={4}>
                {item.label} - {item.value}
              </Text>
            ))}
          </Stack>
        )}{" "}
        {<>{/* Empty element */}</>}
      </Box>
    </Flex>
  );
};
