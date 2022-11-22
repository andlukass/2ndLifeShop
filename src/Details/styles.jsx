import styled from "styled-components";

export const ContentContainer = styled.div`
  background-color: #1d1d1d;
  height: auto;
`;

export const PicturesContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 30vw;
  height: auto;
  margin-top: 15px;
  @media (max-width: 500px) {
    margin-top: 0;
    width: 100vw;
    max-width: 100vw;
    height: auto;
  }
`;

export const ButtonsContainer = styled.div`
  width: 90%;
  position: absolute;
  top: 36%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DetailsContainer = styled.div`
  p {
    font-size: 20px;
    text-align: center;
    color: #fff;
    font-weight: bolder;
  }
  a {
    text-decoration: none;
  }
`;

export const BuyButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    display: block;
  }
`;

export const BuyButton = styled.div`
  background-color: #d49f54;
  width: 480px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media (max-width: 500px) {
    width: 70%;
    height: 50px;
    margin: 0 15%;

    p {
      font-size: 20px;
    }
  }
`;

export const FirstPic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  @media (max-width: 500px) {
    border-radius: 0;
  }
`;
