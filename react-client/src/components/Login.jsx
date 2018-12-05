import React from 'react';
import $ from 'jquery';
import Dropdown from 'react-drop-down' // Library from npm


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false,
      username: '',
      password: '',
      loggedin: false,
      major: 'Plumber',
      name: '',
      email: '',
      password: '',
      description: '',
      phonenumber: 0,
      clients: []
    };
  }

  componentDidMount() {
    $('.login, .edit, .submit').hide() // To hide any unwanted components
    if (this.state.loggedin === true) { //to check if the user is logged in
      $('.edit').show() //show edit inputs
    }
    this.setState({
      shown: false
    })
  }

  handleOnClick() { // When click on login word
    this.setState({
      shown: !this.state.shown
    })
    if (!this.state.shown) {
      $('.login, .submit').show()
    } else {
      $('.login, .submit').hide()
    }
  }

  //login request
  handleSubmit() {
    $.ajax({
      type: 'POST',
      url: '/login',
      data: { username: this.state.username, password: this.state.password },
      success: (data) => {
        this.setState({
          loggedin: true
        })
        $('.edit').show()
      },
      error: (err) => {
        alert('err');
        console.log(err)
      }
    });
  }

  //Worker fields editing 
  handleUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleMajor(e) {
    this.setState({
      major: e
    })
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  handlePhonenumber(e) {
    this.setState({
      phonenumber: e.target.value
    })
  }

  //new values request
  handleEdit() { // Worker profile editing after login
    $.ajax({
      type: 'POST',
      url: '/edit',
      data: {
        username: this.state.username,
        name: this.state.name,
        major: this.state.major,
        email: this.state.email,
        password: this.state.password,
        description: this.state.description,
        phonenumber: this.state.phonenumber
      },
      success: (data) => {
        
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleClients() { // Worker profile editing after login
    $.ajax({
      type: 'POST',
      url: '/showclient',
      data: {
        username: this.state.username,
      },
      success: (data) => {
        console.log('data', data)
        alert(data)
        this.setState({
          clients: data
        })
      },
      error: (err) => {
        alert('err')
        console.log('err', err);
      }
    });
  }

  render() {
    return (
      <div>
        <h4 style={{cursor: 'pointer'}} onClick={this.handleOnClick.bind(this)}> Login </h4>
        <label className='login'>
          Username:
          <br /><input type="text" onChange={this.handleUsername.bind(this)} />
        </label> <br />
        <label className='login'>
          Password:
          <br /><input type="text" onChange={this.handlePassword.bind(this)} />
        </label> <br />
        <button onClick={this.handleSubmit.bind(this)} className='submit'> Submit </button>

        <form className='edit'>
          <label>
            Clients:
            <br /> {this.state.clients}
          </label> <br />
          <button onClick={this.handleClients.bind(this)} className='submit'> Clients </button>
          <label>
            Name:
            <br /><input type="text" onChange={this.handleName.bind(this)} />
          </label> <br />
          <label>
            Major: <br />
            <Dropdown value={this.state.major}
              onChange={this.handleMajor.bind(this)}
              options={['Electrician', 'Plumber', 'Painter', 'Carpenter', 'Gardener']} />
          </label> <br />
          <label>
            Email:
            <br /><input type="text" onChange={this.handleEmail.bind(this)} />
          </label> <br />
          <label>
            Password:
            <br /><input type="text" onChange={this.handlePassword.bind(this)} />
          </label> <br />
          <label>
            Description:
            <br /><input type="text" onChange={this.handleDescription.bind(this)} />
          </label> <br />
          <label>
            Phonenumber:
            <br /><input type="text" onChange={this.handlePhonenumber.bind(this)} />
          </label> <br />
          <button onClick={this.handleEdit.bind(this)} className='submit'> Submit </button>
          
        </form>
      </div>
    )
  }
}

export default Login;