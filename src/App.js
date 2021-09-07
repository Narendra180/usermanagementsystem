import React from 'react';
import UserCardList from './components/usercardlist/usercardlist';
import AddUserPage from './components/adduserpage/adduserpage';
import InfoPopup from './components/infopopup/infopopup';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			allusers: [],
			displayAddUserModal: false,
			info: {
				message: "",
				visible: false
			},
			nousermessage: ""
		}
	}

	componentDidMount() {
		this.updateUser();
	}

	updateUser = (resp={message: ""}) => {
        fetch("http://15.207.229.231:8000/machstatz/get_all_users")
        .then(resp => resp.json())
        .then(users => this.setState({
			allusers: users,
			info: {
				message: resp.message,
				visible: resp.message?true:false
			},
			nousermessage: users.length?"":"There are no users stored in the system, please use above button to add a new user"			
		}))
        .catch(error => {
			this.handleCatchBlocks();
			console.log(error);
		});

		if(resp.message) {
			this.handleInfoTimeout();
		}	
    }

	handleUserDelete = async (email) => {
		try {
			const resp = await fetch("http://15.207.229.231:8000/machstatz/delete_existing_user?email=" + email,
			{
				method: "DELETE",
			} 
			);
			
			const sorfresp = await resp.json();
			console.log(sorfresp)
			
			this.updateUser(sorfresp);
		} catch(error) {
			this.handleCatchBlocks();
			console.log(error);
		}
        
    }

	handleUserAdd = async (userToAdd) => {
		try {
			const resp = await fetch("http://15.207.229.231:8000/machstatz/add_new_user",
			{
				method: "POST",
				body: JSON.stringify(userToAdd),
				headers: new Headers({"Content-Type": "application/json"})
			});

			const sorfresp = await resp.json();
			console.log(sorfresp);

			this.updateUser(sorfresp);
		} catch(err) {
			this.handleCatchBlocks();
			console.log(err);
		}
		
	}

	handleAddUserModal = (status) => {
		this.setState({displayAddUserModal: status})
	}

	handleInfoTimeout = () => {
		setTimeout(() => {
			this.setState({
				info: {
					message: "",
					visible: false
				}
			});
		}, 4000);
	}

	handleCatchBlocks = () => {
		this.setState({
			info: {
				message: "Please, check your internet connection and try again",
				visible: true
			}		
		});
		this.handleInfoTimeout();
	}

	render() {
		return (
			<div className="app">
				<h1>User Management System</h1>
				<div className="add-new-user">
					<button 
						className="add-new-user-btn"
						onClick={() => this.handleAddUserModal(true)}
					>
						<h3>AddNewUser</h3>
					</button>
				</div>

				{
					this.state.allusers.length
					?
					<UserCardList 
						handleUserDelete={this.handleUserDelete}
						allusers={this.state.allusers}
					/>
					:
					<div>
						<p 
							style={
								{
									textAlign: 'center',
									padding: '10px'
								}
							}
						>{this.state.nousermessage}</p>
					</div>
				}
				
				
				{this.state.displayAddUserModal
				?
				<AddUserPage
					handleUserAdd={this.handleUserAdd}
					handleAddUserModal={this.handleAddUserModal}
				/>
				: null
				}

				{
					this.state.info.visible
					?
					<InfoPopup 
						message={this.state.info.message}
					/>
					:
					null
				}
			</div>
			
		);
	}
}

export default App;
