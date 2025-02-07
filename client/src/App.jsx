import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminPage from "./Admin/Pages/AdminPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/" element={<Navigate to="/admin/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
