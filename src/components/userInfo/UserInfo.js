import React from "react";
import { withRouter } from "react-router-dom";
import { withAsyncAction } from "../../HOCs";
import "./UserInfo.css";
import SocialAppService from "../../socialAppService";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    width: "32%",
    maxWidth: "50%",
    background: "burlywood",
    marginLeft: "3%"
  },
  media: {
    height: 140,
  }
};

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.client = new SocialAppService();
    this.state = {
      updateUser: false,
      passwordDialog: false,
      formData: {
        picture: ""
      },
      userPicture: { config: "" },
      userData: {
        password: "",
        about: "",
        displayName: ""
      }
    };
  }

  handleDelete = event => {
    this.client.deleteUser(this.props.username);
    this.props.logout();
  };

  getCurrentUserPicture() {
    this.client
      .getUserPicture(this.props.username)
      .then(response => this.setState({ userPicture: response }));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.togglePasswordDialog();
    const formData = this.fileUpload(this.state.picture);
    this.client.setUserPicture(this.props.username, formData).then(()=>{
      this.getCurrentUserPicture()
    })
    
    const userDataRequest = {
      password: this.state.userData.password,
      about: this.state.userData.about,
      displayName: this.state.userData.displayName
    };
  
    this.client.updateUser(this.props.username, userDataRequest);
    this.toggleUpdateUser();
  };

  onChange = e => {
    let userData = this.state.userData;
    userData[e.target.name] = e.target.value;

    let pictureSet = this.state.formData.picture;
    if (e.target.files != undefined) {
      pictureSet = e.target.files[0];
    }

    this.setState({
      picture: pictureSet,
      userData
    });
  };

  onChangePass = e => {
    let userData = this.state.userData;
    userData[e.target.name] = e.target.value;

    this.setState({
      userData
    });
  };

  fileUpload(file) {
    const formData = new FormData();
    formData.append("picture", file);
    return formData;
  }

  getUserData() {
    return this.client.getUser(this.props.username).then(result => {
      const capsDisplayName = result.data.user.displayName.toUpperCase();
      this.setState({
        userData: {
          password: "",
          about: result.data.user.about,
          displayName: capsDisplayName
        }
      });
    });
  }

  toggleUpdateUser = () => {
    this.setState({
      updateUser: !this.state.updateUser
    });
  };

  togglePasswordDialog = () => {
    this.setState({
      passwordDialog: !this.state.passwordDialog
    });
  };

  handleUpdate = () => {
    this.setState({
      updateUser: true
    });
    this.getUserData();
  };

  componentDidMount() {
    this.getUserData();
    this.getCurrentUserPicture();
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Dialog
          open={this.state.passwordDialog}
          onClose={this.togglePasswordDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Password</DialogTitle>
          <DialogContent>
            <DialogContentText>Please enter a password</DialogContentText>
            <TextField
              required
              onChange={this.onChangePass}
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.togglePasswordDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>

        <Card className={classes.card}>
          <CardActionArea onChange={this.onChange}>
            <img src={this.state.userPicture.config.url} />
            {this.state.updateUser && (
              <form>
                <input name="picture" type="file" />
              </form>
            )}
            <CardContent onClick={this.handleUpdate}>
              <Typography gutterBottom variant="h5" component="h2">
                {this.state.updateUser && (
                  <TextField
                    displayName="outlined-helperText"
                    name="displayName"
                    label="Display Name"
                    fullWidth
                    defaultValue={this.state.userData.displayName}
                    variant="filled"
                  />
                )}

                {!this.state.updateUser && this.state.userData.displayName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.state.updateUser && (
                  <TextField
                    id="filled-multiline-flexible"
                    label="Update About"
                    name="about"
                    fullWidth
                    defaultValue={this.state.userData.about}
                    multiline
                    rowsMax="4"
                    variant="filled"
                  />
                )}
                {!this.state.updateUser && this.state.userData.about}
              </Typography>
            </CardContent>

            {this.state.updateUser && (
              <React.Fragment>
                <CardActions>
                  <Button
                    size="medium"
                    onClick={this.togglePasswordDialog}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </CardActions>

                <CardActions>
                  <Button onClick={this.toggleUpdateUser} size="small">
                    Cancel
                  </Button>

                  <Button
                    onClick={this.handleDelete}
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  >
                  delete  
                  </Button>
                </CardActions>
              </React.Fragment>
            )}
          </CardActionArea>
        </Card>
      </React.Fragment>
    );
  }
}

const connectedUser = withAsyncAction("auth", "logout")(UserInfo);
const bringStyles = withStyles(styles)(connectedUser);

export default withRouter(bringStyles);
