import { BrowserRouter as Router } from 'react-router-dom';
import MainNavBar from './main/MainNavBar';

function App() {
  return (
    <div className="App">
     
        <Router>
            <MainNavBar/>
        </Router>

    </div>
  );
}

export default App;