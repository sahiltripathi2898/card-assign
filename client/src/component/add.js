import React, { Component } from 'react';
import axios from 'axios';

class add extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      country: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data
    const { name, country } = this.state;

    axios
      .post('http://localhost:5000/add', { name, country })
      .then((result) => {});
    window.location.href = '/';
  };

  render() {
    const { name, country } = this.state;
    return (
      <div>
        <h1
          style={{
            textAlign: 'center',
            padding: '40px',
            backgroundColor: 'whitesmoke',
          }}
        >
          Create New Startup
        </h1>

        <div style={{ margin: 'auto', width: '50%' }}>
          <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <label style={{ fontSize: '24px' }}>Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            <br />
            <div class="form-group">
              <label style={{ fontSize: '24px' }}>Country</label>
              <input
                type="text"
                name="country"
                value={country}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            <br />

            <button type="submit" className="btn btn-success">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default add;
