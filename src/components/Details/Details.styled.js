import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  & > img {
    margin-right: 30px;
  }
`;

export const DetailsTitle = styled.h2`
  margin-top: 0;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const DetailsText = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
`;
