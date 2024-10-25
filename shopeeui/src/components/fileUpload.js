import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box } from '@mui/material';
import backendservicewithoutauth from '../backendservices/backendservicewithoutauth';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});



export default function InputFileUpload() {
    const [fileName, setFileName] = React.useState('');
    const [file, setFile] = React.useState('');
    function handleSubmit(){
        const formdata = new FormData();
        formdata.append("file",file)
        // formdata.append("fileName",fileName)
        backendservicewithoutauth.addProduct(formdata);
    }
    return (
        <div>
            <Box>
                <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                Upload files
                <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => {
                         console.log(event.target.files) 
                        setFileName(event.target.files[0].name);
                        setFile(event.target.files[0])
                        }}
                    accept='image/png, image/gif, image/jpeg'
                />
            </Button> <p>{fileName}</p> 
            </Box>
           
            <Button variant="contained"  onClick={handleSubmit}>Submit</Button>
           
        </div>

    );
}
