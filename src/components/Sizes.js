import React from "react";
import styled from "styled-components";
import standard from "./images/standardvan.png";
import man from "./images/man.png";

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
          <Van>
            <VanHeader>Standard</VanHeader>
            <VanImage>
              <img src={standard} alt='standard' />
            </VanImage>
            <VanText>
              Load dimensions: 2.4m x 1.4m x 1.4m
              <br />
              Load volume: 5m3
              <br />
              What fits: Two sofas or 25 large boxes
            </VanText>
            <VanCost>
              <VanIcon>
                <img src={man} alt='man' />
              </VanIcon>
              <VanHour>£30/hr</VanHour>
            </VanCost>
            <VanCost>
              <VanIcon>
                <img src={man} alt='man' />
                <img src={man} alt='man' />
              </VanIcon>
              <VanHour>£45/hr</VanHour>
            </VanCost>
            <VanMilage>Mileage: 30p/mile</VanMilage>
          </Van>
          <Van>
            <VanHeader>Standard</VanHeader>
            <VanImage>
              <img src={standard} alt='standard' />
            </VanImage>
            <VanText>
              Load dimensions: 2.4m x 1.4m x 1.4m
              <br />
              Load volume: 5m3
              <br />
              What fits: Two sofas or 25 large boxes
            </VanText>
            <VanCost>
              <VanIcon>
                <img src={man} alt='man' />
              </VanIcon>
              <VanHour>£30/hr</VanHour>
            </VanCost>
            <VanCost>
              <VanIcon>
                <img src={man} alt='man' />
                <img src={man} alt='man' />
              </VanIcon>
              <VanHour>£45/hr</VanHour>
            </VanCost>
            <VanMilage>Mileage: 30p/mile</VanMilage>
          </Van>
          <Van>
            <VanHeader>Standard</VanHeader>
            <VanImage>
              <img src={standard} alt='standard' />
            </VanImage>
            <VanText>
              Load dimensions: 2.4m x 1.4m x 1.4m
              <br />
              Load volume: 5m3
              <br />
              What fits: Two sofas or 25 large boxes
            </VanText>
            <VanCost>
              <VanIcon>
                <img src={man} alt='man' />
              </VanIcon>
              <VanHour>£30/hr</VanHour>
            </VanCost>
            <VanCost>
              <VanIcon>
                <img src={man} alt='man' />
                <img src={man} alt='man' />
              </VanIcon>
              <VanHour>£45/hr</VanHour>
            </VanCost>
            <VanMilage>Mileage: 30p/mile</VanMilage>
          </Van>
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
  background-color: #E0FBFC;
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
`;
const Van = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 5px;
  background-color: #C2DFE3;
  border-radius: 5%;
  width: 300px;
`;
const VanHeader = styled.div`
  font-size: 30px;
  padding-bottom: 5px;
`;
const VanImage = styled.div``;
const VanText = styled.div`
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
