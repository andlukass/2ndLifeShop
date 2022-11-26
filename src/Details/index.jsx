import {
  FirstPic,
  PicturesContainer,
  ButtonsContainer,
  ContentContainer,
  DetailsContainer,
  BuyButtonContainer,
  BuyButton,
} from "./styles";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { useList } from "../services/getPhones";
import { imagesList } from "./imagesList";

export default function Details() {
  const navigate = useNavigate();
  const location = useLocation();
  const list = useList();

  const imei = location.state
    ? location.state.imei
    : location.pathname.toString().replace(/[^0-9]/g, "");

  const [count, setCount] = useState(0);
  const image = imagesList(imei)[count];

  const message = location.state
    ? `https://api.whatsapp.com/send?phone=351${list.contact}&text=Ol%C3%A1%2C%20me%20interessei%20pelo%20${location.state.model}%20${location.state.gb}gb`
    : "";

  const nextImage = () => {
    if (count === imagesList(imei).length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const prevImage = () => {
    if (count === 0) {
      setCount(imagesList(imei).length - 1);
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    document.body.style = "background: #1d1d1d;";
    if (location.state === null) {
      list.getList();
    }
    if (list.contact === null) {
      list.getContact("920286831");
    }
  }, []);

  return (
    <ContentContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PicturesContainer>
          <div>
            <FirstPic src={image.url} alt="" />
          </div>
          <ButtonsContainer>
            <FaChevronLeft onClick={prevImage} size={40} color={"black"} />
            <FaChevronRight onClick={nextImage} size={40} color={"black"} />
          </ButtonsContainer>
        </PicturesContainer>
      </div>

      <DetailsContainer>
        {location.state ? (
          <p>
            {location.state.model} {location.state.gb}gb / bateria em{" "}
            {location.state.bat} - {location.state.price}
          </p>
        ) : (
          list.phonesList
            .filter((item, idx) => item.imei === imei)
            .map((item, index) => (
              <p key={index}>
                {item.modelo} {item.gb}gb / bateria em {item.bat} - {item.valor}
              </p>
            ))
        )}
        <BuyButtonContainer>
          <a href={message}>
            <BuyButton>
              <p>Compre Agora!</p>
            </BuyButton>
          </a>
        </BuyButtonContainer>
      </DetailsContainer>
    </ContentContainer>
  );
}
