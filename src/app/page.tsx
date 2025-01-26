"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // 로그인 페이지에 오면 현재 페이지 URL을 sessionStorage에 저장
    sessionStorage.setItem('redirectUri', window.location.href);
  }, []);

  const handleKakaoLogin = () => {
    // 카카오 로그인 URL로 리다이렉트
    window.location.href = 'http://localhost:8080/oauth2/authorization/kakao';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button onClick={handleKakaoLogin}>
        <Image
          src="/kakao_login_medium_wide.png" // 이미지 경로
          alt="카카오 로그인"
          width={300}
          height={45}
        />
      </button>
    </div>
  );
}
