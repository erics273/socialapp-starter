import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import "./Message.css"

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Message(props) {
  let liked = false;

  const classes = useStyles();

  const handleLike = event => {
    let messageData = props.client.getMessage(props.id)
    let likeId = ""
    for (let like of props.likes)
    {
      if (like.username == "abc") {
        liked = true
        likeId = like.id
        console.log(likeId)
      }
    }

      if (!liked) {
        liked = true;
        return props.client.addLike(props.id)
      }
      else {
        liked = false
        return props.client.deleteLike(likeId)
      }
  }

  return (

    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.username} src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={props.username}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {props.text}
                <br />
                <Button onClick={handleLike}>
                  <ThumbUpIcon /><span>{props.likes.length} Like</span>
                </Button>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </div>
  );
}