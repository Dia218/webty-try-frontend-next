'use client';

import { useEffect } from 'react';
import { useRouter } from "next/navigation";

const CallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    // 로그인 완료 후 돌아갈 페이지를 sessionStorage에서 가져옴
    const redirectPath = sessionStorage.getItem('redirectPath') || '/';  // 기본값 '/'으로 설정

    // 로그인 후 원래 페이지로 리디렉션
    router.push(redirectPath);
  }, [router]);

  return <div>로그인 중...</div>;
};

export default CallbackPage;