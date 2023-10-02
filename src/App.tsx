import { Routes, Route } from 'react-router-dom';
import { Home, Search } from './pages';
import { Navbar } from './components';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
