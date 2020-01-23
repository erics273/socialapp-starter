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
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';


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
    this.client = new SocialAppService()
    this.state = {
      updateUser: false,
      userData: {
        password: "",
        about: "",
        displayName: ""
      }

    }
  }

  handleDelete = event => {
    this.client.deleteUser(this.props.username)
    this.props.logout()
  }

  getUserData() {
    return this.client.getUser(this.props.username).then(result => {
      const capsDisplayName = result.data.user.displayName.toUpperCase()
      this.setState({
        userData: {
          password: "result.data.user.",
          about: result.data.user.about,
          displayName: capsDisplayName
        }
      })
    })
  }

  handleUpdate = () => {

    this.setState({
      updateUser: !this.state.updateUser
    })
    this.getUserData()
  }

  componentDidMount() {
    this.getUserData()
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
            {this.state.updateUser && (
              <TextField
                displayName="outlined-helperText"
                label="Display Name"
                defaultValue={this.state.userData.displayName}
                variant="filled"
              />
            )}

            {!this.state.updateUser && this.state.userData.displayName}
          </Typography>

          <Typography variant="body2" component="p">
            <div className="about">
            About
          <br />

            {this.state.userData.about}
</div>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add Image</Button>
          <Button onClick={this.handleUpdate} size="small">Update</Button>
          {this.state.updateUser && (
            <Button
              onClick={this.handleDelete}
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >Delete Account</Button>
          )}
        </CardActions>
      </Card>
    );
  }
}

const connectedUser = withAsyncAction("auth", "logout")(UserInfo)

export default withStyles(useStyles)(connectedUser)