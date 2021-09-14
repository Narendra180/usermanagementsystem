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
			popupinfo: {
				message: "",
				visible: false
			},
			nousermessage: ""
		}
	}

	componentDidMount() {
		let stringOfUsersInLocalStorage = localStorage.getItem("users");
		if(stringOfUsersInLocalStorage) {
			this.setState(
				{allusers: JSON.parse(stringOfUsersInLocalStorage)}
			);
		}
	}

	handleUserDelete = (id) => {
		let filteredUsers = this.state.allusers.filter((user) => {
			return user.id !== id;
		});
        
		this.setState(() => {
			return {
				allusers: filteredUsers,
				popupinfo: {
					message: "user deleted successfully",
					visible: true
				}
			}
		}, () => {
			this.saveStateTolocalStorage();
		});

		this.handleInfoTimeout();
    }

	handleUserAdd = (userToAdd) => {
		let users = this.state.allusers;
		let existingUserIndex = users.findIndex((user) => {
			return (user.username === userToAdd.username) || (user.email === userToAdd.email)
		});
		
		if(existingUserIndex < 0) {
			users.push(userToAdd);
			this.setState(
				() => {
					return {
						allusers: users,
						popupinfo: {
							message: "user added successfully",
							visible: true
						}
					}
				},
				() => this.saveStateTolocalStorage()
			);
		} else {
			this.setState({
				popupinfo: {
					message: "username or email already exists",
					visible: true
				}
			});
		}
		
		this.handleInfoTimeout();
		this.saveStateTolocalStorage();
	}

	handleAddUserModal = (status) => {
		this.setState({displayAddUserModal: status})
	}

	handleInfoTimeout = () => {
		setTimeout(() => {
			this.setState({
				popupinfo: {
					message: "",
					visible: false
				}
			});
		}, 4000);
	}

	saveStateTolocalStorage = () => {
		let dataToStore = JSON.stringify(this.state.allusers);
		localStorage.setItem("users",dataToStore);
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
						>No users available, add new users by using above button</p>
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
					this.state.popupinfo.visible
					?
					<InfoPopup 
						message={this.state.popupinfo.message}
					/>
					:
					null
				}
			</div>
			
		);
	}
}

export default App;
