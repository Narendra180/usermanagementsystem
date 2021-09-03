import React from 'react';
import './adduserpage.css';

class AddUserPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({[name]: value});

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleUserAdd(
            {
                email:  this.state.email,
                fist_name: this.state.firstname,
                last_name: this.state.lastname,
                pwd: this.state.password,
                username: this.state.username
            }
        );

        this.setState(
            { 
                firstname: '',
                lastname: '',
                username: '',
                email: '',
                password: ''
            }
        );

        this.props.handleAddUserDisplayStatus(false);
    }

    render() {
        return (
            <div className="form-adduser">
                <div className="modal-content">
                    <div className="form-header">
                        <h2>Add user</h2>
                        <button
                            className="close-modal"
                            onClick={() => this.props.handleAddUserDisplayStatus(false)}
                        >
                            <i className="fas fa-window-close"></i>
                        </button>
                    </div>

                    <form 
                        className="form"
                        onSubmit={this.handleSubmit}
                    >

                        <div className="form-group">
                            <label htmlFor="firstname">First Name:</label>  
                            <input 
                                id="firstname" 
                                name="firstname" 
                                type="text" 
                                value={this.state.firstname} 
                                onChange={this.handleChange}
                                placeholder="Enter your first name"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name:</label>
                            <input 
                                id="lastname" 
                                name="lastname" 
                                type="text" 
                                value={this.state.lastname} 
                                onChange={this.handleChange}
                                placeholder="Enter your last name"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input 
                                id="username" 
                                name="username" 
                                type="text" 
                                value={this.state.username} 
                                onChange={this.handleChange}
                                placeholder="Enter Username"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                value={this.state.email} 
                                onChange={this.handleChange}
                                placeholder="Enter Email"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                value={this.state.password} 
                                onChange={this.handleChange}
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        
                        <div className="submit-cancel-btns">
                            <button type="button" onClick={() => this.props.handleAddUserDisplayStatus(false)}>
                                Cancel
                            </button>

                            <button type="submit" className="add-btn">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddUserPage;