import {
  FirstPic,
  PicturesContainer,
  ButtonsContainer,
  ContentContainer,
  DetailsContainer,
  BuyButtonContainer,
  BuyButton,
} from "./styles";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import phonesList from "../services/phonesList.json"
import { imagesList } from "./imagesList";

export default function Details() {
  const location = useLocation();

  const path = location.pathname.toString().substring(0,24)

  const imei = location.state
    ? location.state.imei
    : path.replace(/[^0-9]/g, "");

  const [count, setCount] = useState(0);
  const image = imagesList(imei)[count];

  const message = location.state
    ? `https://api.whatsapp.com/send?phone=351912896548&text=Ol%C3%A1%2C%20me%20interessei%20pelo%20${location.state.model}%20${location.state.gb}gb`
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
        ) : (<>
          {
        phonesList.table.filter((item, idx) => item.imei === imei)
            .map((item, index) => (
              <p key={index}>
                {item.modelo} {item.gb}gb / bateria em {item.bat} - {item.valor}
              </p>
            ))}</>
        )}
        <BuyButtonContainer>
          <a href={message}>
            <BuyButton>
              <p>Compre Agora!!</p>
            </BuyButton>
          </a>
        </BuyButtonContainer>
      </DetailsContainer>
    </ContentContainer>
  );
}
