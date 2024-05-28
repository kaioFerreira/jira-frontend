
import { Container } from './styles';
import { List } from '../List';
import { useEffect, useState } from 'react';
import api from '../../service/api';

interface ICardProps {
  id: string,
  title: string,
  description: string,
  responsible: string,
  avatar: string,
  priority: string,
  status: number
}

export function Board() {

  const [cards, setCards] = useState<ICardProps[]>([])

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

  useEffect(() => {
    api.get(`/task`).then(response => {
      setCards(response.data);
    })
  }, [])

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
