import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Alert from './components/alert/Alert'; 
import Header from './components/alert/Header';

import PageRender from './PageRender'
import Login from './pages/login'
import Home from './pages/home'

import { useEffect } from 'react';
import { refreshToken } from './redux/actions/authAction'

function App() {

  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch])

  return (
    <Router>

      <Alert />

      <input type="checkbox" id="theme" />
      <div className="App">
        <div className='main'>
          {auth.token && <Header/>}
          <Route exact path="/" component={auth.token ? Home : Login}></Route>
          <Route exact path="/:page" component={PageRender}></Route>
          <Route exact path="/:page/:id" component={PageRender}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
