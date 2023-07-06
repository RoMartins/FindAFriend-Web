import { Home } from './pages/Home/Home';
import { Login } from './pages/Login';
import { PetDetails } from './pages/PetDetails';
import { PestList } from './pages/PetsList';
import { RegisterForm } from './pages/RegisterForm';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter as Router, Link } from 'react-router-dom';


export function App() {

  return (
    <>
      <Router>

        <GlobalStyles />
        <PetDetails />
      </Router>
    </>
  );

}
