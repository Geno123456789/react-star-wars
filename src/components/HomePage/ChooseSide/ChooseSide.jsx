import PropTypes from 'prop-types';
import cn from 'classnames';
import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme } from '@context/ThemeProvider';
import imgLightSide from './img/light-side.jpeg';
import imgDarkSide from './img/dark-side.png';
import imgNeitralSide from './img/neitral-side.jpg';

import styles from './ChooseSide.module.css';

const ChooseSideItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();
  return (
    <div className={cn(styles.item, classes)} onClick={() => isTheme.change(theme)}>
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  )
}


ChooseSideItem.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  classes: PropTypes.string,
}

const ChooseSide = () => {
  return (
    <>
    <div className={styles.container}>
    <ChooseSideItem theme={THEME_LIGHT} text='Light Side' img={imgLightSide} classes={styles.item__light} />
      <ChooseSideItem theme={THEME_DARK} text='Dark Side' img={imgDarkSide} classes={styles.item__dark} />
      <ChooseSideItem theme={THEME_NEITRAL} text='Neitral Side' img={imgNeitralSide} classes={styles.item__neitral} />
    </div>
     
    </>
  )
}


export default ChooseSide;