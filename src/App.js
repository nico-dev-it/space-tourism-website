import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./routes/layout";
import Home from "./routes/home/home";
import Destination from "./routes/destination/destination";
import Crew from "./routes/crew/crew";
import Technology from "./routes/technology/technology";

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
