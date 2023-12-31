import { BrowserRouter, Routes, Route } from 'react-router-dom';

// component pages
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetails from './pages/UserDetails';

const App = () => {
    return (
        <BrowserRouter>
            <main className="container mt-5">
                <section className="row justify-content-center">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/users/:userid" element={<UserDetails />} />
                    </Routes>
                </section>
            </main>
        </BrowserRouter>
    );
}

export default App;