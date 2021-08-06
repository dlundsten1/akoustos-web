import React from "react";
import * as styles from "./styles/layout.module.css";
import "./global.css";
import { Header, Footer } from ".";
var classNames = require('classnames/bind');
var cx = classNames.bind(styles); 

const layout = ({ children }) => {

  console.log(window.location.pathname === '/');
  return (
    <>
      <Header/>
      <div className={cx('root',{
        'black': window.location.pathname === '/'
      })}>
        <div className={styles.container}>{children}</div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default layout;

// import React from 'react'
// import { Container } from 'reactstrap'
// import { useLocation } from 'react-router-dom'
// import { isEqual } from 'lodash'
// import styles from './Layout.module.css'

// function Layout({ children }) {
//   const { pathname } = useLocation()
//   return (
//     <>
//       <Container className={!pathname.includes('login') && !isEqual(pathname, '/') ? styles.container : styles.login}>
//         {children}
//       </Container>
//     </>
//   )
// }

// export default Layout
