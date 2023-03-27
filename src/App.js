import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Destination from "./components/destination";
import Crew from "./components/crew";
import Technology from "./components/technology";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>

                    <Route index element={<Home/>}></Route>
                    <Route path="destination" element={<Destination/>}/>
                    <Route path="crew" element={<Crew/>}/>
                    <Route path="Technology" element={<Technology/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
