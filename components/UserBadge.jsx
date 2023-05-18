import React from "react";
import { Flex, Text, Avatar, VStack, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const UserBadge = ({
  username,
  role,
  showDropdown,
  avatarPosition,
  avatarSize,
  roleFontWeight,
}) => {
  const flexDirection = avatarPosition === "right" ? "row-reverse" : "row";
  const align = avatarPosition === "right" ? "start" : "end";

  return (
    <Flex alignItems="center" flexDirection={flexDirection}>
      {showDropdown && (
        <IconButton
          icon={<ChevronDownIcon />}
          isRound
          size="xs"
          variant="ghost"
          ml={1}
        />
      )}
      <VStack mr={2} spacing={0} align={align} mx={2}>
        <Text
          fontSize="xs"
          fontWeight={roleFontWeight}
          color="neutrals.gray.steel"
        >
          {role}
        </Text>
        <Text fontSize="md" fontWeight="bold" color="neutrals.gray.navy" mt={1}>
          {username}
        </Text>
      </VStack>
      <Avatar
        aria-label="User avatar"
        name={username}
        src="https://bit.ly/ryan-florence"
        rounded="full"
        size={avatarSize}
      />
    </Flex>
  );
};
