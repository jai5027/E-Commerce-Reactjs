import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
import Popup from "./components/Popup"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
 

  
  return (
    <>
     <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>This app is using the dark mode</main>
    </ThemeProvider>
     <Popup />
     <Navbar />
     <Outlet />
    </>
  )
}

export default App
