export default interface IToastInterface {
  title: string;
  description?: string;
  status: 'info' | 'warning' | 'success' | 'error' | 'loading';
  duration?: number;
  isClosable?: boolean;
  children?: React.ReactNode;
  toastFunction?: ({
    title,
    description,
    status,
    duration,
    isClosable,
  }: {
    title: string;
    description?: string;
    status: 'info' | 'warning' | 'success' | 'error' | 'loading' | undefined;
    duration?: number;
    isClosable?: boolean;
  }) => void;
}
