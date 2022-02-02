import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./style";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="VL Money" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}
