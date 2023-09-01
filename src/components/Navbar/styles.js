import styled from 'styled-components';
import { Black } from '../../constants/colors';

const ColumnDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const NavbarContainer = styled.div`
  padding: 20px 0;
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
