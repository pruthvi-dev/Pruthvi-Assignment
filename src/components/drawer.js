import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { useRef } from 'react'
import {
    Box, 
    Button,
    Input,
    Text,
    useDisclosure,
    IconButton
  } from '@chakra-ui/react'
  import { GiHamburgerMenu } from "react-icons/gi";
  import { useNavigate } from 'react-router-dom';

const DrawerComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const btnRef = useRef()
  
    const handleNavigation = () => {
        navigate('/invoiceList');
    }
    return (
      <>
      <Box>
      <IconButton  m={10} ref={btnRef} aria-label='Search database' onClick={onOpen} icon={<GiHamburgerMenu />} />
      </Box>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
          <DrawerHeader>Altius Hub</DrawerHeader>
            <DrawerCloseButton />
            <DrawerBody>
            <Button colorScheme='teal' variant='link' onClick={handleNavigation}>
            <Text fontSize='md'>Invoices</Text>
            </Button>
            
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerComponent;