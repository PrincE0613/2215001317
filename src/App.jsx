import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import TopUsersPage from "./pages/TopUsersPage";
import TrendingPostsPage from "./pages/TrendingPostsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/top-users" element={<TopUsersPage />} />
        <Route path="/trending-posts" element={<TrendingPostsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
