import React from "react";
import {
  Button,
  Spacer,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Badge,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { Search2Icon, LockIcon } from "@chakra-ui/icons";
import { FaDotCircle } from "react-icons/fa";

export const SearchFilter = () => {
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(8, 1fr)"
      gap={3}
    >
      <GridItem colSpan={4}>
        {" "}
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input type="search" border="none" placeholder="Search in CRM..." />
        </InputGroup>
      </GridItem>
      <GridItem colStart={8} colEnd={9} justifySelf="end">
        <HStack>
          <IconButton
            aria-label="Search database"
            bgColor="brand.primary.default"
            icon={<Search2Icon />}
            rounded="full"
            color="neutrals.light.100"
          />
          <Spacer />
          <Badge
            px="3"
            py="2"
            fontSize="1em"
            bg="neutrals.light.300"
            fontWeight="regular"
            borderRadius="md"
            alignItems="center"
            textAlign="center"
          >
            01:34
          </Badge>
        </HStack>
      </GridItem>
      <GridItem colSpan={8}>
        <Stack direction="row" spacing={4}>
          <Button
            leftIcon={<LockIcon color="brand.primary.default" />}
            variant="outline"
            fontWeight="regular"
            boxShadow="md"
            color="neutrals.gray.navy"
          >
            General
          </Button>

          <Button
            leftIcon={<FaDotCircle />}
            color="neutrals.gray.navy"
            fontWeight="regular"
          >
            Tasks
          </Button>
          <Button
            leftIcon={<LockIcon color="brand.primary.default" />}
            variant="outline"
            fontWeight="regular"
            boxShadow="md"
            color="neutrals.gray.navy"
          >
            Invoices & Documents
          </Button>
        </Stack>
      </GridItem>
    </Grid>
  );
};
