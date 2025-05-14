---
sidebar_position: 1
---

# App

A página App no React define a estrutura principal da aplicação, incluindo o sistema de rotas. Ela utiliza o React Router para gerenciar a navegação entre diferentes páginas.

## Importações 

```bash

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/login";
import Home from "./pages/home";
import Env from "./pages/environments";

```

Import React from "react":  `Importa` o React para permitir a criação de páginas.

Import  BrowserRouter as Router, Route, Routes  from 'react-router-dom': `Importa` os componentes essenciais do React Router para gerenciar a navegação na aplicação:
  - `BrowserRouter:` (apelidado como Router): Envolve toda a aplicação e habilita o uso do React Router.
  - `Routes:` Define o agrupamento das rotas.
  - `Route:` Especifica cada rota individual e o componente correspondente.

Import Login, import Home, e import Env: `Importa` as páginas ou componentes que serão exibidos em rotas específicas.


## Definição do componente 

O componente App é uma função que define a estrutura principal da aplicação e retorna os elementos JSX.

```js title="Javascript"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/environments" element={<Env />}/>
      </Routes>
    </Router>
  )
}
```

Detalhes da implementação:
- `<Router>:` Envolve toda a aplicação, habilitando o uso do sistema de rotas.

- `<Routes>:` Agrupa todas as rotas configuradas.

- `<Route>:` Define uma rota específica, com os seguintes atributos:
  
  - `path:` Define o caminho da URL que será associado ao componente.

  - `element:` Especifica o componente a ser renderizado quando a rota é acessada.


## Rotas Definidas

Rota `/` e `/login` : Ambas renderizam o componente Login, servindo como a página inicial e a rota de login.

Rota `/home` : Renderiza o componente Home, representando a página inicial do usuário ou dashboard.

Rota `/environments` : Renderiza o componente Env, provavelmente responsável por uma página de "Ambientes" ou configurações específicas.

## Finalidade

A página App gerencia a navegação da aplicação utilizando o React Router. Com as rotas configuradas, os usuários podem acessar diferentes seções (Login, Home, Environments) diretamente pelos caminhos definidos. É a base da aplicação, conectando as páginas de maneira funcional e organizada.