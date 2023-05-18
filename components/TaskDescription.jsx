import React from 'react'
import { IconButton,Divider, Text, Spacer, VStack, HStack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { TaskUsersResume } from "@/components/TaskUsersResume";
import {
    BsThreeDots
  } from "react-icons/bs";

export const TaskDescription = () => {
  return (
    <>
      <VStack mt={8} align="start" w="100%">
        <HStack mb={2} justifyContent="space-between" width="100%">
          <Text fontSize="xl" color="brand.primary.navy" fontWeight="bold">
          Task Description
          </Text>
          <Spacer />
          <IconButton
                aria-label="Search database"
                bgColor="blue.100"
                size="sm"
                icon={<BsThreeDots color="brand.primary.hover" fontSize="1.4rem" />}
                color="brand.primary.default"
              />
            Hide Window
          </HStack>
          <Divider />
          <TaskUsersResume />
        </VStack>
    </>
  )
}
