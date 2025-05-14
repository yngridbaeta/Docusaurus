---
sidebar_position: 1
---

# Introdução ao Projeto

Este projeto é um sistema web de **gestão escolar**, desenvolvido para facilitar o controle e organização de dados acadêmicos, como professores, disciplinas, cursos, turmas e ambientes físicos da instituição. Seu objetivo é fornecer uma ferramenta para o gerenciamento das informações, permitindo que administradores escolares possam cadastrar, consultar, editar e excluir registros com facilidade.

A aplicação é dividida em duas camadas:

- **Back-end:** Responsável pela lógica, armazenando dados que conecta todas as coisas.

- **Front-end:** Interface interativa para o usuário final, focada em usabilidade e eficiência.

A estrutura permite que cada parte tenha seus próprios componentes, facilitando tanto o desenvolvimento quanto a manutenção.

---

## Estrutura do Projeto

### Back-end

O back-end foi desenvolvido com Django e organiza as funcionalidades em:

- **Serializer** - Responsável pela conversação de dados entre os formatos utilizados na API e os modelos Django.
- **Models** - Define a estrutura e os relacionamentos dos dados no banco de dados (como `Cadastro`, `Disciplina`, `Ambiente`, `Curso` e `Turma`).
- **URL** - Mapeamento de rotas que conectam os endpoints às views.
- **Views** - Contêm a lógica que responde às requisições HTTP (GET, POST, PUT, DELETE).

> Acesse a seção [BACK](../back/overview) para ver os detalhes de cada parte.

### 🎨 Front-end

A interface foi construída com React, garantindo uma navegação fluida e responsiva. Os principais componentes são:

- **Head/Footer** – Componentes fixos da estrutura visual.
- **Modal** – Janelas modais reutilizáveis para formulários e interações rápidas.
- **App/Login/Home/Main** – Componentes principais da aplicação, incluindo login e a tela principal de gerenciamento.

A tela **Home**, por exemplo, permite buscar, cadastrar, editar e excluir professores de maneira integrada com a API.

> Veja mais detalhes em [FRONT](../front/overview).

---

## 🚀 Começando

Se é sua primeira vez por aqui, o ideal é seguir as seções de **Back-end** e **Front-end** para entender como cada parte foi implementada. Você também pode clonar o repositório e rodar o projeto localmente para testá-lo em tempo real.

---

## 📚 Sobre esta Documentação

Esta documentação foi construída com [Docusaurus](https://docusaurus.io/), uma ferramenta moderna de documentação voltada para projetos técnicos.

Fique à vontade para contribuir com melhorias, apontar erros ou sugerir novos conteúdos!