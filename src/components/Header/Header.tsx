import React, {FC} from 'react';
import Search from '../Search/Search';


type HeaderProps = {
  
};

const Header: FC<HeaderProps> = () => {
    
    return(  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Giphy Representation</a>
                <div className="d-flex">
                    <Search/>
                </div>
            </div>
        </nav>
    )
};

export default Header;