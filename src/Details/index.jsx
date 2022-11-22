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

import { imagesList } from "./imagesList";

export default function Details() {
  const navigate = useNavigate();
  const location = useLocation();
  const imei = location.state ? location.state.imei : "";

  const [count, setCount] = useState(0);
  const image = location.state ? imagesList(imei)[count] : "";

  const message = location.state
    ? `https://api.whatsapp.com/send?phone=351${location.state.contact}&text=Ol%C3%A1%2C%20me%20interessei%20pelo%20${location.state.model}%20${location.state.gb}gb`
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
      console.log("teste");
      navigate("/home");
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

      {location.state ? (
        <DetailsContainer>
          <p>
            {location.state.model} {location.state.gb}gb -{" "}
            {location.state.price}
          </p>
          <BuyButtonContainer>
            <a href={message}>
              <BuyButton>
                <p>Compre Agora!</p>
              </BuyButton>
            </a>
          </BuyButtonContainer>
        </DetailsContainer>
      ) : (
        <></>
      )}
    </ContentContainer>
  );
}
