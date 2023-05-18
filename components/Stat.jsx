import React from "react";
import { Flex, Text, Badge, Stack } from "@chakra-ui/react";

export const Stat = ({ symbol, concept, number, detail, badgeColor }) => {
  return (
    <>
      <Flex
        flexDir="column"
        bg="neutrals.light.200"
        px={4}
        py={4}
        borderRadius="lg"
        w="30%"
        mt={4}
        maxW="220px"
      >
        <Flex justify="flex-end">
          <Badge bgColor={badgeColor} w={5} borderRadius="md">
            <Text
              fontSize="0.7rem"
              color="neutrals.light.100"
              fontWeight="bold"
              textTransform="none"
              textAlign="center"
            >
              {symbol}
            </Text>
          </Badge>
        </Flex>
        <Text
          color="neutrals.gray.steel"
          fontWeight="regular"
          fontSize="0.9rem"
        >
          {concept}
        </Text>
        <Stack direction="row" alignItems="baseline">
          <Text
            fontWeight="regular"
            color="neutrals.gray.steel"
            fontSize="1.2rem"
          >
            {number}
          </Text>
          <Text
            fontWeight="regular"
            color="neutrals.gray.ash"
            fontSize="0.7rem"
          >
            {detail}
          </Text>
        </Stack>
      </Flex>
    </>
  );
};
