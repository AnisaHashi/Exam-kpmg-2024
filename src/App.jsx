import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InfoDashboard } from "./pages/InfoDashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext";
import { LoginPage } from "./pages/admin/LoginPage";
import { DailyAgenda } from "./pages/admin/DailyAgenda";
import { PhotoStream } from "./pages/admin/PhotoStream";
import { CafeteriaFood } from "./pages/admin/CafeteriaFood";
import { DeadLines } from "./pages/admin/DeadLines";
import { Birthdays } from "./pages/admin/Birthdays";
import { AdminDashboard } from "./pages/Admin";
/* import "bootstrap/dist/css/bootstrap.min.css"; */

function App() {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/daily-agenda" element={<DailyAgenda />} />
            <Route path="/photo-stream" element={<PhotoStream />} />
            <Route path="/cafeteria-food" element={<CafeteriaFood />} />
            <Route path="/deadlines" element={<DeadLines />} />
            <Route path="/birthdays" element={<Birthdays />} />
            <Route exact path="/" element={<InfoDashboard />} />
          
            <Route path="" element={""} />
          </Routes>
        </Router>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
