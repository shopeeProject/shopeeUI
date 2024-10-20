import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromCart } from '../stores/userCartStore';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const [open, setOpen] = React.useState(false);
    const [itemToBeDeleted,setItemToBeDeleted] = React.useState();
    const [item,setItem] = React.useState(props.item)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    function handleDeleteFromCart(pid) {
        {
            props.store.dispatch(removeFromCart(pid))}
            console.log(props.store.getState())
            handleClose()
        }

    return (
        <React.Fragment>
            <IconButton aria-label="delete" sx={{ "float": "right" }} onClick={() => handleClickOpen(props.item)}>
                <DeleteIcon />
            </IconButton>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure to delete {props.item.itemName} from cart?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={()=>handleDeleteFromCart(props.item.itemId)}>Agree</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
