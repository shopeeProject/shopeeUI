import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import { NumberInput } from '@mui/base/Unstable_NumberInput/NumberInput';
import QuantityInput from './numberInput';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import AlertDialogSlide from './dialog';
import { useNavigate } from 'react-router-dom';

export default function ActionAreaCard(props) {
    const navigate = useNavigate();
    const [products, setProducts] = React.useState(props.store.getState()['cart']['items']);
    const [cartValue, setCartValue] = React.useState(props.store.getState()['cart']['value']);
    console.log(products)
    props.store.subscribe(() => {
        setProducts(props.store.getState()['cart']['items']);
        setCartValue(props.store.getState()['cart']['value'])
    })
    function checkout(){
              navigate('/user/checkout'); // Change to your desired route
    } 

    return (
        <div>
        {/* { (activateAlert)?:null} */}
            {products.map((item) => {
                return <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea href={'/product/'+item.itemId}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.image}
                            alt={item.itemName}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.itemName}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
                                {item.price}
                            </Typography>
                            
                        </CardContent>
                    </CardActionArea>
                    <QuantityInput pid={item.itemId} store={props.store} ></QuantityInput>
                    <AlertDialogSlide store = {props.store} item = {item}></AlertDialogSlide>
                    {/* <IconButton aria-label="delete" sx={{"float":"right"}} onClick={()=>handleItemDelete({item})}>
                        <DeleteIcon />
                    </IconButton> */}
                </Card>
            })}
            <h1>Cart Value: {cartValue}</h1>
            <Button onClick={checkout}>Checkout</Button>
        </div>
    );
}
