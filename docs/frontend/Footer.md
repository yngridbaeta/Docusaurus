---
sidebar_position: 2
title: Footer
---

# Footer

O componente `Footer` é responsável por renderizar o rodapé da aplicação da Escola Senai ROberto Mange. Ele é dividido em três partes principais:

- Informações institucionais da escola
- Links para redes sociais
- Direitos autorais da página

O componente utiliza **ícones da biblioteca `lucide-react`** e estilos definidos em um arquivo CSS externo.

---

## Importações

As bibliotecas utilizadas são:

- `React`: Para a construção do componente
- `lucide-react`: Para os ícones de redes sociais
- `styles.css`: Para aplicar estilos personalizados

---

## Estrutura do Componente

A estrutura do rodapé é dividida em:

### 1. Informações da Escola

Um bloco com nome da escola, slogan e formas de contato.

### 2. Redes Sociais

Um grupo de ícones que funcionam como links para redes sociais. Cada ícone é um componente da biblioteca `lucide-react`, como link externo.

### 3. Direitos Autorais

Uma pequena seção contendo os créditos e o ano atual.

---

## Estilização 🎨

O layout do componente é controlado por um arquivo `styles.css`, onde cada parte do rodapé é estilizadapor classes como: 

- `main`
- `container-footer`
- `footer-content`
- `school-info`
- `social-media`
- `footer-bottom`

Essas classes definem espaçamentos, cores e alinhamentos da página.


