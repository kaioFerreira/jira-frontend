
import { Container } from './styles';
import { List } from '../List';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function Board() {

  const [cards, setCards] = useState([{
    id: uuidv4(),
    title: 'TASK 3',
    description:  'descrição task de numero três, um passo a passo completo', 
    status: 0,
    priority: 'green',
    responsible: 'kaio',
    avatar: "https://gravatar.com/avatar/19d88624b71204db346947e6fff07871?s=200&d=retro&r=x"
  },
  {
    id: uuidv4(),
    title: 'TASK 2', 
    description:  'descrição task de numero dois, um passo a passo completo', 
    status: 1,
    priority: 'red',
    responsible: 'douglas',
    avatar: "https://gravatar.com/avatar/2581cdc74c7fcbdd63a5e3b0bc954820?s=200&d=retro&r=x"
  },
  {
    id: uuidv4(),
    title: 'TASK 1', 
    description:  'descrição task de numero um, um passo a passo completo', 
    status: 3,
    priority: 'orange',
    responsible: 'jose',
    avatar: "https://gravatar.com/avatar/82ddc0d13e56477d1dfa6ecb94c0349e?s=200&d=retro&r=x"
  },
  {
    id: uuidv4(),
    title: 'TASK 15', 
    description:  'descrição task de numero quinze, um passo a passo completo', 
    status: 1,
    priority: 'green',
    responsible: 'Roger',
    avatar: "https://gravatar.com/avatar/82ddc0d13e56477d1dfa6ecb94c0349e?s=200&d=retro&r=x"
  },
  {
    id: uuidv4(),
    title: 'TASK 12', 
    description:  'descrição task de numero doze, um passo a passo completo', 
    status: 1,
    priority: 'orange',
    responsible: 'jose',
    avatar: "https://gravatar.com/avatar/82ddc0d13e56477d1dfa6ecb94c0349e?s=200&d=retro&r=x"
  },
  {
    id: uuidv4(),
    title: 'TASK 5', 
    description:  'descrição task de numero cinco, um passo a passo completo', 
    status: 2,
    priority: 'green',
    responsible: 'Amanda',
    avatar: "https://gravatar.com/avatar/3948d622e2e0d04a1b4b435851dafb54?s=200&d=retro&r=x"
  }])

  const [list, setList] = useState([
    {
      title: 'Tarefas',
      listIndex: 0,
      creatable: true
    },
    {
      title: 'Em andamento',
      listIndex: 1,
      creatable: false
    },
    {
      title: 'Em teste',
      listIndex: 2,
      creatable: false
    },
    {
      title: 'Finalizadas',
      listIndex: 3,
      creatable: false
    },
  ])

  return (
    <Container>
      {list.map(item => 
        <List 
          key={item.title}
          cards={cards} 
          setCards={setCards} 
          creatable={item.creatable} 
          title={item.title} 
          listIndex={item.listIndex}/>
        )
      }
    </Container>
  );
}
