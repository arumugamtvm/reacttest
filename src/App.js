import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactComponent from './reactComponent'
import TestComponent from './testComponent'
import WelcomeComponent from './welcomeComponent'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ReactComponent />} />
        <Route path='/test' element={<TestComponent />} />
        <Route path='/welcome/:name' element={<WelcomeComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
