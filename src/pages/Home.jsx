import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="col-md-6">
            <h1 className="text-center">Welcome to my Users Admin Panel</h1>
            <div className="d-flex justify-content-center">
                <Link to="/users" className="btn btn-primary">
                    Go
                </Link>
            </div>
        </div>
    );
}

export default Home;