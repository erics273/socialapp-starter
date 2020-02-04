import React from 'react';
import { Link, withRouter } from "react-router-dom";
import "./Message.css"

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


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


function Message(props) {
  let liked = false;
  
  const classes = useStyles();
  
  const reload = (e) => {
    props.history.push("/profile/" + props.username )
    window.location.reload()
  }
  

  const handleLike = event => {

    let userInfo = JSON.parse(localStorage.getItem("login"))

    let likeId = ""
    for (let like of props.likes) {
      if (like.username === userInfo.result.username) {
        liked = true
        likeId = like.id
      }
    }

    if (!liked) {
      liked = true;
      return props.client.addLike(props.id).then(result => {
        props.getMessageHandler();
      });
    }
    else {
      liked = false
      return props.client.deleteLike(likeId).then(result => {
        props.getMessageHandler();
      });
    }
  }

  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.username} src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <div>
          <ListItemText


            primary={
              <Link to={"/profile/" + props.username} onClick={reload}>
                {props.username}
              </Link>
            }
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
        </div>
      </ListItem>

      <Divider variant="inset" component="li" />
    </div>
  );
}

export default withRouter(Message)