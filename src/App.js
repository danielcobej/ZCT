import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ReservationPage from './pages/ReservationPage'
import NavBar from'./components/NavBar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>

      <Route path='/' element={<Dashboard/>}/>        
      <Route path='/reservation' element={<ReservationPage/>}/>
      <Route path='/reservation/:id' element={<ReservationPage editMode={true}/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
