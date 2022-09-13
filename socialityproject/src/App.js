import { Routes, Route } from 'react-router-dom';
import Layout from './routes/layout/layout.component';
import StatusRow from './components/status-row/status-row.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StatusRow />} />
      </Route>
    </Routes>
  );
}

export default App;
