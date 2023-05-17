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

export const UserBadge = () => {
  return (
    <>
    <Flex alignItems="center" >
               <Avatar
                 aria-label="User avatar"
                 name="Kolin F."
                 src="https://bit.ly/ryan-florence"
                 rounded="full"
                 size="sm"
               />
               <Spacer />
               <VStack ml={2} spacing={0} align="start">
                 <Text fontSize="xs" fontWeight="bold" color="neutrals.gray.navy" >User</Text>
                 <Text fontSize="md" fontWeight="bold" color="brand.primary.default" mt={1} >Kolin F.</Text>
               </VStack>
               <IconButton
               icon={<ChevronDownIcon />}
               isRound
               size="xs"
               variant="ghost"
               ml={1}
               />
             </Flex>
   </>
  )
}
