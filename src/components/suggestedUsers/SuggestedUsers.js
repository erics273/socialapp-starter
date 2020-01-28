import React from "react";
import SocialAppService from "../../socialAppService";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./SuggestedUsers.css"

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function SuggestedUsers() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="card2">
        {/* <CardContent> */}
          {/* <Typography> */}
          <h2>Suggested Users</h2>
          {/* </Typography> */}
        {/* </CardContent> */}
    </div>
  );
}

export default SuggestedUsers;
