import { Button, Rating, Slider, TextField } from "@mui/material";
import React from "react";



function AddReview(props){
    const [value,setValue] = React.useState(1);
    function handleAddReviewSubmit(){
        console.log(value,textValue)
    }   
    const [textValue,setTextValue] = React.useState("")

    return <div>
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      {/* <TextField></TextField> */}<br></br>
    <TextField id="standard-basic" label="Standard" variant="standard" value={textValue} onChange={(event, newTextValue) => {
          setTextValue(event.target.value);
        }}/>
    <Button onClick={handleAddReviewSubmit}>Submit</Button>
    </div>
}
export default AddReview;