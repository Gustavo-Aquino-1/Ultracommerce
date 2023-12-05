import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './page/Login';
import NotFoundPage from './page/NotFoundPage';
import Products from './page/Products';
import ProductDetails from './page/ProductDetails';
import Header from './components/Header';
import Cart from './page/Cart'
import Sales from './page/Sales';
import AvaliateSales from './page/AvaliateSales';
import CreateAccount from './page/CreateAccount';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Redirect from="/login" to="/" />
        <Route exact path="/sales" component={Sales} />
        <Route exact path="/sale/:id" component={AvaliateSales} />
        <Route exact path="/create/account" component={CreateAccount} />
        <Route path="/notfound" component={NotFoundPage} />
        <Redirect from="*" to="/notfound" />
      </Switch>
    </>
  );
}

export default App;
