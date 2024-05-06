import { useState } from 'react';
import {
    Box, 
    Input,
    Text,
    Button
  } from '@chakra-ui/react'

const AddUpdateInvoice = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [amount, setAmount] = useState("");
    const [bsAmount, setBsAmount] = useState("");
    const [bsName, setBsName] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [date, setDate] = useState("");

    const [invoice, setInvoice] = useState([]);

    const addItem = () => {
        setInvoice([...invoice,{
            name,
            quantity,
            price,
            amount,
            bsAmount,
            bsName
        }])
    }

    const validate = () => {
        var today = new Date();
        if(!invoice?.length){
            alert("Add atleast 1 item!");
        }
        if(date < today) {
        alert("Set correct date!");
        }
    }

    return(
        <Box ml={"20%"} mt={"10%"}>
            <Text mb={"4%"} fontSize='1xl'>  Add Invoice Details</Text> 
            <Input type="text" placeholder='Customer Name'  onChange={(e) => setCustomerName(e.target.value)}/> 
            <Input type="date" placeholder='Date' onChange={(e) => setDate(e.target.value)} /> 

        <Box mb={"8%"}  justifyContent={"center"} alignItems={"center"}>
            <Text mb={"4%"} fontSize='1xl'>  Add Invoice Item</Text> 
            <Input type="text" placeholder='Item Name'  onChange={(e) => setName(e.target.value)}/> 
            <Input type="number" placeholder='Quantity' onChange={(e) => setQuantity(e.target.value)} /> 
            <Input type="number" placeholder='Price' onChange={(e) => setPrice(e.target.value)} /> 
            <Input mb={"4%"} type="number" placeholder='Amount' onChange={(e) => setAmount(e.target.value)} /> 

            <Text mb={"4%"} fontSize='1xl'>  Add Sundry</Text> 
            <Input type="text" placeholder='Bill Sundry Name' onChange={(e) => setBsName(e.target.value)} /> 
            <Input type="number" placeholder='Bill Sundry Amount' onChange={(e) => setBsAmount(e.target.value)} /> 
        </Box>
        <Button variant='solid' onClick={addItem}>
            Add item
        </Button>

        <Button variant='solid' onClick={validate}>
            Submit
        </Button>
        </Box>
    )
}

export default AddUpdateInvoice;