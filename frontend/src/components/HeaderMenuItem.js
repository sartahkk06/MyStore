import { Icon, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const HeaderMenuItem = ({ url, icon, children }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      fontSize='sm'
      fontWeight='semibold'
      letterSpacing='wide'
      textTransform='uppercase'
      mr='5'
      display='flex'
      alignItems='center'
      color='whiteAlpha.800'
      mb={{ base: '2', md: '0' }}
      _hover={{ textDecor: 'none' }}>
      <Icon as={icon} mr='1' w='4' h='4' />
      {children}
    </Link>
  );
};

export default HeaderMenuItem;
