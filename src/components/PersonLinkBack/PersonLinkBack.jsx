import { useNavigate } from 'react-router';
import iconBack from './img/back.svg'

import styles from './PersonLinkBack.module.css'

const PersonLinkBack = () => {
    const navigate = useNavigate();
    const handleGoBack = e => {
    e.preventDefault();
        navigate(-1)
}

  return (
    <a href='#' onClick={handleGoBack} className={styles.link}>
        <img src={iconBack} alt='Go back' className={styles.link__img} />
        <span>Go back</span>
    </a>
  )
}


export default PersonLinkBack;