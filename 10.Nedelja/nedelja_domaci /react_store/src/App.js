import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Categories from './components/Categories'
import Category from './components/Category'
import { useEffect, useState } from 'react'
import { getAllProducts } from './service'

const App = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        getAllProducts().then(res => {
            setProducts(res.data)
            console.log(res.data);
        })
    }, [])

    return (
        <>
            <Router >
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/categories">Categories</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home products={products} />
                    </Route>
                    <Route exact path='/categories'>
                        <Categories products={products} />
                    </Route>
                    <Route exact path='/categories/:category'>
                        <Category products={products} />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;
