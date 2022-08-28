import { useRouter } from 'next/router';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';


const About = ({ properties }) => {
  const router = useRouter();

  return (
    <Box>
     
      
      <Text fontSize='xl' p='4' fontWeight='bold'>
        Starvo is the leading property website in the UAE connecting buyers, sellers and tenants, so that every real estate requirement in the region is fulfilled in a seamless, user-friendly manner.Going above and beyond just providing a database of available listings for rent and sale, Starvo has taken the onus of becoming the most reliable source for ‘all things real estate’. In the UAE today, every question that a potential end user could encounter is answered through the resources Starvo has created. {router.query.purpose}
      </Text>
   
    </Box>
  );
};



export default About;
