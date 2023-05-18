import {
  Box,
  Flex,
  IconButton,
  Stack,
  Text,
  HStack,
  Button,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import {
  FiChevronLeft,
  FiChevronUp,
  FiUser,
  FiSettings,
  FiHome,
  FiHelpCircle,
} from "react-icons/fi";
import { BsBattery, BsBatteryHalf, BsBatteryFull, BsCheck2Circle } from "react-icons/bs";
import {VscBlank} from "react-icons/vsc"
import { Submenu } from "./Submenu";
import { AddIcon } from "@chakra-ui/icons";

export const Sidebar = ({ collapse, setCollapse }) => {
  const changeMenu = (index) => {
    if (collapse.index === index)
      return setCollapse({ index, state: !collapse.state });
    setCollapse({ index, state: true });
  };
  const secondListData = [
    {
      icon: <FiHome />,
      items: [
        {
          label: "All projects",
          icon: <VscBlank/>,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        { label: "Not Started", icon: <BsBattery />, items: [
          {
            label: "Element",
          },
          {
            label: "Element",
          },
        ], },
        {
          label: "In progress",
          icon: <BsBatteryHalf />,
          items: [
            {
              label: "World News",
            },
            {
              label: "Project CRM",
            },
            ,
            {
              label: "Trading Company",
            },
            ,
            {
              label: "GMB Vault",
            },
          ],
        },
        { label: "Nearing deadline", icon: <BsBatteryFull />,items: [
          {
            label: "Element",
          },
          {
            label: "Element",
          },
        ], },
        { label: "Done", icon: <BsCheck2Circle/>,items: [
          {
            label: "Element",
          },
          {
            label: "Element",
          },
        ], },
      ],
    },
    // {
    //   icon: <FiUser />,
    //   items: [
    //     {
    //       label: "In process",
    //       icon: "valor",
    //       items: [
    //         {
    //           label: "World News",
    //         },
    //         {
    //           label: "Project CRM",
    //         },
    //         {
    //           label: "Trading Company",
    //         },
    //         {
    //           label: "GMB Vault",
    //         },
    //       ],
    //     },
    //     { label: "Element",  },
    //     { label: "Element 1-2",  },
    //     { label: "Element 1-3", },
    //   ],
    // },
    // {
    //   icon: <FiSettings />,
    //   items: [
    //     {
    //       label: "Element",
    //       icon: "valor",
    //       items: [
    //         {
    //           label: "Element",
    //           icon: "valor",
    //         },
    //         {
    //           label: "Element",
    //           icon: "valor",
    //         },
    //       ],
    //     },
    //     { label: "Element", icon: "valor" },
    //     { label: "Element 1-2", icon: "valor 1-2" },
    //     { label: "Element 1-3", icon: "valor 1-3" },
    //   ],
    // },
    // {
    //   icon: <FiHelpCircle />,
    //   items: [
    //     {
    //       label: "Element 1-1",
    //       icon: "valor 1-1",
    //       items: [
    //         {
    //           label: "Element 1-1",
    //           icon: "valor 1-1",
    //         },
    //       ],
    //     },
    //     { label: "Element 1-1", icon: "valor 1-1" },
    //     { label: "Element 1-2", icon: "valor 1-2" },
    //     { label: "Element 1-3", icon: "valor 1-3" },
    //   ],
    // },
  ];

  const selectedItems =
    collapse.index !== null ? secondListData[collapse.index] : {};
  console.log(collapse.index);

  return (
    <Flex height="100vh">
      {/* Primera lista */}
      <Stack spacing={4} bg="neutrals.light.100" py={4} justifyContent="center" >
        {secondListData.map((data, index) => (
          <IconButton
            key={index}
            size="lg"
            my={0}
            icon={data.icon}
            onClick={() => {
              changeMenu(index);
            }}
            color={
              collapse.index == index
                ? "brand.primary.default"
                : "neutrals.gray.navy"
            }
            colorScheme={collapse.index === index ? "" : undefined}
            borderRadius={collapse.index === index ? "none" : "lg"}
            bg={collapse.index === index ? "gray.100" : "neutrals.light.100"}
            _hover={{ bg: "gray.100" }}
            _active={{ bg: "gray.100" }}
          />
        ))}
      </Stack>

      {/* Segunda lista */}
      <Stack
        flex={1}
        bg="gray.100"
        px={4}
        py={4} 
        style={!collapse.state ? { display: "none" } : { display: "flex" }}
        justifyContent="space-between"
      >
        {collapse.state && (
          <Stack pt={2} w="70%">
            <HStack>
              <IconButton
                isRound
                size="sm"
                color="brand.primary.default"
                bg="brand.primary.disable"
                icon={collapse.state ? <FiChevronLeft /> : <FiChevronUp />}
                // onClick={handleCollapseToggle}
                // onClick={()=>setSubmenuState(!subMenuState)}
                onClick={() => changeMenu(collapse.index)}
              />
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="neutrals.gray.navy"
              >
                Project CRM
              </Text>
              <Spacer/>
              <IconButton
                isRound
                color="neutrals.light.100"
                bg="brand.primary.default"
                icon={<AddIcon />}
                size="sm"
              />
            </HStack>
            <Divider />

            {selectedItems?.items?.map((item, idx) => (
              <Submenu item={item} idx={idx} key={idx} />
            ))}
          </Stack>
        )}
        {<>{/* Empty element */}</>}
        <Button aria-label="Pause task"
          w="70%"
                  bgColor="brand.primary.default"
                  leftIcon={<AddIcon color="neutrals.light.100" fontSize="0.8rem"/>}
                  color="neutrals.light.100">Create New Project</Button>
      </Stack>
    </Flex>
  );
};
