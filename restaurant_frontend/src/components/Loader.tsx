import React from 'react';
import styles from '../styles/loader.module.css';
import { Spinner } from '@chakra-ui/react';

const Loader = ({ fullPage = true }: { fullPage?: boolean }) => {
  return (
    <div className={fullPage ? styles.loaderFull : styles.loader}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
};

export default Loader;
