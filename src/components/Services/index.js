import React from 'react';
import Icon1 from '../../images/hydrovactruck.png';
import Icon2 from '../../images/marineassetretrieval.png';
import Icon3 from '../../images/pipelineservices.jpeg';
import Icon4 from '../../images/firstaid.jpeg';
import Icon5 from '../../images/streetsweeper.png';
import Icon6 from '../../images/environmentaltruck.png';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="products">
            <ServicesH1>Our Products</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>BananaChips</ServicesH2>
                    <ServicesP>Delicious Banana Chips.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>BananaChips</ServicesH2>
                    <ServicesP>Delicious Banana Chips.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>BananaChips</ServicesH2>
                    <ServicesP>Delicious Banana Chips.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>BananaChips</ServicesH2>
                    <ServicesP>Delicious Banana Chips.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>BananaChips</ServicesH2>
                    <ServicesP>Delicious Banana Chips.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>BananaChips</ServicesH2>
                    <ServicesP>Delicious Banana Chips.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
