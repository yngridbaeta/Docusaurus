---
sidebar_position: 5
title: Home
---

# Home

O componente `Home` representa a página principal do sistema. Ele é responsável por exibir, criar, editar, buscar e excluir registros de professores por meio de integração com a API. Tabmbém renderiza os componentes de layout como `Head` e `Footer`.

---

## Importações

- `React`: Gerenciamento do estado e ciclo de vida do componente.
- `axios`: Comunicação com a API (requisições HTTP).
- `react-icons`: Ícones para ações como editar, adicionar e buscar.
- `styles.css`: Estilização personalizada.
- `Componentes próprios`: `ModalProfessores`, `Head`, `Footer`.

---

## Estado e Variáveis

O componente utiliza múltiplos `useState` para controlar:

- `dados`: Lista de professores vindo da API
- `modalOpen`: Exibição do modal de criação/edição
- `professorSelecionado`: Professor em edição ou consulta
- `texto`: Texto digitado para busca
- `up`: Estado auxiliar para forçar atualização após mudanças

Além disso, o `token` é recuperado do `localStorage` para autenticação nas requisições.

---

## Efeitos e Requisições

### `useEffect`

Carrega os dados de professores ao inicar ou quando `up` for alterado:

```js
useEffect(() => {
    // Requisição GET com token no header
}, [up]);
```

