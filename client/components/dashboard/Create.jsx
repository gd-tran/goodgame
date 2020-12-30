import React from 'react';

const createStyle = {
  height: '500px',
  width: '500px',
  background: '#7E8287',
};

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      genre: '',
      platform: '',
      review: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/games', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/JSON"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

  render() {
    return (
      <div style={createStyle}>
        <h1>Create</h1>
        <form>
          <label>
            Title:
          </label>
          <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleChange(e)} required />
          <br />
          <label>
            Description:
          </label>
          <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} required />
          <br />
          <label>
            Genre:
          </label>
          <input type="text" name="genre" value={this.state.genre} onChange={(e) => this.handleChange(e)} required />
          <br />
          <label>
            Platform
          </label>
          <input type="text" name="platform" value={this.state.platform} onChange={(e) => this.handleChange(e)} required />
          <br />
          <label>
            Review:
          </label>
          <input type="text" name="review" value={this.state.review} onChange={(e) => this.handleChange(e)} required />
          <br />
          <input type="submit" value="submit" onClick={(e) => this.handleSubmit(e)} />
        </form>
      </div>
    );
  }
}

export default Create;