import { useState } from 'react';
import { Box, Flex, IconButton, Stack, Text } from '@chakra-ui/react';
import { FiChevronDown, FiChevronUp, FiUser, FiSettings, FiMail } from 'react-icons/fi';

export const Test = ({onCollapseChange}) => {
  const [collapse, setCollapse] = useState(true);
  const [selectedIconIndex, setSelectedIconIndex] = useState(null);

  const handleCollapseToggle = () => {
    const newCollapse = !collapse;
    onCollapseChange(newCollapse);
  };
  

  const handleIconSelect = (index) => {
    setSelectedIconIndex(index);
    setCollapse(!collapse);

  };

  // Arreglo asociado a cada icono de la primera lista con objetos
  const secondListData = [
    {
      icon: <FiUser />,
      items: [
        { label: 'Elemento 1-1', value: 'valor 1-1' },
        { label: 'Elemento 1-2', value: 'valor 1-2' },
        { label: 'Elemento 1-3', value: 'valor 1-3' }
      ]
    },
    {
      icon: <FiSettings />,
      items: [
        { label: 'Elemento 2-1', value: 'valor 2-1' },
        { label: 'Elemento 2-2', value: 'valor 2-2' }
      ]
    },
    {
      icon: <FiMail />,
      items: [{ label: 'Elemento 3-1', value: 'valor 3-1' }]
    }
  ];

  const selectedItems = selectedIconIndex !== null ? secondListData[selectedIconIndex].items : [];

  return (
    <Flex height="100vh">
      {/* Primera lista */}
      <Stack spacing={4} bg="gray.200" p={4}>
        {secondListData.map((data, index) => (
          <IconButton
            key={index}
            icon={data.icon}
            onClick={() => {
                handleIconSelect(index);
                handleCollapseToggle();
              }}            colorScheme={selectedIconIndex === index ? 'blue' : undefined}
            bg={selectedIconIndex === index ? 'blue.500' : undefined}
            _hover={{ bg: 'blue.400' }}
            _active={{ bg: 'blue.600' }}
          />
        ))}
      </Stack>

      {/* Segunda lista */}
      <Box flex={1} bg="gray.100" >
       {/*  <Flex align="center" mb={4}>
          <IconButton
            icon={collapsed ? <FiChevronDown /> : <FiChevronUp />}
            onClick={handleCollapseToggle}
          /> 
                    <Text ml={2}>Segunda lista</Text>

        </Flex>*/}
        {collapse && (
          <Stack spacing={2}>
            {selectedItems.map((item, idx) => (
              <Text key={idx} px={4}>
                {item.label} - {item.value}
              </Text>
            ))}
          </Stack>
        )}
      </Box>
    </Flex>
  );
};