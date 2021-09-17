/* eslint-disable consistent-return */
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

export const IconHamburger = styled(GiHamburgerMenu)`
  font-size: 1.2rem;
`;

export const MenuItem = styled.a`
  display: block;
  padding: 0.8em;
  font-size: 1.15em;
  text-align: start;
  color: #ccc;
  text-decoration: none;
  margin-left: 3vw;

  :hover {
    color: #e0b2e4;
    text-shadow: 1px 1px 10px white;
  }
`;
