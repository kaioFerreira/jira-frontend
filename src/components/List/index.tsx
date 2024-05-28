import { useCallback, useState } from 'react';
import { Container, FormTask } from './styles';
import { Card } from '../Card';
import { MdAdd } from 'react-icons/md';
import { Modal } from '../Modal';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Form from '../Form';
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

interface IListProps {
  cards: ICardProps[], 
  setCards: (cards: ICardProps[]) => void,
  title: string,
  listIndex: number,
  creatable: boolean
}

interface ISelectOption {
  label: 'ALTA' | 'MEDIA' | 'BAIXA',
  value: string
}

export function List({ cards, setCards, creatable, title, listIndex }: IListProps) {
  const [openModal, setOpenModal] = useState(false)
  
  const optionsSelect: ISelectOption[] = [
    { 
      label: 'ALTA',
      value: 'red'
    },
    {
      label: "MEDIA",
      value: 'orange'
    },
    {
      label: "BAIXA",
      value: 'green'
    }
  ]

  const schemaTaskListForm = z.object({
    title: z.string().nonempty('O titulo é obrigatorio'),
    description: z.string().nonempty('A descrição é obrigatoria'),
    priority: z.string(),
    responsible: z.string().nonempty('O responsavel é obrigatorio')
  });

  const createTask = useCallback(async (data: FormProps) => {
    const { title, description, priority, responsible } = schemaTaskListForm.parse(data);
    
    const newTask = await api.post(`/task`, {
      title,
      description,
      status: 0,
      avatar: "https://gravatar.com/avatar/352b00bd868c73afb9cd139a9820a547?s=200&d=retro&r=x",
      priority,
      responsible
    })

    setCards([...cards, newTask?.data]);
    
    setOpenModal(!openModal);
    createTaskForm.reset()
  },[cards, openModal]);
  
  const updateCard = useCallback(async (card: ICardProps) => {
    const listCards = [...cards];
    
    const result = await api.put(`/task/${card.id}`, {
      title: card.title,
      description: card.description,
      avatar: card.avatar,
      status: card.status,
      priority: card.priority,
      responsible: card.responsible
    })

    const editTask:ICardProps = result?.data
    
    listCards.filter(item => {
      if(item.id === card.id) {
        item.title = editTask.title
        item.description = editTask.description
        item.status = editTask.status
        item.responsible = editTask.responsible
        item.priority = editTask.priority
        item.avatar = editTask.avatar
      }
    })

     setCards(listCards);
  },[cards]);

  const deleteCard = useCallback(async (id: string) => {
    const deletedCards = [...cards]; 
    
    await api.delete(`/task/${id}`)

    setCards(deletedCards.filter((item) => item.id !== id));
  },[cards]);

  type FormProps = z.infer<typeof schemaTaskListForm>;

  const createTaskForm = useForm<FormProps>({resolver: zodResolver(schemaTaskListForm)});

  return (
    <Container>
      <header>
        <div>
          <h2>{title}</h2>
          <span>{cards.filter(item => item.status === listIndex).length}</span>
        </div>
        {creatable && 
          <button type='button' onClick={() => setOpenModal(!openModal)}>
            <MdAdd size={24} color="#FFF"/>
          </button>
        }
      </header>

      <ul>
        {cards.filter(item => item.status === listIndex).map(card =>
          <Card 
            key={card.id}
            id={card.id}
            deleteCard={deleteCard}
            updateCard={updateCard}
            title={card.title}
            description={card.description}
            responsible={card.responsible}
            avatar={card.avatar}
            priority={card.priority}
            status={card.status}
          />
        )}
      </ul>

      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <FormProvider {...createTaskForm}>
          <FormTask onSubmit={createTaskForm.handleSubmit(createTask)}>
            <Form.Label>Nova Tarefa</Form.Label>
              <Form.Field>
                <Form.Input placeholder="Titulo" type="text" name="title" />
                <Form.ErrorMessage field="title"/>
              </Form.Field>

              <Form.Field>
                <Form.Input placeholder="Descrição" type="text" name="description" />
                <Form.ErrorMessage field="description"/>
              </Form.Field>

            <Form.Field>
              <Form.Input placeholder="Responsavel" type="text" name="responsible" />
              <Form.ErrorMessage field="responsible"/>
            </Form.Field>

            <Form.Field>
              <Form.Select name="priority" defaultValue={'green'} options={optionsSelect}  />
              <Form.ErrorMessage field="priority"/>
            </Form.Field>

            <button type="submit">Cadastrar</button>
          </FormTask>
        </FormProvider>
      </Modal>
    </Container>
  );
}
