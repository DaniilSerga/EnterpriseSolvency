import {Box} from '@mui/material';
import React, {FC} from 'react';
import styles from './Header.module.scss';
import logo from 'assets/logo.svg';
import {Link} from 'react-router-dom';

const Header: FC = () => {
    return (
        <header className={styles.container}>
            <Box className={styles.logoWrapper}>
                <img src={logo} alt="" />
            </Box>
            <Box className={styles.navbarWrapper}>
                <Link className={styles.navbarItem} to={"/"}>Главная</Link>
                <Link className={styles.navbarItem} to={"/calculation"}>Расчёт</Link>
                <Link className={styles.navbarItem} to={"/reports"}>Отчёт</Link>
            </Box>
        </header>
    );
};

export default Header;
