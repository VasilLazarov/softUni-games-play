import { Route, Routes } from "react-router";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameCatalog from "./components/game-catalog/GameCatalog";
import GameCreate from "./components/game-create/GameCreate";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import "./App.css";

function App() {
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
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>

                
            </main>
        </div>
    );
}

export default App;
