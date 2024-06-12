import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { GiForkKnifeSpoon } from 'react-icons/gi'; // Import lunch icon
import './Style.css';

export const Dagensagenda = (props) => {
  const backgroundColors = ['#E6EFF8', '#EDEBF5', '#F0E9F1', '#F6F7F9', '#E6EFF8'];

  // Function to determine the text color based on background color
  const getTextColor = (bgColor) => {
    // Adjust the color for better contrast
    const lightColors = ['#E6EFF8', '#EDEBF5', '#F0E9F1', '#F6F7F9', '#E6EFF8'];
    return lightColors.includes(bgColor) ? '#333333' : '#FFFFFF';
  };

  return (
    <div>
      <Box mb="2">
        <Flex justify="space-between" alignItems="center">
          <Text fontWeight="normal" className="text-muted">
            Time
          </Text>
          <Text fontWeight="normal" textAlign="center" flex="1" className="text-muted">
            Agenda
          </Text>
        </Flex>
      </Box>
      <div>
        {props.dailyAgenda.map((agenda, index) => {
          const bgColor = backgroundColors[index % backgroundColors.length];
          const textColor = getTextColor(bgColor);

          return (
            <Box key={index} mb="3" borderRadius="8px" border="1px solid" backgroundColor={bgColor}>
              <Flex justify="space-between" alignItems="center" borderRadius="8px">
                <div>
                  <Text className="mx-2 mt-2" fontSize="15" color={textColor}>
                    {agenda.time}
                  </Text>
                </div>
                <Flex justifyContent="center" flex="1" alignItems="center">
                  <Text className="mx-2 mt-2" fontSize="15" textAlign="center" color={textColor}>
                    {agenda.title}
                  </Text>
                  {agenda.time === '12:00' && <GiForkKnifeSpoon size={20} color={textColor} />}
                </Flex>
              </Flex>
            </Box>
          );
        })}
      </div>
    </div>
  );
};
