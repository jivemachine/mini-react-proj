import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {

    const { userid } = useParams();

    return (
        <div className="col-md-6">
            <div className="card shadow rounded">
                <div className="card-body">
                    <h4 className="card-title">Username</h4>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;