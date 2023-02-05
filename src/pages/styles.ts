import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ContainerLeft = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #0000FF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerRight = styled.div`
  width: 50%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

export const ContainerImage = styled.div`
`;

export const Image = styled.img``;

export const ContainerTitle = styled.div`
  width: 40%;
  margin-left: 200px;
`;

export const Title = styled.h1`
  font-family: 'Fredoka One', cursive;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  width: 50px;
  font-family: 'Fredoka One', cursive;
  color: #00D47E;
  font-weight: 500;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
`;


export const ButtonLogin = styled.button`
  width: 310px;
  height: 30px;
  border: 1px solid #00D47E;
  background-color: white;
  color: #00D47E;
  font-family: 'Fredoka One', cursive;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 15px;
`;



export const ButtonRegister = styled.button`
  width: 310px;
  height: 30px;
  border: 1px solid #00D47E;
  background-color: #00D47E;
  color: white;
  font-family: 'Fredoka One', cursive;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 15px;
`;
