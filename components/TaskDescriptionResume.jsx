import React from 'react'
import {
    Flex,
    Text,
    IconButton,
    Badge,
    Divider,
    Box,
    HStack,
    Button,
    Center,
    Image,
    Spacer
  } from "@chakra-ui/react";
  import {
    MdPause
  } from "react-icons/md";
  import {
    FiChevronDown,
  } from "react-icons/fi";
  import { AttachmentIcon } from '@chakra-ui/icons';


export const TaskDescriptionResume = () => {
  return (
    <>
     <Box
              bg="neutrals.light.600"
              w="100%"
              px={4}
              py={5}
              display="flex"
              flexDirection="column"
              borderRadius="lg"
              mt={4}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Button
                size="sm"
                  bg="brand.primary.default"
                  fontWeight="bold"
                  color="neutrals.light.100"
                  rightIcon={<FiChevronDown/>}
                >
                  In progress
                </Button>
                <Text fontSize="sm" fontWeight="bold" color="neutrals.gray.navy" mt={1}>●  Normal Priority</Text>
              </Flex>
              <Text fontSize="sm" fontWeight="medium" mt={4} color="neutrals.gray.navy" mb={4}>
                Create project page with bootstrap 12 grid, you can use figma
                our project.
              </Text>
              <Box w="100%">
                <Image
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  objectFit="cover"
                  borderRadius="xl"
                  height="140px"
                  w="100%"
                />
              </Box>
              <Flex mt={4}>
                <Button
                  color="brand.primary.default"
                  leftIcon={<AttachmentIcon fontSize="md" />}
                  size="sm"
                  bgColor="blue.100"
                  borderRadius="lg"
                  fontWeight="bold"
                >
                  Attach file
                </Button>
                <Spacer />
              </Flex>
            </Box>
    </>
  )
}
