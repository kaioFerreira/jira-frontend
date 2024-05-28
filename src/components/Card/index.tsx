
import { useCallback, useState } from 'react';
import { Container, FormEditModal, DeleteButton, Responsible } from './styles';
import { Modal } from '../Modal';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import Form from '../Form';

interface ICardlistProps {
  id: string,
  title: string,
  description: string,
  responsible: string,
  avatar: string,
  priority: string,
  status: number
}


interface ICardProps {
  id: string,
  title: string,
  description: string,
  responsible: string,
  avatar: string,
  priority: string,
  status: number,
  updateCard: (card: ICardlistProps) => void
  deleteCard: (id: string) => void
}

export function Card({updateCard, deleteCard, id, title, description, responsible, avatar, priority, status }: ICardProps) {

  const [openEditModal, setOpenEditModal] = useState(false)
  
  interface ISelectOption {
    label: 'ALTA' | 'MEDIA' | 'BAIXA',
    value: string
  }

  interface IStatusOption {
    label:'Tarefas' | 'Em andamento' | 'Em teste' | 'Finalizadas',
    value: string
  }

  const optionsStatus: IStatusOption[] = [
    { 
      label: 'Tarefas',
      value: '0'
    },
    { 
      label: 'Em andamento',
      value: '1'
    },
    {
      label: 'Em teste',
      value: '2'
    },
    {
      label: 'Finalizadas',
      value: '3'
    }
  ]

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

  const schemaTaskForm = z.object({
    title: z.string().nonempty('O titulo é obrigatorio'),
    description: z.string().nonempty('A descrição é obrigatoria'),
    priority: z.string(),
    responsible: z.string().nonempty('O responsavel é obrigatorio'),
    status: z.string(),
  });

  type FormProps = z.infer<typeof schemaTaskForm>;

  const updateTaskForm = useForm<FormProps>({resolver: zodResolver(schemaTaskForm)});

  const updateTask = useCallback(async (data: FormProps) => {
    const { 
      title,
      description, 
      priority, 
      responsible, 
      status
    } = schemaTaskForm.parse(data);
    
    updateCard({
      id,
      title,
      description,
      responsible,
      avatar,
      priority,
      status: parseInt(status)
    })

     setOpenEditModal(!openEditModal);
  },[openEditModal]);
  
  return (
    <>
      <Container onClick={() => setOpenEditModal(!openEditModal)} color={priority}>
        <p>{title}</p>
        <p>{description}</p>
        <Responsible>
          <img src={avatar} alt="Avatar" />
          <p>{responsible}</p>
        </Responsible>
      </Container>

      <Modal openModal={openEditModal} setOpenModal={setOpenEditModal}>
        <FormProvider {...updateTaskForm}>
          <FormEditModal onSubmit={updateTaskForm.handleSubmit(updateTask)}>
            <Form.Label>Editar Tarefa</Form.Label>
            <Form.Field>
              <Form.Input defaultValue={title} placeholder="Titulo" type="text" name="title" />
              <Form.ErrorMessage field="title"/>
            </Form.Field>

            <Form.Field>
              <Form.Input defaultValue={description} placeholder="Descrição" type="text" name="description" />
              <Form.ErrorMessage field="description"/>
            </Form.Field>

            <Form.Field>
              <Form.Input defaultValue={responsible} placeholder="Responsavel" type="text" name="responsible" />
              <Form.ErrorMessage field="responsible"/>
            </Form.Field>

            <Form.Field>
              <Form.Select name="priority" defaultValue={priority} options={optionsSelect}  />
              <Form.ErrorMessage field="priority"/>
            </Form.Field>

            <Form.Field>
              <Form.Select name="status" defaultValue={status} options={optionsStatus}  />
              <Form.ErrorMessage field="status"/>
            </Form.Field>

            <button type="submit">Salvar</button>
          </FormEditModal>
          <DeleteButton onClick={() => deleteCard(id)}>Excluir</DeleteButton>
        </FormProvider>
      </Modal>
    </>
  );
}
