import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;
  justify-content: center;
`;

export const CastItem = styled.li`
  border: 1px solid #000;
  width: 180px;
  height: auto;

  & > p {
    font-size: 24px;
    font-weight: 500;
    margin: 15px 0;
    text-align: center;
  }
`;
