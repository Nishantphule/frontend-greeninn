import { useState } from 'react';
import './App.css';
import { AppBar, Button, Paper, Toolbar, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Navigate, Route, Routes } from 'react-router-dom';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NotFound from './components/NotFound';
import { useNavigate } from 'react-router-dom';
import Liquids from './menuComponents/Liquids';
import BreakfastMisal from './menuComponents/BreakfastMisal'
import SouthIndian from './menuComponents/SouthIndian'
import SnacksPapad from './menuComponents/SnacksPapad'
import Upawas from './menuComponents/Upawas'
import Chaat from './menuComponents/Chaat'
import PizzaPastaSandwiches from './menuComponents/PizzaPastaSandwiches'
import Chinese from './menuComponents/Chinese'
import ContinentalTandoor from './menuComponents/ContinentalTandoor'
import MainCourse from './menuComponents/MainCourse'
import Biryani from './menuComponents/Biryani'
import Breads from './menuComponents/Breads'
import RiceDal from './menuComponents/RicaDal'
import Deserts from './menuComponents/Deserts'
import PavBhajiCholePulao from './menuComponents/PavBhajiCholePulao';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


function App() {

  const [mode, setMode] = useState("light")

  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigate = useNavigate()

  const menu = [
    { name: "Beverages & Drinks", link: "liquids" },
    { name: "Breakfast & Misal", link: "breakfast&misal" },
    { name: 'South Indian', link: "southIndian" },
    { name: 'Pav Bhaji,Chole & Pulao', link: "pavBhaji&chole&pulao" },
    { name: 'Snacks & Papad', link: "snacks&papad" },
    { name: 'Upawas', link: "upawas" },
    { name: 'Chaat', link: "chaat" },
    { name: 'Pizza,Pasta & Sandwiches', link: "pizzaPasta&sandwiches" },
    { name: "Chinese", link: "chinese" },
    { name: 'Continental & tandoor', link: "continental&tandoor" },
    { name: "Main Course", link: "mainCourse" },
    { name: 'Biryani', link: "biryani" },
    { name: "Breads", link: "breads" },
    { name: "Rice & Dal", link: "rice&dal" },
    { name: "Deserts", link: "deserts" }
  ]

  return (
    <div className='App'>

      <ThemeProvider theme={Theme}>
        <Paper elevation={4} style={{ minHeight: "100vh", borderRadius: "0px" }}>

          <AppBar position="static" color='success'>

            <Toolbar >
              <LocalDiningIcon sx={{ mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                GREEN INN
              </Typography>
              <Button sx={{ marginLeft: 'auto' }} variant="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />} {mode === "light" ? "dark" : "light"} MODE
              </Button>
            </Toolbar>
            <hr />
            <div>
              <h5>
                <KeyboardDoubleArrowLeftIcon />
                Swipe
                <KeyboardDoubleArrowRightIcon /></h5>
            </div>

            <Toolbar>
              <div className="overflow-auto">
                <div id="filterSearch">
                  {menu.map(({ name, link }, i) => {
                    return <Button onClick={() => navigate(`/${link}`)} key={i} color='inherit' variant='outlined'>{name}</Button>
                  })}
                </div>
              </div>
            </Toolbar>

          </AppBar>

          <Routes>
            <Route path="/liquids" element={<Liquids />} />
            <Route path="/breakfast&misal" element={<BreakfastMisal />} />
            <Route path="/southIndian" element={<SouthIndian />} />
            <Route path='/pavBhaji&chole&pulao' element={<PavBhajiCholePulao />} />
            <Route path="/snacks&papad" element={<SnacksPapad />} />
            <Route path="/upawas" element={<Upawas />} />
            <Route path="/chaat" element={<Chaat />} />
            <Route path="/pizzaPasta&sandwiches" element={<PizzaPastaSandwiches />} />
            <Route path="/chinese" element={<Chinese />} />
            <Route path="/continental&tandoor" element={<ContinentalTandoor />} />
            <Route path="/mainCourse" element={<MainCourse />} />
            <Route path="/biryani" element={<Biryani />} />
            <Route path="/breads" element={<Breads />} />
            <Route path="/rice&dal" element={<RiceDal />} />
            <Route path="/deserts" element={<Deserts />} />
            <Route path="/" element={<Liquids />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>

        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
