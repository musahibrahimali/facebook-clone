import React, { useState } from 'react';
import { faceBookLogo } from '../../Assets/AssetExport';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCirceIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../../Provider/stateProvider';
import './Header.css';

function Header() {
    // eslint-disable-next-line no-unused-vars
    const [{ user }, dispatch] = useStateValue();
    const [optionOne, setOptionOne] = useState(true);
    const [optionTwo, setOptionTwo] = useState(false);
    const [optionThree, setOptionThree] = useState(false);
    const [optionFour, setOptionFour] = useState(false);
    const [optionFive, setOptionFive] = useState(false);

    const handleOptionOneClick = (event) => {
        event.preventDefault();
        setOptionOne(true);
        setOptionTwo(false);
        setOptionThree(false);
        setOptionFour(false);
        setOptionFive(false);
    }
    const handleOptionTwoClick = (event) => {
        event.preventDefault();
        setOptionOne(false);
        setOptionTwo(true);
        setOptionThree(false);
        setOptionFour(false);
        setOptionFive(false);
    }
    const handleOptionThreeClick = (event) => {
        event.preventDefault();
        setOptionOne(false);
        setOptionTwo(false);
        setOptionThree(true);
        setOptionFour(false);
        setOptionFive(false);
    }
    const handleOptionFourClick = (event) => {
        event.preventDefault();
        setOptionOne(false);
        setOptionTwo(false);
        setOptionThree(false);
        setOptionFour(true);
        setOptionFive(false);
    }
    const handleOptionFiveClick = (event) => {
        event.preventDefault();
        setOptionOne(false);
        setOptionTwo(false);
        setOptionThree(false);
        setOptionFour(false);
        setOptionFive(true);
    }

    return (
        <div className="header">
            <div className="header__left">
                <img
                    src={faceBookLogo}
                    alt=""
                />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>
            <div className="header__center">
                <div
                    className={optionOne ? "header__option header__option--active" : "header__option"}
                    onClick={handleOptionOneClick}
                >
                    <HomeIcon fontSize="large" />
                </div>
                <div
                    className={optionTwo ? "header__option header__option--active" : "header__option"}
                    onClick={handleOptionTwoClick}
                >
                    <FlagIcon fontSize="large" />
                </div>
                <div
                    className={optionThree ? "header__option header__option--active" : "header__option"}
                    onClick={handleOptionThreeClick}
                >
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div
                    className={optionFour ? "header__option header__option--active" : "header__option"}
                    onClick={handleOptionFourClick}
                >
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div
                    className={optionFive ? "header__option header__option--active" : "header__option"}
                    onClick={handleOptionFiveClick}
                >
                    <SupervisedUserCirceIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user?.photoURL} />
                    <h4>{user?.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default Header;
