import {
  Flex,
  IconButton,
  Stack,
  Text,
  HStack,
  Button,
  Spacer,
  Icon,
  Divider,
} from "@chakra-ui/react";
import {
  FiChevronLeft,
  FiChevronUp,
  FiUser,
  FiSettings,
  FiHome,
  FiDisc,
  FiHelpCircle,
} from "react-icons/fi";
import {
  BsBattery,
  BsBatteryHalf,
  BsBatteryFull,
  BsCheck2Circle,
} from "react-icons/bs";
import { VscBlank } from "react-icons/vsc";
import { MdOutlineContentCopy } from "react-icons/md";
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
          label: "All projects 2",
          icon: <VscBlank />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        {
          label: "Not Started 2",
          icon: <BsBattery />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        {
          label: "In progress 2",
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
        {
          label: "Nearing deadline 2",
          icon: <BsBatteryFull />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        {
          label: "Done 2",
          icon: <BsCheck2Circle />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
      ],
    },
    {
      icon: <MdOutlineContentCopy />,
      items: [
        {
          label: "All projects 3",
          icon: <VscBlank />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        {
          label: "Not Started 3",
          icon: <BsBattery />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        {
          label: "In progress 3",
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
        {
          label: "Nearing deadline 3",
          icon: <BsBatteryFull />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        {
          label: "Done 3",
          icon: <BsCheck2Circle />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
      ],
    },
    {
      icon: <FiUser />,
      items: [
        {
          label: "All projects 4",
          icon: <VscBlank />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        {
          label: "Not Started 4",
          icon: <BsBattery />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        {
          label: "In progress 4",
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
        {
          label: "Nearing deadline 4",
          icon: <BsBatteryFull />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        {
          label: "Done 4",
          icon: <BsCheck2Circle />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
      ],
    },
    {
      icon: <FiSettings />,
      items: [
        {
          label: "All projects 5",
          icon: <VscBlank />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        {
          label: "Not Started 5",
          icon: <BsBattery />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        {
          label: "In progress 5",
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
        {
          label: "Nearing deadline 5",
          icon: <BsBatteryFull />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        {
          label: "Done 5",
          icon: <BsCheck2Circle />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
      ],
    },
    {
      icon: <FiHelpCircle />,
      items: [
        {
          label: "All projects 6",
          icon: <VscBlank />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        {
          label: "Not Started 6",
          icon: <BsBattery />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        {
          label: "In progress 6",
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
        {
          label: "Nearing deadline 7",
          icon: <BsBatteryFull />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
        {
          label: "Done 8",
          icon: <BsCheck2Circle />,
          items: [
            {
              label: "Element",
            },
            {
              label: "Element",
            },
          ],
        },
      ],
    },
  ];

  const selectedItems =
    collapse.index !== null ? secondListData[collapse.index] : {};

  return (
    <Flex height="100vh">
      {/* Principal menu */}
      <Stack
        bg="neutrals.light.100"
        my={0}
        justifyContent="space-between"
        h="100%"
      >
        <Flex>
          <IconButton
            bg="transparent"
            size="lg"
            icon={<FiDisc fontSize="1.8rem" />}
            color="brand.primary.default"
          />
        </Flex>
        <Flex flexDirection="column">
          {secondListData.map((data, index) => (
            <IconButton
              key={index}
              size="lg"
              my={0}
              fontSize="2xl"
              icon={data.icon}
              onClick={() => {
                changeMenu(index);
              }}
              color={
                collapse.index === index
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
        </Flex>
        <Flex>
          <Spacer />
        </Flex>
      </Stack>

      {/* Secondar menu */}
      <Stack
        flex={1}
        bg="neutrals.light.700"
        px={4}
        py={4}
        style={!collapse.state ? { display: "none" } : { display: "flex" }}
        justifyContent="space-between"
        borderColorRight="neutrals.light.800"
        borderWidth={1}
      >
        {collapse.state && (
          <Stack pt={2} w="100%">
            <HStack>
              <IconButton
                isRound
                size="sm"
                color="brand.primary.default"
                bg="brand.primary.disable"
                icon={collapse.state ? <FiChevronLeft /> : <FiChevronUp />}
                onClick={() => changeMenu(collapse.index)}
              />
              <Text fontSize="2xl" fontWeight="bold" color="neutrals.gray.navy">
                Project CRM
              </Text>
              <Spacer />
              <IconButton
                isRound
                variant="primary"
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
        <Button
          aria-label="Pause task"
          w="100%"
          variant="primary"
          leftIcon={<AddIcon color="neutrals.light.100" fontSize="0.8rem" />}
          rightIcon={
            <MdOutlineContentCopy
              color="neutrals.light.300"
              fontSize="1.2rem"
            />
          }
          color="neutrals.light.100"
          fontSize="sm"
        >
          Create New Project
        </Button>
      </Stack>
    </Flex>
  );
};
