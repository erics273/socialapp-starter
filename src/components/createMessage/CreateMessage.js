import React from "react";
import SocialAppService from "../../socialAppService";
import TextField from '@material-ui/core/TextField';
import "./CreateMessage.css"



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
      });
  };

  render() {
    return (
      <form
        className="createmessage"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <div className="h2Element">
          <h2>Post Message</h2>
        </div>
        <TextField
          required
          className="outlined-required"
          name="text"
          label="Write message"
          variant="outlined"
        />
        <br />
        <br />

        <br />
        <div>
          <button className="postButton" type="submit">
            Post
          </button>
        </div>
      </form>
    );
  }
}

export default CreateMessage;
