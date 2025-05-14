---
sidebar_position: 3
---

# Modal

O componente `ModalProfessores` é uma **janela modal** criada com React que serve para **cadastrar ou editar dados de um professor**. Ele utiliza **hooks do React**, faz chamadas HTTP com `axios` para a API backend (em Django) e controla o formulário de forma dinâmica.

Esse componente é útil quando queremos abrir um formulário em uma janela sobreposta, sem sair da página atual.

---

## Importações principais

```javascript
import React, { useEffect, useState } from "react";
import axios from 'axios';
import './styles.css';
```

- **React:**: Biblioteca usada para construir a interface de usuário.
- **useEffect, useState:**: Hooks do React usados para manipular estado e executar ações quando o componente é carregado.
- **axios:**: Biblioteca para fazer requisições HTTP à API.
- **./styles.css:**: Importa os estilos CSS personalizados do modal.

## Estrutura do Componente

```javascript
const ModalProfessores = ({ isOpen, onClose, professorSelecionado, up, setUp }) => {
  if (!isOpen) return null
```
- **isOpen:**: Indica se o modal está visível.
- **onClose:**: Função para fechar o modal.
- **professorSelecionado:**: Objeto que representa um professor (para edição).
- **up / setUp:**: Usado para forçar a atualização da lista de professores após salvar ou editar.

## Estados do Componente

```javascript
const [id, setId] = useState(professorSelecionado?.id || '');
const [ni, setNi] = useState(professorSelecionado?.ni || '');
const [nome, setNome] = useState(professorSelecionado?.nome || '');
const [email, setEmail] = useState(professorSelecionado?.email || '');
const [cel, setCel] = useState(professorSelecionado?.cel || '');
const [ocup, setOcup] = useState(professorSelecionado?.ocup || '');
const token = localStorage.getItem('token');
```

Cada professor tem um conjunto de informações que serão controladas como estado local do componente (nome, e-mail, etc). O token JWT é obtido do localStorage para autenticar as requisições.

## useEffect – Carregar dados iniciais

```javascript
useEffect(() => {
  if (professorSelecionado) {
    setId(professorSelecionado.id || '');
    setNi(professorSelecionado.ni || '');
    setNome(professorSelecionado.nome || '');
    setEmail(professorSelecionado.email || '');
    setCel(professorSelecionado.cel || '');
    setOcup(professorSelecionado.ocup || '');
  } else {
    setId('');
    setNi('');
    setNome('');
    setCel('');
    setEmail('');
    setOcup('');
  }
}, []);
```

Esse hook é executado uma vez quando o modal é carregado. Ele preenche os campos com os dados do professor, caso seja uma edição. Se for um cadastro novo, os campos são limpos.

## Função upDate – Atualizar professor

```javascript
const upDate = async () => {
  const response = await axios.put('http://127.0.0.1:8000/api/professores', {
    ni, nome, email, cel, ocup
  }, {
    headers: { Authorization: `Bearer ${token}` }
  });
  onClose();
  setUp(!up);
}
```
- Envia uma requisição PUT para atualizar os dados de um professor.
- Envia uma requisição PUT para atualizar os dados de um professor.
- Após a resposta da API, fecha o modal e atualiza a lista de professores.

## Função newTeacher – Cadastrar novo professor

```javascript
const newTeacher = async () => {
  const response = await axios.post('http://127.0.0.1:8000/api/professores', {
    ni, nome, email, cel, ocup
  }, {
    headers: { Authorization: `Bearer ${token}` }
  });
  onClose();
  setUp(!up);
}
```

Semelhante à upDate, mas aqui usamos POST para criar um novo professor no banco de dados.

## Função handleSubmit – Decide entre salvar e atualizar

```javascript
const handleSubmit = () => {
  if (professorSelecionado) {
    upDate();
  } else {
    newTeacher();
  }
}
```

Ao enviar o formulário, essa função verifica se estamos editando ou criando e chama a função correspondente.

## Estrutura visual do modal (JSX)

```javascript
return (
  <div className="modal-overlay">
    <div className="modal_container">
      <button className="close_button" onClick={onClose}>X</button>
      <h2>{professorSelecionado ? "Editar" : "Cadastrar"}</h2>
      <div className="body_modal">
        <form onSubmit={handleSubmit}>
          <input value={ni} onChange={e => setNi(e.target.value)} placeholder="NI" />
          <input value={nome} onChange={e => setNome(e.target.value)} placeholder="NOME" />
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="EMAIL" />
          <input value={cel} onChange={e => setCel(e.target.value)} placeholder="CELULAR" />
          <input value={ocup} onChange={e => setOcup(e.target.value)} placeholder="OCUP" />
          <button type="submit">
            {professorSelecionado ? "Atualizar" : "Salvar"}
          </button>
        </form>
        <div className="foto"></div>
      </div>
    </div>
  </div>
)
```

- Modal dividido em formulário e uma área lateral (foto, ainda vazia).
- Os campos estão vinculados ao estado (controlados).
- O botão submit muda o texto e a ação dependendo se é um cadastro ou edição.

## Conclusão

O `ModalProfessores` é um componente reutilizável e inteligente que:

- Pode ser usado tanto para **cadastrar** quanto **editar** professores.
- Trabalha com API protegida por **JWT**.
- Controla o estado de todos os campos do formulário.
- Usa `axios` para comunicação com o backend Django.
- Fecha o modal automaticamente após a operação e atualiza a lista pai.