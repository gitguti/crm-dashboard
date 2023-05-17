import React from 'react'
import {
    Flex,
    Text,
    Avatar,
    VStack,
    Spacer,
    IconButton
  } from "@chakra-ui/react";
  import {
    MdCheck
  } from "react-icons/md";
  import {
    ChevronDownIcon
  } from '@chakra-ui/icons'

export const TaskBadge = () => {
  return (
    <>
     <Flex alignItems="center">
                <Avatar
                  aria-label="Search database"
                  bgColor="semantic.success.green"
                  icon={<MdCheck fontSize='1.25rem' />}
                  rounded="full"
                  color="neutrals.light.100"
                  size="sm"
                />
                <Spacer />
                <VStack ml={2} spacing={0}>
                  <Text fontSize="xs" fontWeight="bold" color="neutrals.gray.ash">Project CRM</Text>
                  <Text fontSize="md" fontWeight="bold" color="brand.primary.default" mt={1}>Task: #78</Text>
                </VStack>
                <IconButton
                icon={<ChevronDownIcon />}
                isRound
                size="xs"
                variant="ghost"
                />
              </Flex>
    </>
  )
}
