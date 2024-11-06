import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

// Sample props
// let props = {
//   'name':'a',
//   'image':"/imagepath",
//   'description':"",
// }

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
      {props.edit?
      <a href={'/product/edit/'+props.edit}>
      <CardActions>
        <Button size="small" color="warning">
          Edit
        </Button>
      </CardActions>
      </a>:null}
      {/* {props.edit==nul} */}
    </Card>
  );
}
