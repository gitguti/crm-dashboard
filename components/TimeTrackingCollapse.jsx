import React from 'react'
import {
    Button,
    Text,
    Spacer,
  } from "@chakra-ui/react";
  import {
    ChevronRightIcon
  } from '@chakra-ui/icons'

export const TimeTrackingCollapse = () => {
  return (
   <>
     <Text fontSize="xl" color="brand.primary.navy" fontWeight="bold">
                Time Tracking
              </Text>
              <Spacer />
              <Button variant="outline"color="brand.primary.default" fontSize="sm" rounded="full" rightIcon={<ChevronRightIcon color="neutrals.gray.navy"/>}>
                Hide Window
              </Button>
   </>
  )
}
