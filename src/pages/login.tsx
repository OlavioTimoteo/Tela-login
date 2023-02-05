import React from "react";
import * as S from "./styles";
import logo from "../assets/logo.png";
import star from "../assets/star.png";

function Login() {
  return (
    <S.Container>
      <S.ContainerLeft>
        <S.ContainerImage>
          <S.Image src={logo} alt="Logo" />
        </S.ContainerImage>
      </S.ContainerLeft>
      <S.ContainerRight>
        <S.ContainerImage>
          <S.Image src={star} alt="Star" />
          <S.ContainerTitle>
            <S.Title>Olá! Que bom te ver por aqui!</S.Title>
          </S.ContainerTitle>
          <S.ContainerForm>
            <S.ContainerButton>
              <S.Label>E-mail</S.Label>
              <S.Input type="email" />
            </S.ContainerButton>
            <S.ContainerButton>
              <S.Label>Senha</S.Label>
              <S.Input type="password" />
            </S.ContainerButton>
            <S.ButtonLogin>Entrar</S.ButtonLogin>
            <S.ButtonRegister>Criar nova conta</S.ButtonRegister>
          </S.ContainerForm>
        </S.ContainerImage>
      </S.ContainerRight>
    </S.Container>
  );
}

export default Login;
