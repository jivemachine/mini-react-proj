import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(event => alert(event.message));
    }, []);

    return (
        <div className="col-md-6">
            <ul className="list-group">
                {users.map(user => ((
                    <li key={`user-${user.id}`} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{user.username}</span>
                        <Link to={`/users/${user.id}`} className="btn btn-outline-primary">
                            Full Details
                        </Link>
                    </li>
                )))}
            </ul>

        </div>
    );
}

export default Users;