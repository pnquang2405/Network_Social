import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authAction'


const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const {auth} = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(auth.token) history.push('/')
    }, [auth.token, history])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }
    return (
        <div className='auth_page'>
            <form onSubmit={handleSubmit}>
                <h3 className='text-uppercase text-center mb-4'>Network Social</h3>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={handleChangeInput}
                        value={email}
                        name="email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={handleChangeInput}
                        value={password}
                        name="password"
                    />
                </div>

                <button style={{ display: 'flex', margin: 'auto' }}
                    type="submit" className="btn btn-primary"
                    disabled={email && password ? false : true}>
                    Login
                </button>
                <p className='my-2'>
                    You don't have an account? <Link to='/register' style={{ color: 'red' }}>Register now</Link>
                </p>
            </form>
        </div>
    )
}

export default Login