import {
  HeaderContainer,
  HomeContainer,
  LogoImg,
  ContentContainer,
  ListComponent,
  HomeTitle,
  SearchBar,
} from "./styles";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import phonesList from "../services/phonesList.json"

export default function Home() {
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    document.body.style = "background: #1d1d1d;";
  }, []);

  const phoneListHTML = () =>{
    let rawPhoneListHTML = []
    phonesList.table.forEach(item => {
      rawPhoneListHTML.push(
       {   imei: item.imei,
        model: item.modelo,
        gb: item.gb,
        price: item.valor,
        bat: item.bat,
        contact: "912896548",
        HTMLtext: item.modelo + " " + item.cor + " " + item.gb + "gb | " + item.valor}
      )
    });
    return rawPhoneListHTML
  }
  const inputChange = (e) => {
    setInputValue(e.target.value)
  }

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
         <SearchBar value={inputValue} onChange={(e)=>inputChange(e)} placeholder="Procure por um modelo... 🔎"/>
           <div style={{ margin: "10px" }}></div>
          
          {phoneListHTML().filter(item =>
         
            (item.HTMLtext.toLowerCase().includes(inputValue.toLowerCase())) 

          ).map((item, index) => (
            <ListComponent key={index + 1}>
              <Link
                key={index}
                to={`/details/${item.imei}`}
                state={{
                  imei: item.imei,
                  model: item.model,
                  gb: item.gb,
                  price: item.price,
                  bat: item.bat,
                  contact: "912896548",
                }}
              >
                <span key={index - 1}>
                  {item.HTMLtext}
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
