// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
