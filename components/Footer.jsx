import { Box } from '@chakra-ui/layout';
import Link from 'next/link';
import {Menu } from '@chakra-ui/react';

export const Footer = () => (
  <Menu>
  <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
    
  <div>
      <Link href='/Privacy'>&nbsp; Privacy Policy |</Link>
      <Link href='/Terms'>&nbsp;Terms & Conditions |</Link>
      <Link href='/About'>&nbsp;About us |</Link> 
      <Link href='/Contact'>&nbsp;Contact us</Link> 
    </div>
    
    © 2022 Starvo, Inc.
, Inc. 
    </Box>
    </Menu>
    

);

export default Footer;