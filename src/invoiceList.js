import { useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Button,
    Stack
} from '@chakra-ui/react'
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const InvoiceList = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState("");

    const addInvoice = () => {
        navigate('/InvoiceDetailComponent');
    }
    return (
        <Stack ml={"20%"} mt={"10%"}>
            <Button width={"30%"} leftIcon={<IoMdAdd />} mb={"10%"} colorScheme='teal' variant='solid' onClick={addInvoice}>
                Add Invoice
            </Button>
            <Box  display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                <TableContainer>
                    <Table variant='striped' colorScheme='teal'>
                        <TableCaption>Imperial to metric conversion factors</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
                            <Tr>
                                <Td>feet</Td>
                                <Td>centimetres (cm)</Td>
                                <Td isNumeric>30.48</Td>
                            </Tr>
                            <Tr>
                                <Td>yards</Td>
                                <Td>metres (m)</Td>
                                <Td isNumeric>0.91444</Td>
                            </Tr>
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>To convert</Th>
                                <Th>into</Th>
                                <Th isNumeric>multiply by</Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Box>
        </Stack>
    )
}

export default InvoiceList;