import React from "react";
import {
  Flex,
  Text,
  IconButton,
  Badge,
  Divider,
  Box,
  HStack,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { MdPause, MdCheck } from "react-icons/md";

export const TimeTrackingResume = ({  taskSelect = {} }) => {
  const { status = "pause", id_number = "41", title = "Docker install", time = "4:23" } = taskSelect;
  return (
    <>
      <Box
        bg="neutrals.light.600"
        w="100%"
        p={3}
        display="flex"
        flexDirection="column"
        borderRadius="lg"
        mt={6}
      >
        <Flex justify="flex-start">
          <Badge
            bgColor="brand.secondary.default"
            w={24}
            borderRadius="md"
            py={1}
            px={1}
          >
            <Text
              fontSize="xs"
              color="neutrals.light.100"
              fontWeight="bold"
              textAlign="center"
              textTransform="uppercase"
            >
              {status}
            </Text>
          </Badge>
        </Flex>
        <Flex flexDirection="column">
          <Text
            fontSize="sm"
            textAlign="center"
            fontWeight="medium"
            color="neutrals.gray.ash"
            mt={1}
          >
            Task: # {id_number}
          </Text>
          <Text
            textAlign="center"
            fontWeight="bold"
            color="neutrals.gray.navy"
            fontSize="lg"
            mt={2}
          >
            {title}
          </Text>
          <Text fontWeight="light" textAlign="center" fontSize="4xl" my={4}>
            {time}
          </Text>
        </Flex>
        <Center>
          <HStack
            borderRadius="full"
            borderColor="neutrals.gray.light"
            borderWidth={1}
            p={4}
          >
            <HStack>
              <HStack>
                <IconButton
                  aria-label="Pause task"
                  bgColor="brand.primary.default"
                  icon={<MdPause />}
                  rounded="full"
                  color="neutrals.light.100"
                  boxShadow="xl"
                />
                <Spacer />
                <Text
                  fontWeight="medium"
                  color="brand.primary.default"
                  fontSize="sm"
                >
                  Pause
                </Text>
              </HStack>
            </HStack>
            <Spacer />
            <Divider orientation="vertical" height="40px" />
            <Spacer />
            <HStack>
              <HStack>
                <Text
                  fontWeight="medium"
                  color="semantic.success.green"
                  fontSize="sm"
                >
                  Complete
                </Text>
                <Spacer />
                <IconButton
                  aria-label="Complete task"
                  variant="secondary"
                  icon={<MdCheck />}
                  rounded="full"
                  color="neutrals.light.100"
                  boxShadow="xl"
                />
              </HStack>
            </HStack>
          </HStack>
        </Center>
      </Box>
    </>
  );
};
