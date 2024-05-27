import { Container } from './styles';
import { Card } from '../Card';

interface CardProps {
  id: string,
  description: string,
  responsible: string,
  priority: string,
  status: number
}

interface ListProps {
  title: string,
  cards: CardProps[],
  listIndex: number,
  updateCard: (card: CardProps) => void
  deleteCard: (id: string) => void
}

export function List({updateCard, deleteCard,  title, cards, listIndex }:ListProps) {
  return (
    <Container>
      <header>
        <h2>{title}</h2>
      </header>

      <ul>
        { cards.filter((card) => card.status === listIndex).map((card) => (
          <Card 
            deleteCard={deleteCard}
            updateCard={updateCard}
            key={card.id}
            id={card.id}
            description={card.description}
            responsible={card.responsible}
            priority={card.priority}
            status={card.status}
          />
        )) }
      </ul>
    </Container>
  );
}
