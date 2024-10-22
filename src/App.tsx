import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import About from './pages/About/About.tsx';
import Gojo from './pages/DoNotClick/DoNotClick.tsx'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/2031" element={<Gojo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;