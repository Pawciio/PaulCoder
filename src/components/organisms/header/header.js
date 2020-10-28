import React from 'react';

import BackgroundImage from 'components/atoms/BackgroundImage/BackgroundImage';
import BurgerButton from 'components/atoms/burgerButton/burgerButton';
import Navigation from 'components/molecules/navigation/navigation';
import HeaderBaner from 'components/molecules/headerBaner/headerBaner';
import GetStarted from 'components/atoms/getStartedIcon/getStartedIcon';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <nav id="Home">
      <BackgroundImage hero ref={node}>
        <BurgerButton open={open} setOpen={setOpen} />
        <Navigation open={open} setOpen={setOpen} />
        <HeaderBaner />
        <GetStarted />
      </BackgroundImage>
    </nav>
  );
};

export default Header;
