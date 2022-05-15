import { Routes, NavLink, Route } from 'react-router-dom';
import './App.module.css';
import styles from './App.module.css'
import routesConfig from '@routes/routesConfig';
import Header from '@components/Header';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  )
}

export default App;


