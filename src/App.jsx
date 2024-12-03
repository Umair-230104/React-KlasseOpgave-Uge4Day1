import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom"; // Assuming you're using Outlet for nested routes
import "./App.css";
import theme from "./theme";

// Header Component
const Header = styled.header`
  background-color: ${props => props.theme.darkskyblue};
  color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 40px;
  margin-right: 15px;
`;

const LogoText = styled.h1`
  font-size: 1.8rem;
  color: white;
  margin: 0;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`;

// Content Layout
const Content = styled.div`
  display: flex;
  margin-top: 20px;
  height: calc(100vh - 80px);
  color: #333;
`;

const LeftMenu = styled.div`
  width: 200px;
  background-color: #f4f4f4;
  padding: 20px;
`;

const LeftMenuItem = styled(Link)`
  display: block;
  color: #333;
  text-decoration: none;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fafafa;
  border-left: 2px solid #ccc;
  overflow-y: auto; /* Allows scrolling inside the main content if needed */
`;

const ErrorBanner = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const App = () => {
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [showRenderError, setShowRenderError] = React.useState(false);
  // Use useLocation to listen for route changes
  const location = useLocation();
  const navigate = useNavigate();

  // Reset error message on route change
  useEffect(() => {
    setErrorMessage(null);
    setShowRenderError(false);
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Logo onClick={() => navigate("/")}>
          <LogoImg
            src="https://neh.kea.dk/images/logos/cphbusiness_neg.png"
            alt="Logo"
          />
          {/* <LogoText>Styled App</LogoText> */}
        </Logo>
        <NavMenu>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </NavMenu>
      </Header>

      <Content>
        <LeftMenu>
          <LeftMenuItem to="/error">Error handling</LeftMenuItem>
          <LeftMenuItem to="/images">Images</LeftMenuItem>
          <LeftMenuItem to="/stories">Stories</LeftMenuItem>
        </LeftMenu>
        <MainContent>
          {errorMessage && <ErrorBanner>{errorMessage}</ErrorBanner>}
          <Outlet context={{ setErrorMessage: setErrorMessage }} />
        </MainContent>
      </Content>
    </ThemeProvider>
  );
};

export default App;
