import React from "react";
import styled from "styled-components";
import man from "./images/man.png";
import { vanSizes } from "./Data";
import standardVan from "./images/standardvan.png";

const Sizes = () => {
  return (
    <>
      <Container>
        <VanBox>
          <Prices>Prices</Prices>
          <Description>
            We are the Taxi For Things, offering an on-demand "man with a van"
            service which aims to make it easier to live in Bristol without a
            car. We offer a range of van sizes and a choice of one or two
            helpers. So whatever you're moving, from a single box to a whole
            house, we're here to help.
          </Description>
          {vanSizes.map((vans) => {
            return (
              <Van>
                <VanHeader>{vans.name}</VanHeader>
                <VanImage>
                  <img src={standardVan} alt='standard' />
                </VanImage>
                <VanText>
                  Load dimensions: {vans.dimensions}
                  <br />
                  Load volume: {vans.volume}
                  <br />
                  What fits: {vans.whatFits}
                </VanText>
                <VanCost>
                  <VanIcon>
                    <img src={man} alt='man' />
                  </VanIcon>
                  <VanHour>{vans.priceOne}</VanHour>
                </VanCost>
                <VanCost>
                  <VanIcon>
                    <img src={man} alt='man' />
                    <img src={man} alt='man' />
                  </VanIcon>
                  <VanHour>{vans.priceTwo}</VanHour>
                </VanCost>
                <VanMilage>Mileage: {vans.mileage}</VanMilage>
              </Van>
            );
          })}

          <Description>
            For larger moves we are also able to offer combinations of multiple
            vans and helpers based on the pricing above. Give us a call to
            discuss your requirements.
            <Heading>What's included</Heading>
            <Heading>Help loading/unloading</Heading>
            Our friendly staff will help you load and unload the van from/to
            ground floor. If you need help carrying items upstairs we may charge
            a little extra.
            <Heading> Mileage within Bristol</Heading>
            We don't charge for mileage within Bristol. For journeys out of
            Bristol we charge time and mileage for the round trip.
            <Heading>Travelling with your cargo</Heading>
            Our vans have two passenger seats, so you are welcome to travel with
            your cargo. Don't forget, if you book 2 loaders there will only be
            one seat remaining
            <Heading>Insurance</Heading>
            All our vans and drivers are covered by Hire and Reward, Goods In
            Transit and Public Liability insurance.
          </Description>
        </VanBox>
      </Container>
    </>
  );
};

export default Sizes;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #e0fbfc;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  padding-top: 30px;
`;

const Prices = styled.div`
  font-size: clamp(2.5rem, 10vw, 5rem);
  letter-spacing: 3px;
`;

const Description = styled.div`
  padding: 30px;
  font-size: 15px;
`;

const Heading = styled.div`
  font-size: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
`;

const VanBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
`;
const Van = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 5px;
  background-color: #c2dfe3;
  border-radius: 5%;
  width: 300px;
`;
const VanHeader = styled.div`
  font-size: 30px;
  padding-bottom: 5px;
`;
const VanImage = styled.div``;
const VanText = styled.div`
  min-height: 100px;
  padding-bottom: 20px;
`;
const VanCost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const VanMilage = styled.div``;
const VanIcon = styled.div``;
const VanHour = styled.div``;
