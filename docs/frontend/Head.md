---
sidebar_position: 1
---

# Head

Página Head Uma página React representa uma tela ou seção específica dentro de uma aplicação. Ela define o layout e o conteúdo que serão exibidos no navegador, utilizando HTML em combinação com JSX.

## Importações 

```bash

import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

```

Import React from "react":  `Importa` o React para permitir a criação de páginas.

Import './styles.css': `Importa` os estilos que serão aplicados à página.

Import "Link"  from "react-router-dom": `Importa` componente Link, útil para criar links de navegação (embora não utilizado diretamente nesta página).


## Definição do componente 

A função Head é exportada como padrão e retorna a estrutura do componente.

```js title="Javascript"
export default function Head() {
    return (
        <main className="main">
            <div className="container_head">
                <div className="title">
                    <h2>Professores</h2>
                </div>
                <div className="nav">
                    
                    <span>Read</span>
                    <span>Update</span>
                    <span>Delete</span>
                </div>
            </div>
        </main>
    )
}
```

Estrutura do componente:
- `<main>:` Um elemento HTML com a classe CSS main. Serve como o contêiner principal.

- `<div className="container_head">:` Um contêiner que organiza o conteúdo principal do componente.

- `<div className="title">:` Contém o cabeçalho h2 com o texto "Professores".

- `<div className="nav">:` Contém três elementos span com os textos: "Read", "Update" e "Delete", representando possíveis ações.


## Finalidade

Este componente cria uma estrutura simples de interface com título ("Professores") e opções de ação (Read, Update, Delete). 
