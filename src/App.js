import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import PaginaPrincipal from './PaginaPrincipal';
import AgregarNuevoRegistro from './AgregarNuevoRegistro';
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component= {PaginaPrincipal}/>
        <Route exact path="/formregistro" component={AgregarNuevoRegistro}/> 
      </Router>
    </div>
  );
}

export default App;
