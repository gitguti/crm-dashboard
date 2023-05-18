import React from "react";
import {
  IconButton,
  Divider,
  Text,
  Spacer,
  VStack,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { TaskUsersResume } from "@/components/TaskUsersResume";
import { BsThreeDots } from "react-icons/bs";


export const TaskDescription = () => {
  return (
    <>
      <VStack mt={8} align="start" w="100%">
        <HStack mb={2} justifyContent="space-between" width="100%">
          <Text fontSize="xl" color="brand.primary.navy" fontWeight="bold">
            Task Description
          </Text>
          <Spacer />
          <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    bgColor="brand.primary.200"
    size="sm"
    icon={<BsThreeDots color="brand.primary.hover" fontSize="1.4rem" />}
    color="brand.primary.default"
  />
  <MenuList bg="neutrals.gray.navy" color="neutrals.light.100">
  <MenuItem bg="neutrals.gray.navy"  >
      Open
    </MenuItem>
    <MenuItem bg="neutrals.gray.navy">
     Get link
    </MenuItem>
    <MenuItem bg="neutrals.gray.navy" >
      Clone
    </MenuItem>
    <MenuItem bg="neutrals.gray.navy" color="semantic.error.reds">
      Delete
    </MenuItem>
  </MenuList>
</Menu>
        </HStack>
        <Divider />
        <TaskUsersResume />
      </VStack>
    </>
  );
};
