import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SocialAppService from "../../socialAppService";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



export default function SimpleCard(props) {
  const handleDelete = event => {
    const client = new SocialAppService()
    client.deleteUser(props.username)
  }
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          User
       </Typography>
        <Typography variant="h5" component="h2">
          First name Last name
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Age
        </Typography>
        <Typography variant="body2" component="p">
          About
          <br />
          {'"a creative person"'}
        </Typography>
      </CardContent>
      <CardActions>
         <Button size="small">Add Image</Button>
        <Button size="small">Update</Button>
        <Button onClick={handleDelete} size="small">Delete</Button>

      </CardActions>

    </Card>
  );
}