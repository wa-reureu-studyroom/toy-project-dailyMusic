import React from 'react';
import { KakaoLoginButton } from 'react-kakao-login';

const KakaoLogin = () => {
  const handleLogin = (response) => {
    // 로그인 성공 시 처리 로직을 작성합니다.
    console.log(response);
  };

  const handleFailure = (error) => {
    // 로그인 실패 시 처리 로직을 작성합니다.
    console.error(error);
  };

  return (
    <KakaoLoginButton
      jsKey={process.env.REACT_APP_KAKAO_API_KEY}
      onSuccess={handleLogin}
      onFailure={handleFailure}
    />
  );
};

export default KakaoLogin;