import styled from "styled-components";

export const ContentContainer = styled.div`
  position: relative;
  background-color: #fff;
`;

export const HeaderContainer = styled.div`
  position: fixed;
  width: 91vw;
  height: 5vh;
  background-color: #fff;
  margin: -12vh 0;
  padding: 2% 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 26px;
    font-weight: bolder;
  }
  @media (max-width: 500px) {
    height: 10vh;
    justify-content: center;
    p {
      display: none;
    }
  }
`;

export const HomeContainer = styled.div`
  margin-top: 12vh;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  background-color: #1d1d1d;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const HomeTitle = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  background-color: #d49f54;
  height: 50px;
  justify-content: center;
  align-items: center;
  p {
    font-size: 35px;
    color: #fff;
    font-weight: bolder;
  }
  @media (max-width: 500px) {
    width: 70%;
    height: 6%;
    margin: 0 15%;

    p {
      font-size: 28px;
    }
  }
`;

export const ListComponent = styled.div`
  padding: 20px;
  a {
    font-size: 25px;
    color: #fff;
    text-decoration: none;
  }
  @media (max-width: 500px) {
    padding: 8px;
    a {
      font-size: 17px;
    }
  }
`;

export const LogoImg = styled.img`
  width: 25vh;
`;

export const SearchBar = styled.input`
margin-top: 20px;
text-align: center;
  width: 30vw;
  height: 7vh;
  @media (max-width: 500px) {
    height: 5vh;
    width: 70vw;
    }
`;

