import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './RootLayout';  // 루트 레이아웃
import LoginPage from './LoginPage';  // 로그인 페이지
import SignupPage from './SignupPage';  // 회원가입 페이지
import HomePage from './HomePage';  // 홈 페이지 (예: 메인 화면)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
