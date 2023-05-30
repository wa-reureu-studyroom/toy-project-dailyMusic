import {useState} from 'react';
import { useNavigate } from 'react-router';
import './LoginPage.css';
import GoogleBtn from '../assets/ButtonGoogle.png';
import FacebookBtn from '../assets/ButtonFacebook.png';
import KakaoBtn from '../assets/ButtonKakao.png';
import NaverBtn from '../assets/ButtonNaver.png';
import SignUpLoding from '../assets/SingupLoding.png';


const LoginPage = () => {

    const [isLoginInfo, setIsLoginInfo] = useState({
        id : '',
        pw : '',
    })

    const [isIDPlaceholder, setIsIDPlaceholder] = useState(true);
    const [isPwPlaceholder, setIsPwPlaceholder] = useState(true);
    const navigate = useNavigate();
    
    const REST_API_KEY = '백엔드한테 달라하자1';
    const REDIRECT_URI = '백엔드한테 달라하자2';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const changeIDValue = (e) => {
        setIsLoginInfo({
            ...isLoginInfo,
            id : e.target.value,
        })
    }

    const changePWValue = (e) => {
        setIsLoginInfo({
            ...isLoginInfo,
            pw : e.target.value,
        })
    }

    const handleOnKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleOnClick();
        }
    }

    const handleOnClick = () => {
        navigate('/');
    }

    const handleKakaoLogin = () => {
        window.location.href = link;
    }

    return (
        <section className='loginPageEntire'>
            <div className='loginLeft'>
                <h1 className='leftLogo'>감성</h1>
            </div>
            <div className='loginRight'>
                <div className='loginPart'>
                    <h1 className='loginTitle'>Login</h1>
                    <div className='loginInputAll'>
                        <input className='loginInput' type='text' placeholder={isIDPlaceholder ? 'ID' : ''} value={isLoginInfo.id} onChange={changeIDValue} onFocus={() => {setIsIDPlaceholder(false)}} onBlur={() => {setIsIDPlaceholder(true)}}></input>
                        <input className='loginInput' type='text' placeholder={isPwPlaceholder ? 'Password' : ''} value={isLoginInfo.pw} onChange={changePWValue} onFocus={() => {setIsPwPlaceholder(false)}} onBlur={() => {setIsPwPlaceholder(true)}}></input>
                        <img className='signupIcon' src={SignUpLoding} alt="signupLoadingIcon" />
                    </div>
                    <span className='loginCnt loginSelect' >OR</span>
                    <ul className='SSOList'>
                        <li className='loginSSO'><img src={GoogleBtn} alt="GoogleButton" /></li>
                        <li className='loginSSO'><img src={FacebookBtn} alt="FacebookButton" /></li>
                        <li className='loginSSO' onClick={handleKakaoLogin}><img src={KakaoBtn} alt="KakaoButton" /></li>
                        <li className='loginSSO'><img src={NaverBtn} alt="NaverButton" /></li>
                    </ul>
                    <p className='loginCnt'>not a member? Be our Member!!</p>
                    <p className='loginCnt'>No Thanks! Start the Geust!</p>
                    <p className='loginCnt loginFooter'>Copyright @ 2023 Gamsung Inc. All rghts reserved.</p>
                </div> 
            </div>
        </section>
    );
};

export default LoginPage;