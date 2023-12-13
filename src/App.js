import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/About';
import Layout from './ui/Layout';

function App() {
  return (
    <BrowserRouter>
        <div class="container-fluid mx-auto">
            <Layout />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tentang-kami' element={<AboutUs />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
