import React from 'react';
import {
  BtnWrap,
  Column1, Column2,
  Heading, Img, ImgWrap,
  InfoContainer,
  InfoRaw,
  InfoWrapper,
  SubTitle,
  TextWrapper,
  TopLine
} from "./InfoElements";
import {Button} from "../ButtonElements";

const InfoSection = ({
                       lightBg,
                       id,
                       imgStart,
                       topLine,
                       lightText,
                       headLine,
                       darkText,
                       description,
                       buttonLabel,
                       img,
                       alt,
                       primary,
                       dark,
                       dark2,
                       path
                     }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRaw imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                <BtnWrap>
                  <Button to={path} smooth={true} duration={500} spy={true} exact="true" offset={-80}
                          primary={primary ? 1 : 0} dark={dark ? 1 : 0}
                          dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRaw>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
