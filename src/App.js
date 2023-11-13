
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import SignIn from './pages/SignIn';
import Success from './pages/Success';
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
  );
}

export default App;
