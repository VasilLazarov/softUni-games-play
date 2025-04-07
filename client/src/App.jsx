import { Route, Routes } from "react-router";
import { useState } from "react";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameCatalog from "./components/game-catalog/GameCatalog";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameEdit from "./components/game-edit/GameEdit";
import "./App.css";

function App() {
    const [email, setEmail] = useState('');

    const userLoginHandler = (email) => {
        setEmail(email);
    }

    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    {/* path='/' is same as index */}
                    {/* <Route index element={<Home />} /> */}
                    <Route path="/" element={<Home />} /> 
                    <Route path="/games" element={<GameCatalog />} />
                    <Route path="/games/create" element={<GameCreate />} />
                    <Route path="/games/:gameId/details" element={<GameDetails />} />
                    <Route path="/games/:gameId/edit" element={<GameEdit />} />
                    <Route path="/login" element={<Login onLogin={userLoginHandler} />} />
                    <Route path="/register" element={<Register />} />
                </Routes>

                
            </main>
        </div>
    );
}

export default App;
