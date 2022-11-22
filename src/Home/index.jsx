import {
  HeaderContainer,
  HomeContainer,
  LogoImg,
  ContentContainer,
  ListComponent,
  HomeTitle,
} from "./styles";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import useLocalStorage from "../hooks/useLocalStorage";

import { useList } from "../services/getPhones";

import logo from "../assets/logo.png";

export default function Home() {
  const location = useLocation();
  const list = useList();
  const path = location.pathname.toString().replace(/[^0-9]/g, "");

  const [userContact, setUserContact] = useLocalStorage("userContact", null);

  const contact = () => {
    if (path.length < 5 && userContact === null) {
      setUserContact("912896548");
    } else if (path.length > 5) {
      setUserContact(location.pathname.toString().replace(/[^0-9]/g, ""));
    }
  };

  useEffect(() => {
    document.body.style = "background: #1d1d1d;";
    list.getList();
    contact();
  }, []);

  return (
    <ContentContainer>
      <HeaderContainer>
        <p>ESPECIALISTA EM TECNOLOGIA USADA</p>
        <LogoImg src={logo} alt="" />
      </HeaderContainer>

      <HomeContainer>
        <div style={{ textAlign: "center" }}>
          <div style={{ margin: "20px" }}></div>
          <HomeTitle>
            <p>STOCK LOJA LISBOA</p>
          </HomeTitle>
          <div style={{ margin: "10px" }}></div>
          {list.phonesList.map((item, index) => (
            <ListComponent key={index + 1}>
              <Link
                key={index}
                to={`/details/${item.imei}`}
                state={{
                  imei: item.imei,
                  model: item.modelo,
                  gb: item.gb,
                  price: item.valor,
                  contact: userContact,
                }}
              >
                <span key={index - 1}>
                  {item.modelo} {item.cor} {item.gb}gb | {item.valor}
                </span>
                <br />
              </Link>
            </ListComponent>
          ))}
        </div>
      </HomeContainer>
    </ContentContainer>
  );
}
