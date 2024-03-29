import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(155, 155, 155, 0.5),
      rgba(0, 0, 0, 0.9)
    ),
    url("https://1.bp.blogspot.com/-6rlft1PvTME/YQ5yrPgGJoI/AAAAAAACxhY/pghRBZj9WPolB6gTmlkeEc6GwEsv9O7XgCLcBGAsYHQ/s1000/2021-22-ligue-1%2Bkit%2Boverview.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  ${mobile({ width: "75%" })}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 5px;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 20px;
  background-color: #08349b;
  color: white;
  cursor: pointer;
`;