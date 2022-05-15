import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Favorite from '@components/Favorite';
import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme } from '@context/ThemeProvider';
import imgRobot from './img/robot.png';
import imgVillain from './img/villain.png';
import imgLightsaber from './img/lightsaber.png';

import styles from './Header.module.css'


const Header = () => {
    const [icon, setIcon] = useState(imgRobot);
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(imgLightsaber); break;
            case THEME_DARK: setIcon(imgVillain); break;
            case THEME_NEITRAL: setIcon(imgRobot); break;
            default: setIcon(imgRobot);
        }
    }, [isTheme])

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt='Star Wars' />
            <ul className={styles.list__container}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/people/?page=1'>People</NavLink></li>
                <li><NavLink to='/search'>Search</NavLink></li>
                <li><NavLink to='/not-found'>Not Found</NavLink></li>
                <li><NavLink to='/fail'>Fail</NavLink></li>
            </ul>
            <Favorite />
        </div>
    )
}



export default Header;