import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Alert from './components/alert/Alert';
import Header from './components/header/Header';

import PageRender from './customRouter/PageRender'
import PrivateRouter from './customRouter/PrivateRouter'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'

import { useEffect } from 'react'
import { refreshToken } from './redux/actions/authAction'
import StatusModal from './components/StatusModal';

function App() {

  const { auth, status } = useSelector(state => state)
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
          {auth.token && <Header />}
          {status && <StatusModal />}
          <Route exact path="/" component={auth.token ? Home : Login} />
          <Route exact path="/register" component={Register} />

          <PrivateRouter exact path="/:page" component={PageRender} />
          <PrivateRouter exact path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
