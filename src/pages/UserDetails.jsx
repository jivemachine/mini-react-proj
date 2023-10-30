import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {
    const { userid } = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
            .then(res => res.json())
            .then(data => setDetails(data))
            .catch(event => alert(event.message));
    }, [userid]);

    // one options for null default value
    // if(!details) {
    //     return <h1>Loading...</h1>;
    // }

    return (
        <div className="col-md-6">
            <div className="card shadow rounded">
                <div className="card-body">
                    <h4 className="card-title">{details?.username}</h4>
                    <Link to="/users">Go Back</Link>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;