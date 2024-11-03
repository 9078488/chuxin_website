import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import LayOut from './pages/LayOut';
import Maintaninence from './pages/Maintainence';


function App() {
  return (
    <>
      <CssBaseline />
      <Maintaninence />
    </>
  )
}

export default App
