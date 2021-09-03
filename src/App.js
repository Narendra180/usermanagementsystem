import React from 'react';
import UserCardList from './components/usercardlist/usercardlist';
import AddUserPage from './components/adduserpage/adduserpage';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			allusers: [],
			displayAddUser: false
		}
	}

	componentDidMount() {
		this.updateUser();
	}

	updateUser = () => {
        fetch("http://15.207.229.231:8000/machstatz/get_all_users")
        .then(resp => resp.json())
        .then(users => this.setState({allusers: users}))
        .catch(error => console.log(error));
    }

	handleUserDelete = async (email) => {
        const resp = await fetch("http://15.207.229.231:8000/machstatz/delete_existing_user?email=" + email,
        {
            method: "DELETE",
        } 
        );
        
        const data = await resp.json();
        console.log(data)
        
        this.updateUser();
    }

	handleUserAdd = async (userToAdd) => {

		const resp = await fetch("http://15.207.229.231:8000/machstatz/add_new_user",
		{
			method: "POST",
			body: JSON.stringify(userToAdd),
			headers: new Headers({"Content-Type": "application/json"})
		});

        const data = await resp.json();
		console.log(data);

		this.updateUser();
	}

	handleAddUserDisplay = (status) => {
		this.setState({displayAddUser: status})
	}

	render() {
		return (
			<div>
				<h1>User Management System</h1>
				<div className="add-new-user">
					<button 
						className="add-new-user-btn"
						onClick={() => this.handleAddUserDisplay(true)}
					>
						<h3>AddNewUser</h3>
					</button>
				</div>
				<UserCardList 
					handleUserDelete={this.handleUserDelete}
					allusers={this.state.allusers}
				/>
				
				{this.state.displayAddUser
				?
				<AddUserPage
					handleUserAdd={this.handleUserAdd}
					handleAddUserDisplayStatus={this.handleAddUserDisplay}
				/>
				: null
				}
			</div>
			
		);
	}
}

export default App;
