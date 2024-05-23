import { Header, Container, FormTask } from "./styles";
import LogoJira from '../../assets/jira-logo.svg';
import { useState } from "react";
import { Modal } from "../../components/Modal";
import { FormProvider, useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "../../components/Form";

export function Home(){  

  const [openModal, setOpenModal] = useState(false)

  const schemaTaskForm = z.object({
    description: z.string()
      .nonempty('A descrição é obrigatoria'),
    priority: z.string()
      .nonempty('A prioridade é obrigatorio'),
    responsible: z.string()
      .nonempty('O responsavel é obrigatorio'),
  });

  type FormProps = z.infer<typeof schemaTaskForm>;

  const createTaskForm = useForm<FormProps>({resolver: zodResolver(schemaTaskForm)});

  async function createTask(data: FormProps) {
    
    const { description, priority, responsible } = schemaTaskForm.parse(data);
    /*
    addToast({
        type: 'success',
        title: 'Cadastro Realizado!',
        description: `${name.split(' ',1)} acabou de se cadastrar.`,
    });

    const Task = await api.post(`/Tasks`, {
      name,
      email,
      password,
      confirmPassword,
    })

    navigate("/SignIn")*/
    console.log('Task', description, priority, responsible);
    console.log('NewTask', data);
  }
  
  return (
    <Container>
      <Header>
        <div>
          <img src={LogoJira} className="App-logo" alt="logo" />
          <h1>Jira</h1>
        </div>
        <button onClick={() => setOpenModal(!openModal)}>Nova Tarefa</button>
      </Header>

      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <FormProvider {...createTaskForm}>
          <FormTask onSubmit={createTaskForm.handleSubmit(createTask)}>
          <Form.Label>Nova Tarefa</Form.Label>
            <Form.Field>
              <Form.Input placeholder="Descrição" type="text" name="description" />
              <Form.ErrorMessage field="description"/>
            </Form.Field>

            <Form.Field>
              <Form.Input type="text" placeholder="Prioridade" name="priority" />
              <Form.ErrorMessage field="priority"/>
            </Form.Field>

            <Form.Field>
              <Form.Input placeholder="Responsavel" type="text" name="responsible" />
              <Form.ErrorMessage field="responsible"/>
            </Form.Field>

            <button type="submit">Cadastrar</button>
          </FormTask>
        </FormProvider>
      </Modal>
    </Container>
  );
}