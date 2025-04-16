---
sidebar_position: 1
---

# Login


```js title="Login.jsx"
import React, {useState} from "react";  
import "./styles.css"  // estilos 
import axios from 'axios'  
import { useNavigate } from "react-router-dom"; 
import {FaUser} from 'react-icons/fa' 
```

- Axios é utilizado para fazer requisições HTTP. 
- useNavigate é um hook da biblioteca react-router-dom. Ele permite a navegação programática entre páginas/rotas.
- **Fauser** importa um ícone específico (de "Font Awesome") da biblioteca react-icons.


```js title="Login.jsx"
export default function Login(){ 

  const [user, setUser] = useState('') 

  const [password, setPassword] = useState('') 

  const navigate = useNavigate() 
```
 
- Define o componente Login como a exportação padrão, que será utilizado para renderizar a tela de login. 
- O estado user armazena o nome de usuário digitado. setUser é a função usada para atualizar esse valor inicialmente vazia. O estado password segue o mesmo padrão, sendo responsável por armazenar a senha.

#### Todo a logica abaixo está dentro da função Login

```js title="Login.jsx"
const logar = async ()=>{ 

    try { 

      const response = await axios.post( 

        'http://127.0.0.1:8000/api/token/', 

        { 

          username: user, 

          password: password 

        } 

      ) 

      console.log("TokenLogin: ", response.data.access) 

      localStorage.setItem('token', response.data.access) 

      navigate('/home') 

    } catch (error) { 

      console.error(error) 

    } 

  } 
```

- A função logar realiza uma requisição HTTP

- Dentro dela, o axios.post envia uma requisição HTTP do tipo POST para o endpoint da API, com os dados de username e password informados pelo usuário.

- Se a resposta for bem-sucedida, o token de acesso retornado é armazenado no localStorage, possibilitando seu uso em requisições futuras. 

- Após isso tem o redirecionamento para a pagina Home após o login ser realizado com sucesso 

- Catch serve para caso o usuario inserir um dado errado ou ter algum problema com a api mostrando a mensagem de erro 


```js title="Login.jsx"
return( 
    <div className="container_login"> 
      <FaUser className="icon" /> 

      <input 
        className="caixa" 
        value={user} 
        onChange={(e)=>{setUser(e.target.value)}} 
        placeholder="User" 

      /> 

      <input 
        className="caixa" 
        value={password} 
        onChange={(e)=>{setPassword(e.target.value)}} 
        placeholder="Password" 
        type="password" 

      /> 

      <button className="btn" onClick={logar}>Enter </button> 

    </div> 

  ) 

} 
```

- O return vai ser usado para atualizar o nome do usuario e a senha. Assim especificando esses dois inputs e para definir que ao clicar no botao enter vai ser chamado a função login.


