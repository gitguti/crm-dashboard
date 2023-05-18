import React from "react";
import { Button, Text, Spacer, VStack, HStack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { TimeTrackingResume } from "@/components/TimeTrackingResume";

export const TimeTrackingCollapse = ({ taskSelect }) => {
  return (
    <>
      <VStack mt={6} align="start">
        <HStack mb={4} width="100%">
          <Text fontSize="xl" color="brand.primary.navy" fontWeight="bold">
            Time Tracking
          </Text>
          <Spacer />
          <Button
            variant="outline"
            color="brand.primary.default"
            fontSize="sm"
            rounded="full"
            size="sm"
            rightIcon={<ChevronRightIcon color="neutrals.gray.navy" />}
          >
            Hide Window
          </Button>
        </HStack>
        <TimeTrackingResume taskSelect={taskSelect} />
      </VStack>
    </>
  );
};
