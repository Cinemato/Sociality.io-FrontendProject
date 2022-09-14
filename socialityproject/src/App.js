import { Routes, Route } from 'react-router-dom';
import Layout from './routes/layout/layout.component';
import PostsPage from './components/posts-page/posts-page.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
