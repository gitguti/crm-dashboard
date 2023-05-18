import { useState } from "react";
import {
  HStack,
  IconButton,
  Divider,
  Flex,
  Stack,
  Text,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const Submenu = ({ item, idx }) => {
  const [collapseToggle, setCollapseToggle] = useState(false);

  if (!("items" in item)) {
    return (
      <HStack my={2}>
        <Text key={idx} px={4} fontSize="sm" color="neutrals.gray.navy">
          {item.label}
        </Text>
      </HStack>
    );
  }

  return (
    <Stack pt={2} w={250}>
      <VStack align="start">
        <HStack px={2} justifyContent="space-between" w="100%">
          <Flex color="neutrals.gray.ash" align="center">
            {typeof item.icon === "string" ? (
              <Icon name={item.icon} />
            ) : (
              item.icon
            )}
            <Text ml={6} color="neutrals.gray.navy">
              {item.label}
            </Text>
          </Flex>
          <IconButton
            color="brand.primary.default"
            bg="brand.primary.disable"
            icon={collapseToggle ? <FiChevronUp /> : <FiChevronDown />}
            onClick={() => setCollapseToggle(!collapseToggle)}
            isRound
            size="sm"
          />
        </HStack>
        <Divider />
      </VStack>
      <div style={{ marginLeft: "40px" }}>
        {collapseToggle &&
          item.items.map((subItem, subIdx) => (
            <Submenu item={subItem} key={subIdx} idx={subIdx} />
          ))}
      </div>
    </Stack>
  );
};
