---
sidebar_position: 4
---

# Views

Esse código define várias views em endpoints de API para lidar com a manipulação de dados de objetos como professores, disciplinas, ambientes, cursos e turmas.

## Importações 

O código começa com importações necessárias para o funcionamento das views.

```text title="views.py"
// highlight-start
---
from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
---
```

## Decorator

O decorator @api_view diz que a função pode lidar com os métodos HTTP GET (buscar dados, no caso dados do cadastro dos professores) e POST(enviar dados e criar um novo registro, no caso ele registra novos professores).

```md
@api_view (['GET', 'POST'])
```

```md
@permission_classes([IsAuthenticated])
```

**Explicação:** Define que só os usuários autenticados podem acessar esse endpoint . 

## Métodos GET, POST
### Método GET

O objetivo dessa função é listar os professores com base no nome. O fluxo de execução funciona assim:
```md
def listar_professores(request):
    if request.method == 'GET':
        queryset = Cadastro.objects.all()
        serializer = CadastroSerializer(queryset, many=True)
        return Response(serializer.data)
    
```
- Queryset = Cadastro.objects.all(): Recupera todos os registros de professores no banco de dados.

- Serializer = CadastroSerializer(queryset, many=True): O serializador converte os registros de professores para um formato adequado para a resposta HTTP, geralmente em JSON.

- Return Response(serializer.data): Retorna os dados serializados como uma resposta para o cliente.


### Método POST
Este método tem como objetivo criar novos professores. O fluxo segue este caminho:

```md
elif request.method == 'POST':
        serializer = CadastroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
```

- Serializer = CadastroSerializer(data=request.data): Recebe os dados enviados pelo cliente (geralmente no formato JSON), e tenta criar um novo objeto Cadastro com esses dados.

- If serializer.is_valid(): Verifica se os dados recebidos são válidos (com base nas regras do serializador, como campos obrigatórios ou tipos de dados corretos).

- Serializer.save(): Se os dados forem válidos, o professor é salvo no banco de dados.

- Return Response(serializer.data, status=status.HTTP_201_CREATED): Retorna os dados do novo professor criado, com o status HTTP 201 (Criado com sucesso).

- Return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST): Se os dados forem inválidos, o servidor retorna os erros de validação com o status 400 (Bad Request).

## Função de Pesquisa

Essa função retorna uma lista de professores com base no nome (filtro). Se o nome não for fornecido, ela retorna todos os professores. O fluxo funciona da seguinte forma:
````md

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def buscar_nome_professor(request):
    termo = request.get('nome', '')
    if termo:
        professores = Cadastro.objects.filter(nome_incontains = termo)
    else:
        professores = Cadastro.objects.all()
    
    serializer = CadastroSerializer(professores, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
````

- Termo = request.get('nome', ''): Tenta obter o valor do parâmetro nome da requisição. Se o parâmetro não for informado, usa uma string vazia como valor padrão.

- If termo: Se o termo for fornecido (não estiver vazio), a função filtra os professores cujo nome contém o termo informado.
professores = Cadastro.objects.filter(nome__icontains=termo)
Isso permite buscar professores cujo nome contém o termo, independentemente de maiúsculas ou minúsculas. Por exemplo, se o termo for "João", ele encontrará "João Silva" e "Maria João".

- Else: Se o parâmetro nome não estiver na requisição, a função retorna todos os professores cadastrados.

- Serializer = CadastroSerializer(professores, many=True): A lista de professores (filtrada ou não) é convertida para JSON com o serializador CadastroSerializer.

- Return Response(serializer.data, status=status.HTTP_200_OK): Por fim, a lista de professores é retornada com o status 200 (OK), indicando que a busca foi realizada com sucesso.

## Função de Listagem e Criação

As funções permitem que você liste todos os professores (GET) e crie novos professores (POST). Elas trabalham com o modelo Cadastro e seu serializador, garantindo que a API seja capaz de manipular os dados corretamente.


```md
class ProfessoresView(ListCreateAPIView):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]
```

## Permitir Acesso a Professores Específicos

Essa view permite realizar operações de acesso, atualização e remoção de um professor específico, identificado por seu ID.

```md
class ProfessoresDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]
```

## Listagem e Criação de Disciplinas

Essa view permite buscar e filtrar professores pelo nome. Ela utiliza o DjangoFilterBackend para filtragem avançada e o SearchFilter para permitir uma pesquisa simples baseada no nome do professor.
```md
class ProfessoresSearchView(ListAPIView):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['nome']
```

## Manipulação de Disciplinas Específicas

Além de listar e criar disciplinas, você também pode recuperar, atualizar e deletar uma disciplina específica usando os endpoints corretos.
```md
class DisciplinasView(ListCreateAPIView):
    queryset = Disciplinas.objects.all()
    serializer_class = DisciplinaSerializer
    permission_classes = [IsAuthenticated]
```

## Listagem e Criação de Ambientes

Aqui, você tem a possibilidade de listar e criar ambientes (como salas de aula, laboratórios, etc.). O modelo Ambiente é usado para representar esses dados. Também é possível acessar o detalhe de um ambiente, onde você pode ver informações detalhadas sobre o espaço, como capacidade e responsável pela gestão.
```md
class DisciplinaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Disciplinas.objects.all()
    serializer_class = DisciplinaSerializer
    permission_classes = [IsAuthenticated]
```

## Acesso, Atualização e Remoção de uma Turma Específica

Permite acessar os dados de uma turma específica, além de atualizá-la ou removê-la.
```md
class TurmaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer
    permission_classes = [IsAuthenticated]

```