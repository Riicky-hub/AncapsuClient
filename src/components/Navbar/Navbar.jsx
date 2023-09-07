import React, { useState, useEffect } from 'react';
import Categories from '../../api/Categories';
import img from '../../assets/img/Frame 949.svg';
import DateTime from '../../assets/js/dateTime';
import { Paragraph, ButtonBorder } from '../../globalStyles';
import { BiSearch } from 'react-icons/bi';
import { BsGlobe } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { NavbarContainer, RowDiv, ButtonDiv, DateDiv, CategoriesDiv, Category } from './styles';
import { Orange, Black } from '../../constants/colors';
import { addSelected } from '../../assets/js/Navbar/categorySelection';

const Navbar = () => {
  const [categories, setCategories] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  let filteredNavbarCategories = [];
  const SelectedCategories = [1, 2, 3, 4, 5, 6, 7]; // Select 12 Categories
  useEffect(() => {
    (async function runEffect() {
      try {
        const fetchedCategories = await Categories.fetchAll();
        if (fetchedCategories && fetchedCategories.length > 0) {
          setCategories(fetchedCategories);
          setLoading(false);
        }
      } catch (error) {
        setError('Error: houve erro no servidor, por favor tente novamente mais tarde!');
        setLoading(false);
      }
    })();
  }, []);
  if (loading) {
    return <Paragraph>Loading...</Paragraph>;
  } else if (error) {
    return <Paragraph>{error}</Paragraph>;
  } else if (!loading && !error) {
    categories.map((category) => {
      if (SelectedCategories.includes(category.id)) {
        filteredNavbarCategories = [...filteredNavbarCategories, category];
      }
    });
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
        <CategoriesDiv>
          <div>
            {filteredNavbarCategories.map((category) => {
              return (
                <Category href='#' key={category.id} id='Category' onClick={(e) => addSelected(e, 'Category', Orange)}>
                  {category.name}
                </Category>
              );
            })}
          </div>
        </CategoriesDiv>
      </NavbarContainer>
    );
  }
};

export default Navbar;
