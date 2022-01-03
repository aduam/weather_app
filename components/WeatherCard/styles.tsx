import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  padding: 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 200px;
  border-radius: 4px;
  position: relative;
  background-color: white;
`;

export const WrapWeather = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 5px;
  }
`;

export const Img = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 auto;
`;
