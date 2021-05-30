import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BasketCount from './components/BasketCount';
import Checkout from './pages/Checkout';
import PostPurchase from './pages/PostPurchase';
import Products from './pages/Products';

function App() {
    return (
        <Router>
            <BasketCount></BasketCount>

            <Switch>
                <Route path="/" exact>
                    <Products />
                </Route>

                <Route path="/checkout">
                    <Checkout />
                </Route>

                <Route path="/post-checkout">
                    <PostPurchase />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
