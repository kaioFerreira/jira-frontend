
import { useState } from 'react';
import { Container, FormEditModal, DeleteButton } from './styles';
import { Modal } from '../Modal';
import Form from '../Form';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

interface ListCardProps {
  id: string,
  description: string,
  responsible: string,
  priority: string,
  status: number
}

interface CardProps {
  id: string,
  description: string,
  responsible: string,
  priority: string,
  status: number,
  updateCard: (card: ListCardProps) => void
  deleteCard: (id: string) => void
}

export function Card({updateCard, deleteCard, id, description, responsible, priority, status }: CardProps) {
  
  const [openEditModal, setOpenEditModal] = useState(false)
  
  interface SelectOption {
    label: 'ALTA' | 'MEDIA' | 'BAIXA',
    value: number
  }

  interface StatusOption {
    label:'Tarefas' | 'Em andamento' | 'Em teste' | 'Finalizadas',
    value: number
  }

  const optionsStatus: StatusOption[] = [
    { 
      label: 'Tarefas',
      value: 0
    },
    { 
      label: 'Em andamento',
      value: 1
    },
    {
      label: 'Em teste',
      value: 2
    },
    {
      label: 'Finalizadas',
      value: 3
    }
  ]

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

  const schemaTaskForm = z.object({
    description: z.string()
      .nonempty('A descrição é obrigatoria'),
    priority: z.string(),
    responsible: z.string()
      .nonempty('O responsavel é obrigatorio'),
    status: z.string(),
  });

  type FormProps = z.infer<typeof schemaTaskForm>;


  const createTaskForm = useForm<FormProps>({resolver: zodResolver(schemaTaskForm)});

  async function createTask(data: FormProps) {
    const { 
      description, 
      priority, 
      responsible, 
      status
    } = schemaTaskForm.parse(data);
    
    updateCard({
      id,
      description,
      responsible,
      priority,
      status:  parseInt(status)
    })
    setOpenEditModal(!openEditModal)
  }
  
  return (
    <>
      <Container 
        onClick={() => setOpenEditModal(!openEditModal)}
        color={ 
          priority === '3' ? 
            'red' : 
              priority === '2' ? 'yellow' 
                : 'green'
        }>
        <p>{description}</p>
        <p>{responsible}</p>
        <p>{priority}</p>
      </Container>

      <Modal openModal={openEditModal} setOpenModal={setOpenEditModal}>
        <FormProvider {...createTaskForm}>
          <FormEditModal onSubmit={createTaskForm.handleSubmit(createTask)}>
            <Form.Label>Editar Tarefa</Form.Label>
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
