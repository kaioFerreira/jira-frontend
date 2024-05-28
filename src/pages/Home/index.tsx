import LogoJira from '../../assets/jira-logo.svg';

import { 
  Header, 
  Container, 
  Body 
} from "./styles";
import { Board } from '../../components/Board';

export function Home(){  
  return (
    <Container>
      <Header>
        <div>
          <img src={LogoJira} className="App-logo" alt="logo" />
          <h1>To-Do List</h1>
        </div>
      </Header>

      <Body>
        <Board/>
      </Body>
      
    </Container>
  );
}