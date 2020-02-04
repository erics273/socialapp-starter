import React from "react";
import "./CreateMessage.css"

import SocialAppService from "../../socialAppService";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';


class CreateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.client = new SocialAppService();
    this.state = {
      formData: {
        text: ""
      }
    };
  }

  handleChange = event => {
    let formData = this.state.formData;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.client.createMessage(this.state.formData).then(result => {
      this.props.getMessageHandler();
      this.setState({ formData: { text: "" } })
    });
  };

  render() {
    return (
      <form
        className="createMessage"

        onSubmit={this.handleSubmit}
      >
        <div className="h2Element">
          <h2>Post Message</h2>
        </div>
        <Box display="flex" justifyContent="flex-start">
          <TextField
            className="outlined-required"
            name="text"
            label="Write message"
            variant="filled"
            value={this.state.formData.text}
            autoComplete="off"
            onChange={this.handleChange}
          />

          <Button
            size="large"
            className="postButton"
            type="submit"
            variant="contained"
          >
            Post
          </Button>
        </Box>
      </form>
    );
  }
}

export default CreateMessage;
