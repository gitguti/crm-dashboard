import React from "react";
import { Flex, Divider, Spacer } from "@chakra-ui/react";

import { UserBadge } from "./UserBadge";

export const TaskUsersResume = () => {
  return (
    <Flex justifyContent="space-between" mt={2} w="100%">
      <UserBadge
        username="Kolin F."
        role="Contractor"
        showDropdown={false}
        avatarPosition="right"
      />
      <Spacer />
      <Divider orientation="vertical" height="20px" />
      <Spacer />
      <UserBadge
        username="Nicolas P."
        role="Author"
        showDropdown={false}
        avatarPosition="left"
      />
    </Flex>
  );
};
