import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Gallery from "./scenes/gallery";
import ChildCare from "./scenes/childCarePage";
import Cooking from "./scenes/cookingPage";
import Cleaning from "./scenes/cleaningPage";
import Dog from "./scenes/dogWalking";
import Handjobs from "./scenes/handjobPage";
import Yard from "./scenes/yardWorkPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import './index.css';


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [show, setShow] = useState(true)
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:9000/jobs");
      const jsonData = await response.json();
      console.log(data);
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/childCarePage" element={<ChildCare />} />
              <Route path="/cleaningPage" element={<Cleaning />} />
              <Route path="/cookingPage" element={<Cooking />} />
              <Route path="/dogWalking" element={<Dog />} />
              <Route path="/handjobPage" element={<Handjobs />} />
              <Route path="/yardWorkPage" element={<Yard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;