import { Route, Routes } from "react-router";
// import { useState } from "react";

import UserProvider from "./providers/userProvider";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameCatalog from "./components/game-catalog/GameCatalog";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails";
import GameEdit from "./components/game-edit/GameEdit";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import AuthGuard from "./components/guards/AuthGuard";
import "./App.css";

function App() {
    
    return (
        <UserProvider>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        {/* path='/' is same as index */}
                        {/* <Route index element={<Home />} /> */}
                        <Route path="/" element={<Home />} />
                        <Route path="/games" element={<GameCatalog />} />
                        <Route path="/games/:gameId/details"element={<GameDetails />} />
                        {/* <Route path="/games/create" element={<AuthGuard><GameCreate /></AuthGuard>} />    It's not practic to use AuthGuard like this*/}
                        <Route element={<AuthGuard />}>
                            <Route path="/games/create" element={<GameCreate />} />
                            <Route path="/games/:gameId/edit" element={<GameEdit />} />
                            <Route path="/logout" element={<Logout />} />
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
            </div>
        </UserProvider>
    );
}

export default App;
