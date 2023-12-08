import React from 'react';
import { Button } from '../ButtonElement';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
} from './InfoElements';
import Banner2 from '../../images/Banner 2.jpg';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
  } from './HeroElements';

const InfoSection = ({ lightBg,
    imgStart,
    id,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    description2 = "",
    buttonLabel,
    img,
    alt,
    primary,
    dark,
}) => {
    return (
        <>
            <HeroContainer id="about">
                <HeroBg>
                    <VideoBg
                        id="heroVideo"
                        src={Banner2}
                    />
                </HeroBg>
                {/* <HeroContent>
        <HeroH1>Indigenous Iron Construction</HeroH1>
        <HeroP>
          Bridging Cultures, Strengthening Communities and Providing Quality
          Contracting Services.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggleBottom}
          >
            Get A Free Consultation {hover ? <ArrowRight /> : <ArrowForward />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent> */}
            </HeroContainer>
        </>
    )
}

export default InfoSection
