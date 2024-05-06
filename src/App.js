import logo from './logo.svg';
import './App.css';
import Home from './home';
import { ChakraProvider } from '@chakra-ui/react';
import {Routes,Route} from "react-router-dom";
import Drawer from './components/drawer';
import {Box} from '@chakra-ui/react';
import InvoiceList from './invoiceList';
import AddUpdateInvoice from './addUpdateInvoice';
function App() {
  return (
      <ChakraProvider>
        <Box display={"flex"}>
        <Drawer />
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/invoiceList" element={<InvoiceList />}/>
            <Route exact path="/InvoiceDetailComponent" element={<AddUpdateInvoice />}/>
            <Route exact path="/InvoiceUpdateComponent" element={<AddUpdateInvoice />}/>
        </Routes>
        </Box>
      </ChakraProvider>
  );
}

export default App;
