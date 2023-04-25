import React, { useState } from 'react';
import { RangeDatepicker } from 'chakra-dayzed-datepicker';
import { Box, Flex, Icon, InputGroup, InputRightElement } from '@chakra-ui/react';
import { AiFillCalendar } from 'react-icons/ai';


interface DateRangePickerProps {
    selectedDates: any;
    onDateChange: (dateRange: any) => void;
}



const DateRangePicker: React.FC<DateRangePickerProps> = ({
    selectedDates,
    onDateChange,
}) => {
    const handleDateChange = (dateRange: any) => {
        onDateChange(dateRange);
    };


    return (
        <Box pr="4" w="fit-content" boxShadow={'md'} borderRadius={'4px'}>
            <Flex alignItems={'center'}>
                <Box zIndex={'1'} h="40px" bgColor={'white'} >
                    <RangeDatepicker
                        selectedDates={selectedDates}
                        onDateChange={handleDateChange}
                    />
                </Box>
                <Box bgColor={'#1635AC'} h="42px" color={'white'} zIndex={'2'} px="4" py="2" borderRadius={'0px 4px 4px 0px'} ml="-1" >
                    <Icon as={AiFillCalendar} boxSize={4} />
                </Box>
            </Flex>
        </Box>
    );
};

export default DateRangePicker;
