import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    maxWidth: "100%",
    backgroundColor: "peru"
  },
});

export default function SuggestedUserCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary">
          Username
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}