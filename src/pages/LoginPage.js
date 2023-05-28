import {useState} from 'react';
import './LoginPage.css';
import GoogleBtn from '../assets/ButtonGoogle.png';
import FacebookBtn from '../assets/ButtonFacebook.png';
import KakaoBtn from '../assets/ButtonKakao.png';
import NaverBtn from '../assets/ButtonNaver.png';


const LoginPage = () => {

    const [isLoginInfo, setIsLoginInfo] = useState({
        id : '',
        pw : '',
    })

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
    return (
        <section className='loginPageEntire'>
            <div className='loginLeft'>
                <h1 className='leftLogo'>감성</h1>
            </div>
            <div className='loginRight'>
                <div className='loginPart'>
                    <h1 className='loginTitle'>Login</h1>
                    <div className='loginInputAll'>
                        <input className='loginInput' type='text' placeholder='ID' value={isLoginInfo.id} onChange={changeIDValue}></input>
                        <input className='loginInput' type='text' placeholder='Password' value={isLoginInfo.pw} onChange={changePWValue}></input>
                    </div>
                    <span className='loginCnt loginSelect'>OR</span>
                    <ul className='SSOList'>
                        <li className='loginSSO'><img src={GoogleBtn} alt="GoogleButton" /></li>
                        <li className='loginSSO'><img src={FacebookBtn} alt="FacebookButton" /></li>
                        <li className='loginSSO'><img src={KakaoBtn} alt="KakaoButton" /></li>
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