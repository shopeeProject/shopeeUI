import TextField from '@mui/material/TextField';
import { Box, Button, TextareaAutosize } from '@mui/material';
import TextArea from './textArea';
import NumberInputBasic from './productNumberInput';
import { NumberInput } from '@mui/base/Unstable_NumberInput/NumberInput';
import { Unstable_NumberInput } from '@mui/base';
import QuantityInput from './numberInput';
import ProductNumberInput from './productNumberInput';
import Muiform from "mui-forms"
import React, { useEffect } from 'react';
import schema from "./addProductForm.json"
import backendservice from '../backendservices/userBackendservice';
import sellerBackendService from '../backendservices/sellerBackendService';
import backendservicewithoutauth from '../backendservices/backendservicewithoutauth';

let productCategoryForm = {
    "name": "product_category",
    "meta": {
      "displayName": "Product Category",
      "displayType": "select",
      "options": []
    }
  }
  let schema1 = schema;
let productCategoriesPromise = backendservicewithoutauth.getCategories()

  let productCategories = null
  productCategoriesPromise.then((response)=>{
        console.log(response)
        let options = []
        response.data.map((val)=>{
            console.log(val)
            options.push({
                "label":val.name,  
                "value":val.id
            })
        })
        let productCategoryForm1 = productCategoryForm
        productCategoryForm1["meta"]["options"] = options;
        console.log(productCategoryForm1)
        // return productCategoryForm1;
        let schema1 = JSON.parse(JSON.stringify(schema))
        schema1.fields[2] = productCategoryForm;
        productCategories = schema1;
        return schema1;
        // setNewSchema(schema1);
        // console.log(newSchema)

    })
//   schema1.fields[2] = JSON.parse(JSON.stringify(productCategoryForm))
function AddProductForm(props){
    const [newSchema,setNewSchema] = React.useState(null);
    // useEffect(()=>{console.log("xuf",schema.fields[2])},[newSchema])
    console.log(productCategories)
    
    if(productCategories!==newSchema){
        setNewSchema(productCategories)
    }
    
    const [name,setName] = React.useState("")
    const [count,setCount] = React.useState("")
    const [price,setPrice] = React.useState("")
    const [description,setDescription] = React.useState("")
    function handleChange(data){
        switch (data.field){
            case "product_name":{
                setName(data.value);
            }
            case "product_count":{
                setCount(data.value);
            }
            case "product_price":{
                setPrice(data.value)
            }
            case "product_description":{
                setDescription(data.value)
            }
            
        }

    }
    // schema.fields[2] = productCategoryForm
    function handleAddProductSubmit(event){
        console.log("clicked",name,count,price,description)
        event.preventDefault()
    }
    return (
    //     <Box
    //         component="form"
    //         sx={{ '& > :not(style)': { m: 1, width: '25ch',marginTop:'5ch' } }}
    //         noValidate
    //         autoComplete="off"
    //         ><TextField id="outlined-basic" label="Name" variant="outlined" value = {name} onChange = {(e) => {setName(e.target.value)}} />
    //         {/* <TextField id="standard-basic" label="Count" variant="outlined" /> */}
    //         <ProductNumberInput currency = {true} name = {"Price"} value = {price} onChange = {(e) => {setprice(e.target.value)}}></ProductNumberInput>
    //         {/* <ProductNumberInput  name = {"Count"}></ProductNumberInput> */}
    //         <ProductNumberInput name = {"Product Quantity"} value = {count} onChange = {(e) => {setCount(e.target.value)}}></ProductNumberInput>
    //         {/* <NumberInputBasic placeholder = "Quantity"></NumberInputBasic>  */}
    //         <TextArea maxRows = {4} variant = "outlined" placeholder = "Description" value = {description} onChange = {(e) => {setDescription(e.target.value)}} ></TextArea>
    //         <Button onClick={handleAddProductSubmit}>Submit</Button>
    // </Box>
    newSchema === null?null:
    <div>
        <Muiform schema={newSchema}
    onChange={(...data) => {
        // handle data on change
        console.log(data)
        handleChange(data)
        
    }}
    onSubmit={(...data) => {
        console.log(data);
        // event.preventDefault()
        sellerBackendService.addProduct(data[0]);
    }}
    ></Muiform>
    {/* <button type="button" onClick={()=>{
        let a = newSchema
        console.log("df")
        a["fields"][2] = productCategoryForm;
        setNewSchema(schema1)
    }}>abc</button> */}
    </div>
    
    )
}

export default AddProductForm;