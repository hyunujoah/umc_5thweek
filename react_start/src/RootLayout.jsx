import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const RootLayout = () => {
  return (
    <Container>
      <Navbar>
        <Logo to="/">YONGCHA</Logo>
        <NavButtons>
          <NavLink to="/login">로그인</NavLink>
          <NavLink to="/signup">회원가입</NavLink>
        </NavButtons>
      </Navbar>
      <Main>
        <Sidebar>
          <SidebarLink to="/">홈</SidebarLink>
          {/* Sidebar에서 로그인, 회원가입 링크 제거 */}
        </Sidebar>
        <Content>
          <Outlet /> {/* 각 페이지가 여기에서 렌더링됩니다 */}
        </Content>
      </Main>
    </Container>
  );
};

export default RootLayout;

// 스타일 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;  /* 전체 화면 너비 사용 */
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #111;
  color: #ff0066;
`;

const Logo = styled(Link)`
  color: #ff0066;
  font-size: 24px;
  text-decoration: none;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  background-color: #ff0066;
  border-radius: 5px;
  &:hover {
    background-color: #ff4081;
  }
`;

const Main = styled.div`
  display: flex;
  flex: 1;
  width: 100%;  /* Main의 너비를 전체로 설정 */
`;

const Sidebar = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #222;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px;
  &:hover {
    color: #ff0066;
  }
`;

const Content = styled.main`
  flex: 1;
  width: 100%;  /* Content의 너비를 전체로 설정 */
  padding: 20px;
  background-color: #111;
  color: white;
`;
