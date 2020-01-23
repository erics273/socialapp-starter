import React, { Component } from 'react';
import { withAsyncAction } from "../../HOCs";
import "./UserInfo.css";
import SocialAppService from "../../socialAppService";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles => ({
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

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      updateUser: false,

    }
  }

  handleDelete = event => {
    const client = new SocialAppService()
    client.deleteUser(this.props.username)
    this.props.logout()
  }

  handleUpdate() {

  }

  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <div className="user">
            User
            </div>
       </Typography>
          <Typography variant="h5" component="h2">
            <div className="names">
            First name Last name
            </div>
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Age
        </Typography>
          <Typography variant="body2" component="p">
            <div className="about">
            About
          <br />
          </div>
            {'"a creative person"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add Image</Button>
          <Button size="small">Update</Button>
          <Button onClick={this.handleDelete} size="small">Delete</Button>
        </CardActions>
      </Card>
    );
  }
}

const connectedUser = withAsyncAction("auth", "logout")(UserInfo)

export default withStyles(useStyles)(connectedUser)