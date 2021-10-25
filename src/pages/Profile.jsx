import React from 'react';
import './Profile.scss'
import {useSelector} from "react-redux";

const Profile = () => {
    const userLogin = useSelector(state => state.user.login);

    return (
        <div className="profile">
            <h1 className="profile__title">Hello, {userLogin}</h1>
        </div>
    );
};

export default Profile;