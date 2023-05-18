import React from 'react'
import {
    Flex,
    Text,
    Divider,
    Avatar,
    VStack,
    Spacer
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
  import {
    MdPause, MdCheck
  } from "react-icons/md";
  import { UserBadge } from './UserBadge';

export const TaskUsersResume = () => {
  return (
    <Flex justifyContent="space-between" mt={2}>
    <UserBadge/>
    <Spacer/>
    <Divider orientation="vertical" height="20px"/>
    <Spacer/>
    <UserBadge/>
  </Flex>
  )
}
