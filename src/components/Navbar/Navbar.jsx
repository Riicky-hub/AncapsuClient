import React from 'react';
import img from '../../assets/img/Frame 949.svg';
import DateTime from '../../assets/js/dateTime';
import { Paragraph, ButtonBorder } from '../../globalStyles';
import { BiSearch } from 'react-icons/bi';
import { BsGlobe } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { NavbarContainer, RowDiv, ButtonDiv, DateDiv } from './styles';
import { Orange, Black } from '../../constants/colors';

const Navbar = () => {
  return (
    <NavbarContainer>
      <RowDiv>
        <RowDiv>
          <DateDiv>
            <IconContext.Provider value={{ color: Orange, size: '30px' }}>
              <BsGlobe style={{ paddingRight: '10px' }} />
            </IconContext.Provider>
            <Paragraph size='PP' bold='700'>
              {DateTime}
            </Paragraph>
          </DateDiv>
        </RowDiv>
        <div>
          <img src={img} />
        </div>
        <RowDiv>
          <ButtonDiv>
            <IconContext.Provider value={{ size: '24px', color: Black }}>
              <BiSearch style={{ cursor: 'pointer' }} />
            </IconContext.Provider>
            <ButtonBorder width='60px' bg='transparent' color={Black} style={{ margin: '0 15px', fontWeight: '700' }}>
              Entrar
            </ButtonBorder>
            <ButtonBorder width='120px' style={{ fontWeight: '700' }}>
              Inscrever-se
            </ButtonBorder>
          </ButtonDiv>
        </RowDiv>
      </RowDiv>
    </NavbarContainer>
  );
};

export default Navbar;
