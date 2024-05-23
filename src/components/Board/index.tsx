
import { Container, FormTask, NewCard, Section } from './styles';
import { List } from '../List';
import { useState } from 'react';
import { Modal } from '../Modal';
import { FormProvider, useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "../../components/Form";
import { v4 as uuidv4 } from 'uuid';

interface CardProps {
  id: string,
  description: string,
  responsible: string,
  priority: string,
  status: number
}

export function Board() {

  const [openModal, setOpenModal] = useState(false)
  
  const schemaTaskForm = z.object({
    description: z.string()
      .nonempty('A descrição é obrigatoria'),
    priority: z.string(),
    responsible: z.string()
      .nonempty('O responsavel é obrigatorio')
  });

  type FormProps = z.infer<typeof schemaTaskForm>;

  const createTaskForm = useForm<FormProps>({resolver: zodResolver(schemaTaskForm)});

  interface SelectOption {
    label: 'ALTA' | 'MEDIA' | 'BAIXA',
    value: number
  }

  const optionsSelect: SelectOption[] = [
    { 
      label: 'ALTA',
      value: 3
    },
    {
      label: "MEDIA",
      value: 2
    },
    {
      label: "BAIXA",
      value: 1
    }
  ]

  const [cards, setCards] = useState([
    {
      id: '133455662',
      description: 'asdasd', 
      status:0,
      priority:'1',
      responsible: 'kaio'
    },
    {
      id: '1211',
      description: 'FFFFFFFFFFFFF', 
      status:2,
      priority:'1',
      responsible: 'kaio'
    },
    {
      id: '1231212',
      description: 'page home', 
      status:0,
      priority:'1',
      responsible: 'douglas'
    },
    {
      id: '14',
      description: 'bolinha 123', 
      status:1,
      priority:'1',
      responsible: 'maicon'
    },
    {
      id: '2454',
      description: 'asdajjjjjjjjjjjj', 
      status:3,
      priority:'3',
      responsible: 'maicon'
    }
    
  ])

  async function updateCard(card: CardProps) {
    
    console.log('ALTERA ESSE', card);

    const updatedCards = [...cards];
    
    updatedCards.filter((item) => {
      if(item.id == card.id){
        item.description = card.description
        item.priority = card.priority
        item.responsible = card.responsible
        item.status = card.status
      }
    });
    
    setCards(updatedCards);
  }

  async function createTask(data: FormProps) {
    
    const { description, priority, responsible } = schemaTaskForm.parse(data);
    

    /*const Task = await api.post(`/Tasks`, {
      name,
      email,
      password,
      confirmPassword,
    })

    navigate("/SignIn")*/

    const newCard = {
      id: uuidv4(),
      description,
      index: 0,
      status: 0,
      priority,
      responsible
    };
    
    setCards([...cards, newCard]);
    setOpenModal(!openModal)
    console.log('Task', description, priority, responsible);
    console.log('NewTask', data);
  }

  return (
    <Section>
      <NewCard onClick={() => setOpenModal(!openModal)}>Nova Tarefa</NewCard>

      <Container>
        <List updateCard={updateCard} title='Tarefas' cards={cards} listIndex={0}/>
        <List updateCard={updateCard} title='Em andamento' cards={cards} listIndex={1}/>
        <List updateCard={updateCard} title='Em teste' cards={cards} listIndex={2}/>
        <List updateCard={updateCard} title='Finalizadas' cards={cards} listIndex={3}/>
      </Container>
      
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <FormProvider {...createTaskForm}>
          <FormTask onSubmit={createTaskForm.handleSubmit(createTask)}>
            <Form.Label>Nova Tarefa</Form.Label>
              <Form.Field>
                <Form.Input placeholder="Descrição" type="text" name="description" />
                <Form.ErrorMessage field="description"/>
              </Form.Field>

            <Form.Field>
              <Form.Input placeholder="Responsavel" type="text" name="responsible" />
              <Form.ErrorMessage field="responsible"/>
            </Form.Field>

            <Form.Field>
              <Form.Select name="priority" defaultValue={1} options={optionsSelect}  />
              <Form.ErrorMessage field="priority"/>
            </Form.Field>

            <button type="submit">Cadastrar</button>
          </FormTask>
        </FormProvider>
      </Modal>
    </Section>  
  );
}
