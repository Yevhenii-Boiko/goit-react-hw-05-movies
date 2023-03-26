import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 400;
  text-transform: uppercase;
  padding: 8px 16px;
  border-radius: 4px;

  :hover {
    color: white;
    background-color: orangered;
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
  text-align: justify;
`;

export const InfoContainer = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const InfoLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 400;
  text-transform: uppercase;
  padding: 8px 16px;
  border-radius: 4px;

  :hover {
    color: white;
    background-color: orangered;
  }
`;
