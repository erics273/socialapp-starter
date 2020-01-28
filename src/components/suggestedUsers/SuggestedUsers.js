import React, {Component} from 'react'
import SocialAppService from "../../socialAppService";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./SuggestedUsers.css"
import { render } from "react-dom";

const styles = {
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
};

class SuggestedUsers extends Component {
  constructor() {
    super()
    this.state = {
      suggestedusers: []
    }
  }
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <div className="card">
        {/* <Card className={classes.card}> */}
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <h3>Suggested Users</h3>
          </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        {/* <CardActions>
  
        </CardActions> */}
        {/* </Card> */}
      </div>
    );
  }
}

export default withStyles(styles)(SuggestedUsers);
