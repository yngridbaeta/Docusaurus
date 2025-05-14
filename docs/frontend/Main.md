---
sidebar_position: 2
title: Main
---

# Main

Configurações da Main.


```js title="Main.jsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

```

- O  StrictMode é um componente do react que ajuda na identificação de problemas no código. 

- CreateRoot inicia a renderização da aplicação. 

- Importação a estilização com o index.css.

- Importação do app componente principal da aplicação .


```js title="Main.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) 
```
 
- createRoot: cria a raiz da renderização React. 

- document.getElementById('root'): pega o  id "root" do HTML declarado.

- render: começa a renderizar a aplicação .

- StrictMode envolve o App  para ativar os avisos de boas práticas e detectar possíveis problemas .