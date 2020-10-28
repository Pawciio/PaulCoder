import React from 'react';
import styled from 'styled-components';

import Paragraph from 'components/atoms/paragraph/paragraph';
import ImageIcons from 'components/atoms/imageIcons/imageIcons';
import H1 from 'components/atoms/heading/headingHight';

import Templates from 'assets/ServiceIcon/Templates.png';
import Designe from 'assets/ServiceIcon/Designe.png';
import Consultation from 'assets/ServiceIcon/Consultation.png';
import Support from 'assets/ServiceIcon/Support.png';
import Technologies from 'assets/ServiceIcon/Technologies.png';

const StyledWrapper = styled.section`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 540px) {
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 15px;
    }
    .imageIconService {
      width: 60px;
      height: 60px;
    }
  }
`;

const GroupWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 210px;
  margin: 15px;
  text-align: center;
`;

const ServiceIcon = () => {
  const service = [
    {
      image: Templates,
      title: 'Templates',
      discription: 'Designed templates to choose from',
    },
    {
      image: Designe,
      title: 'Designe',
      discription: 'Original designer projects for most demanding clients',
    },
    {
      image: Consultation,
      title: 'Consultation',
      discription: 'Consultation with the client through whole production phase',
    },
    {
      image: Support,
      title: 'Support',
      discription: 'Full support in maintaining the website',
    },
    {
      image: Technologies,
      title: 'Technologies',
      discription: 'Using modern technologies to develop responsive sites',
    },
  ];

  return (
    <StyledWrapper id="Service">
      <H1 secondary line>
        Our Service
      </H1>
      <GroupWrapper>
        {service.map((item) => (
          <ItemWrapper>
            <ImageIcons className="imageIconService" icons={item.image} />
            <Paragraph secondary bold>
              {item.title}
            </Paragraph>
            <Paragraph secondary>{item.discription}</Paragraph>
          </ItemWrapper>
        ))}
      </GroupWrapper>
    </StyledWrapper>
  );
};

export default ServiceIcon;
