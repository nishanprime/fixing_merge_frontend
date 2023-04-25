import { useToast } from '@chakra-ui/react';
import { IToastInterface } from 'Interfaces';
import React, { useEffect, useState } from 'react';

const ToastLayout = ({ children, toastFunction }: IToastInterface) => {
  const toast = useToast();
  const showToast = ({
    title,
    description,
    status,
    duration,
    isClosable,
  }: IToastInterface) => {
    toast({
      title,
      description,
      status,
      duration,
      isClosable,
    });
  };

  return <div>{children}</div>;
};

export default ToastLayout;
