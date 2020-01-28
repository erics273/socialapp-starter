import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withAsyncAction } from "../../HOCs";
import "./UserInfo.css";
import SocialAppService from "../../socialAppService";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';


const styles = {
  card: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
};

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.client = new SocialAppService();
    this.state = {
      formData: {
        picture: ""
      },
      userPicture: {config:""},
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
  
  getCurrentUserPicture(){
    this.client.getUserPicture(this.props.username).then((response)=>
      this.setState({userPicture:response})
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = this.fileUpload(this.state.picture)
    this.client.setUserPicture(this.props.username, formData)
  }
  onChange = (e) => {
    this.setState({picture:e.target.files[0]})
  }

  fileUpload(file){
    const formData = new FormData();
    formData.append('picture',file)
    return formData
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
    this.getCurrentUserPicture()

  }

  render() {
    const { classes } = this.props;
    return (

      <Card className={classes.card}>
        <CardActionArea>
          {/* <CardMedia
            className={classes.media}
            // image={<img src={this.state.userPicture.url}/>}
            title="Contemplative Reptile"
          /> */}
          <img src={this.state.userPicture.config.url}></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
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
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <label htmlFor="text-button-file">
            <Button component="span">Upload</Button>
          </label>
          <form>
            <input
              onChange={this.onChange}
              name="picture"
              type="file"
            />
            <Button onClick={this.handleSubmit} size="small" color="primary">
              Update
            </Button>

          </form>
          <Button onClick={this.handleUpdate} size="small" color="primary">
              Delete
            </Button>
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

export default withStyles(styles)(connectedUser);

