import styled from "styled-components";
import { mobile } from "../responsive";
import logo from "../assets/logoeasy.png"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(102deg, rgba(20,33,62,0.5816920518207283) 0%, rgba(245,54,56,1) 100%),
    url("https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  font-family: 'Abril Fatface', cursive;
  color: #14213E;
  text-align : center ;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  width: 86px;
  
  
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 99%;
  border: none;
  padding: 15px 20px;
  background-color: #F53638;
  color: white;
  cursor: pointer;
  
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
