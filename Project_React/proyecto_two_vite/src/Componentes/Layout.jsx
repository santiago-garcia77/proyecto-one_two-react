/* se importa Header, Footer y Menu */

import Header from './Header';
import Menu from './Menu';
import Footer from './footer';
import { Children } from 'react';

const Layout = ({ Children }) => {
    return(
        <div className='container'>
            <Header />
            <Menu />
                {Children}
            <Footer />
        </div>
    )
}
export default Layout;