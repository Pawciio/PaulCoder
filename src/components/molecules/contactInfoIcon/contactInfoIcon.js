import React from 'react';
import styled from 'styled-components';

import ImageIcons from 'components/atoms/imageIcons/imageIcons';
import Paragraph from 'components/atoms/paragraph/paragraph';

import ContactInfoImage from 'assets/ContactIcon/ContactInfoImage.png';
import ContactMailImage from 'assets/ContactIcon/ContactMailImage.png';
import ContactPhoneImage from 'assets/ContactIcon/ContactPhoneImage.png';

const StyledWrapper = styled.div`
  margin: 0;
`;

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 540px) {
    .imageIconContact {
      width: 60px;
      height: 60px;
    }
  }
`;

const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInfoIcon = () => {
  const ContactInfoStorage = [
    {
      image: ContactPhoneImage,
      discription: '+ 48 730 230 999',
    },
    {
      image: ContactMailImage,
      discription: 'paulcoder@gmail.com',
    },
    {
      image: ContactInfoImage,
      discription: 'Paweł Chołda ',
      discriptionI: 'Na Sarganach St. 21',
      discriptionII: '41-407 Imielin POLAND',
    },
  ];

  return (
    <StyledWrapper>
      <GroupWrapper>
        {ContactInfoStorage.map((item) => (
          <ItemWrapper>
            <ImageIcons className="imageIconContact" icons={item.image} />
            <ParagraphWrapper>
              <Paragraph secondary white>
                {item.discription}
              </Paragraph>
              <Paragraph secondary white>
                {item.discriptionI}
              </Paragraph>
              <Paragraph secondary white>
                {item.discriptionII}
              </Paragraph>
            </ParagraphWrapper>
          </ItemWrapper>
        ))}
      </GroupWrapper>
    </StyledWrapper>
  );
};

export default ContactInfoIcon;
