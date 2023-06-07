import {useState} from 'react';
import './Header.css';
import {TbMenu2} from 'react-icons/tb';
import {HiOutlineHome, HiOutlinePlayCircle, HiOutlineUserCircle, 
    HiOutlineChatBubbleLeftRight, HiOutlineSquares2X2, HiOutlineChevronDoubleLeft} from 'react-icons/hi2';
import {DiGithubBadge} from 'react-icons/di';
import {Link} from 'react-router-dom';
import { BrowserRouter , Link} from 'react-router-dom';

const Header = () => {
    const [modal, setModal] = useState(false);
    const [userModal, setuserModal] = useState(false);

    const isClickMenubar = () => {
        setModal(!modal);
    }

    const isClickUser = () => {
        setuserModal(!userModal);
    }

    return(
        <div className="header-container">
            <div className="header-icon" onClick={isClickMenubar}><TbMenu2 className="header-icon" size="30"/></div>
                {modal ? 
                    <div className="header-linkModal">
                        <button className="header-closeMenu" onClick={isClickMenubar}><HiOutlineChevronDoubleLeft className="modalIcon"/></button>
                        <Link to='/'><button onClick={isClickMenubar}><HiOutlineHome className="modalIcon"/></button></Link>
                        <Link to='/musicpage'><button onClick={isClickMenubar}><HiOutlinePlayCircle className="modalIcon"/></button></Link>
                        <Link to='/community'><button onClick={isClickMenubar}><HiOutlineChatBubbleLeftRight className="modalIcon"/></button></Link>
                        <Link to='/mypage'><button onClick={isClickMenubar}><HiOutlineSquares2X2 className="modalIcon"/></button></Link>
                    </div>
                 : null}

            <div className="header-icon"><DiGithubBadge className="logoIcon"/></div>
            <div  onClick={isClickUser}><HiOutlineUserCircle className="header-icon" size="30"/></div>
            {userModal ? 
                <div className="header-userModal">
                    <button>Account</button>
                    <button>Setting</button>
                    <button>Logout</button>
                </div>
             : null}
        </div>
    )
}

export default Header;
