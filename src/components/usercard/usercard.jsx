import './usercard.css';

export default function UserCard({username, email, handleUserDelete}) {
    return (
        <div className="user-card">
            <div className="btn-div">
                <button 
                className="delete-btn"
                onClick={() => handleUserDelete(email)}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
            
            <div className="avatar">
                <img 
                    src={`https://avatars.dicebear.com/api/human/${username}.svg`} 
                    alt=""
                />
            </div>
            
            <h2>{username}</h2>
            <p>{email}</p>
        </div>
    );
}
