import TextField from '@mui/material/TextField';
import { Box, Button, FormControlLabel, Switch, TextareaAutosize } from '@mui/material';
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
import userBackendservice from '../backendservices/userBackendservice';
import { useParams } from 'react-router-dom';
import { Newspaper } from '@mui/icons-material';

let productCategoryForm = {
    "name": "product_category",
    "meta": {
      "displayName": "Product Category",
      "displayType": "select",
      "options": []
    }
  }
  let productPidForm = {
    "name": "product_pid",
    "meta": {
      "displayName": "Product Id",
      "displayType": "text",
      "isReadonly":true
    }
  }
  let productAvailabilityForm = {
    "name": "product_availability",
    "meta": {
        "displayType": "switch"
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
function getproduct(pid){
    return  backendservicewithoutauth.getProduct(pid).then((response) =>{
             return response
         })
        }
function EditProductForm(props){
    const [newSchema,setNewSchema] = React.useState(null);
    const [availability,setAvailability] = React.useState(false)
    const [imageId,setImageId] = React.useState(null)
    // useEffect(()=>{console.log("xuf",schema.fields[2])},[newSchema])
    console.log(productCategories,newSchema)
     const pid = useParams();
    if(newSchema == null){
    //     setNewSchema(productCategories)
    // }
   
    // if (props.edit!=null &&newSchema != null&& !("value" in newSchema.fields[0]['meta']) ){
        console.log(props.edit,pid)
        
        getproduct(pid.pid).then((response)=>{
            console.log(response)
            let schema1 = JSON.parse(JSON.stringify(productCategories))
            if(response!=null){
                productPidForm["meta"]["value"] = pid.pid;
                schema1.fields[0]['meta']['value'] = response.name;
                // schema1.fields[2] = productCategories.fields[2];
                schema1.fields[1]['meta']['value'] = response.price;
                schema1.fields[2]['meta']['value'] = response.category;
                schema1.fields[3]['meta']['value'] = response.count;
                schema1.fields[4]['meta']['value'] = response.description;
                schema1.fields[5]['meta']['file'] = response.image;                
                schema1.fields.push(productPidForm)
                // schema1.fields.push(productAvailabilityForm)
                // productAvailabilityForm['meta']["value"] = {"value":response.availability}
                // schema1.fields[4]['value'] = response.data.image;
                setNewSchema(schema1)
                setImageId(response.image)
                setAvailability(response.availability)
                console.log(newSchema,schema1)
            }

        }).catch((err)=>console.log(err))
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
    const handleSwitchChange = (event) => {
        console.log("abc",availability,event.target,event.target.checked)
        setAvailability(event.target.checked);
        // console.log(availability)
    
      };
    // schema.fields[2] = productCategoryForm
    function handleAddProductSubmit(event){
        console.log("clicked",name,count,price,description)
        event.preventDefault()
    }
    console.log(newSchema)
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
    <div><FormControlLabel  control={<Switch  
        checked={availability}
      onChange={handleSwitchChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />} label="Active?" ></FormControlLabel>
        <Muiform schema={newSchema}
        // data={{"product_image":"https://firebasestorage.googleapis.com/v0/b/brave-theater-255512.appspot.com/o/images%2Fflight.pngSamsung+F452aabc%40gmail.com?alt=media"}}
        
    onChange={(...data) => {
        // handle data on change
        console.log(data,availability)
        handleChange(data)
        
    }}
    onSubmit={(...data) => {
        console.log(data,availability);
        // event.preventDefault()
        data[0]['product_availability'] = availability 
        sellerBackendService.editProduct(data[0]).then((response)=>{
            alert(response.data.message)
        }).catch((err)=>{
            console.log(err)
            alert(err)
        })
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

export default EditProductForm;