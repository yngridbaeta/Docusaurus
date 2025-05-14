---
---

# URLs

**URLs** no Django são responsáveis por direcionar as requisições feitas ao servidor para as **views** correspondentes. Elas servem para mapear os caminhos (endpoints) da aplicação com as funções ou classes que irão processar as requisições.

O arquivo `urls.py` contém todas as rotas da aplicação, conectando as **views** com os caminhos acessíveis via HTTP. Em projetos com Django REST Framework, também são usadas para criar endpoints da API.

Abaixo está a configuração das URLs para nossa aplicação escolar:

## Importações no `urls.py`

```python
from django.urls import path
from .views import *  # Importando todas as views para as URLs
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView  # Para autenticação com JWT
```


Vamos explicar o que cada importação faz:

- **From django.urls import path**: Estamos importando as Urls do django que é responsável por gerenciar as urls de uma api onde ligamos as views com as urls.
- **From .views import**: Estamos importando tudo de dentro da views para as urls 
- **From rest_framework_simplejwt.views import**: Importação das views do rest_framework, permitindo que use funcionalidades como obter e renovar tokens JWT no Django.
- **TokenObtainPairView**: É uma biblioteca do rest_framework_simple.views que gera um token de acesso de um de atualização quando o usuário fornece credenciais válidas (usuário e login).
- **TokenRefreshView**: Permite o usuário manter o acesso ativo sem que ele precise fazer login novamente quando o token expira 

## Exemplo de URLs

### 1. Listar Professores: 
- **Caminho**: `/professores`
- **Função**: Listar todos os professores

```python
path('professores', listar_professores)
```

### 2. Visualizar Professores via Classe: 
- **Caminho**: `/prof`
- **Função**: Usar uma view baseada em classe para listar os professores.

```python
path('prof', ProfessoresView.as_view())
```

### 3. Detalhes de um Professor: 
- **Caminho**: `/id/<int:pk>`
- **Função**: Visualizar detalhes de um professor, passando o ID como parâmetro.

```python
path('id/<int:pk>', ProfessoresDetailView.as_view())
```

### 4. Obter Token de Acesso:
- **Caminho**: `/token/`
- **Função**: Gerar um par de tokens (acesso e refresh) com JWT.

```python
path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair')
```

### 5. Renovar Token:
- **Caminho**: `/refresh/`
- **Função**: Renovar o token de acesso usando um refresh token.

```python
path('refresh/', TokenRefreshView.as_view(), name='token_refresh')
```

### 6. Buscar Professores por Nome:
- **Caminho**: `/buscar/nome/`
- **Função**: Realizar uma busca por nome de professor.

```python
path('buscar/nome/', buscar_nome_professor)
```

### 7. Buscar Professores com Parâmetros de Pesquisa:
- **Caminho**: `/search/`
- **Função**: Buscar professores com base em filtros específicos, usando uma view baseada em classe.

```python
path('search/', ProfessoresSearchView.as_view())
```

### 8. Listar Disciplinas:
- **Caminho**: `/disciplinas`
- **Função**: Listar todas as disciplinas cadastradas.

```python
path('disciplinas', DisciplinasView.as_view())
```

### 9. Detalhes de uma Disciplina:
- **Caminho**: `/disciplina/<int:pk>`
- **Função**: Visualizar detalhes de uma disciplina com base no ID.

```python
path('disciplina/<int:pk>', DisciplinaDetailView.as_view())
```

### 10. Listar Ambientes:
- **Caminho**: `/ambientes`
- **Função**: Listar todos os ambientes disponíveis.

```python
path('ambientes', AmbientesView.as_view())
```

### 11. Detalhes de um Ambiente:
- **Caminho**: `/ambiente/<int:pk>`
- **Função**: Visualizar detalhes de um ambiente específico.

```python
path('ambiente/<int:pk>', AmbienteDetailView.as_view())
```

### 12. Listar Turmas:
- **Caminho**: `/turmas`
- **Função**: Listar todas as turmas cadastradas.

```python
path('turmas', TurmasView.as_view())
```

### 13. Detalhes de uma Turma:
- **Caminho**: `/turma/<int:pk>`
- **Função**: Visualizar detalhes de uma turma específica com base no ID.

```python
path('turma/<int:pk>', TurmaDetailView.as_view())
```

### 14. Listar Cursos:
- **Caminho**: `/cursos`
- **Função**: Listar todos os cursos disponíveis.

```python
path('cursos', CursosView.as_view())
```

### 15. Detalhes de um Curso:
- **Caminho**: `/curso/<int:pk>`
- **Função**: Visualizar detalhes de um curso específico.

```python
path('curso/<int:pk>', CursoDetailView.as_view())
```

## Conclusão

Esse arquivo de URLs define as rotas principais de nossa aplicação. Cada rota está associada a uma função ou uma classe view que vai processar a requisição e retornar a resposta apropriada. Usamos o Django REST Framework para facilitar a criação de APIs e a autenticação via JWT (JSON Web Token).

Essas rotas possibilitam a interação com dados de professores, disciplinas, turmas, ambientes, cursos, e também a autenticação de usuários via JWT, garantindo segurança nas requisições.
