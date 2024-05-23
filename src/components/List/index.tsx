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
}

export function List({updateCard, title, cards, listIndex }:ListProps) {
  return (
    <Container>
      <header>
        <h2>{title}</h2>
      </header>

      <ul>
        { cards.filter((card) => card.status === listIndex).map((card) => (
          <Card 
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
