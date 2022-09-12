import Navigation from "./components/navigation/navigation.component";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
    </Routes>
  );
}

export default App;
