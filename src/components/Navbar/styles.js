import styled from 'styled-components';
import { Black, Orange } from '../../constants/colors';

const ColumnDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const NavbarContainer = styled.div`
  padding-top: 20px;
  border-bottom: 3px solid ${Black};
`;

export const RowDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonDiv = styled(ColumnDiv)`
  justify-content: right;
`;

export const DateDiv = styled(ColumnDiv)`
  justify-content: left;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const CategoriesDiv = styled(ColumnDiv)`
  justify-content: space-around;
  padding: 10px 0 20px 0;
`;

export const Category = styled.a`
  padding: 0 8px 18px 8px;
  margin: 0 4px;
  text-decoration: none;
  font-weight: 700;
  color: black;
  border-bottom: 3px solid transparent;
  transition: 0.3s all ease-in-out;
  &:hover {
    border-bottom: 3px solid ${Orange};
  }
`;
