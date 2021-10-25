import React, {useEffect, useState} from 'react';
import './Home.scss'
import UsersService from "../API/usersService";
import {useDispatch, useSelector} from "react-redux";
import {setUserLogin} from "../redux/reducers/loginReducer";

const Home = (props) => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.user.login);
    const [isDisabled, setIsDisabled] = useState(true);
    const [password, setPassword] = useState('');

    useEffect(() => {
        checkUserData();
    }, [userLogin, password])

    const auth = async e => {
        e.preventDefault();

        const user = await UsersService.getUser(userLogin, password);
        if (!user) return;

        props.history.push('/profile')
    }

    const checkUserData = () => {
        if (userLogin === 'developer21' && password === '123456') {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
     }

    const setLogin = login => {
        dispatch(setUserLogin(login));
    }

    return (
        <div className="home">
            <form className="form">
                <h2 className="form__title">Sign in</h2>
                <div className="input-group form__input-group">
                    <input
                        className="input form__input"
                        id="loginInput"
                        type="text"
                        value={userLogin}
                        onChange={e => setLogin(e.target.value)}
                        placeholder="login"
                    />
                    <label htmlFor="loginInput" className="label">Username</label>
                </div>
                <div className="input-group form__input-group">
                    <input
                        className="input form__input"
                        id="passwordInput"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="password"
                    />
                    <label htmlFor="passwordInput" className="label">Password</label>
                </div>
                <button className="button form__button" disabled={isDisabled} type="submit" onClick={auth}>Log in</button>
            </form>
        </div>
    );
};

export default Home;