import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SocialAppService from "../../socialAppService";

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
      userPicture: {config:""}
    }
  }

  getCurrentUserPicture(){
    this.client.getUserPicture(this.props.username).then((response)=>
      this.setState({userPicture:response})
    )
  }

  componentDidMount(){
    this.getCurrentUserPicture()
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
              Lizard
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
          {/* <Button onClick={this.handleDelete} size="small">Delete</Button> */}

        </CardActions>
      </Card>

    );
  }

}

export default withStyles(styles)(UserInfo);