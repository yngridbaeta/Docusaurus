---
sidebar_position: 2
---


# Models

**Models** são representações das entidades do sistema, ou seja, **modelos de dados** que definem a estrutura e o comportamento dos dados no banco de dados. Os models são usados para mapear as tabelas do banco de dados e definir os campos, tipos de dados e relacionamentos entre as entidades. Cada classe model representa uma tabela e cada atributo da classe representa uma coluna dessa tabela.

Abaixo estão as classes que representam diferentes entidades no sistema escolar:


## Classe `Cadastro`

A classe **Cadastro** é responsável por representar as informações de um usuário no sistema.

- **ni**: Número de identificação do usuário (campo de texto com até 15 caracteres).
- **nome**: Nome do usuário (campo de texto com até 255 caracteres).
- **email**: Email do usuário (campo EmailField que garante a validade do formato de email).
- **cel**: Número de telefone do usuário (campo de texto com até 255 caracteres).
- **ocup**: Ocupação ou cargo (representado por um valor numérico).

### Exemplo de Model:

```python
class Cadastro(models.Model):
    ni = models.CharField(max_length=15)
    nome = models.CharField(max_length=255)
    email = models.EmailField()
    cel = models.CharField(max_length=255)
    ocup = models.FloatField()
```

## Classe Disciplina 

A classe **Disciplina** representa as matérias que tem na escola.

- **cod**: Código da disciplina (Campo de texto com até 100 caracteres).
- **disc**: Nome da disciplina (Campo de texto com até 100 caracteres).
- **ch**: Carga horária da disciplina (Campo em números inteiros).

### Exemplo de Model:
 ```python
class Disciplina(models.Model):
  cod = models.CharField(max_length=100)
  disc = models.CharFiels(max_length=100)
  ch = models.IntegerField()
```

## Classe Ambiente
A classe **Ambiente** descreve os ambientes onde as aulas podem ser realizadas.

- **cod**: Código do ambiente (Campo de texto com até 255 caracteres).
- **sala**: Nome da sala de aula (Campo de texto com até 255 caracteres).
- **cap**: Capacidade do ambiente, em número de alunos que a sala pode comportar.
- **resp**: Nome do responsável pela gestão do ambiente (Campo de texto com até 255 caracteres).
- **per**: Define o período que o ambiente estará disponível, isso é definido pela lista com as opções: 

```python
PERIODOS = [
  ('M', 'Manhã'), 
  ('T', 'Tarde'), 
  ('N', 'Noite'),
  ('I', 'Integral')
]
```

### Exemplo de Model:
```python
class Ambiente(models.Model):
  cod = models.CharField(max_length=255)
  sala = models.CharField(max_length=255)
  cap = models.IntegerFieled()
  resp = models.CharField(max_lenght=255)
  per = models.CharField(choices=PERIODOS, max_length, default="M")
```

## Classe Turma

A classe **Turma** representa as turmas de alunos em um curso específico.

### Exemplo de Model:

```python 
class Turma(models.Model):
  cod = models.CharField(max_length=255)
  turma = models.CharField(max_length=255)
```

## Classe Curso

A classe **Curso** representa os cursos e suas informações específicas.

- **cod**: Código do curso (Campo de texto com até 255 caracteres).
- **curso**: Nome do curso (Campo com no máximo 255 caracteres).
- **tipo**: Tipo de curso, isso é definido pela lista com as opções: 
```python
TIPOS = [
  ('CAI', 'Aprendizagem'), 
  ('CT', 'Técnico'), 
  ('CS', 'Superior'),
  ('FIC', 'Formação')
]
```
- **ha**: Horário de aula (Campo de texto com no máximo 255 caracteres).

### Exemplo de Model: 

```python
class Curso(models.Model):
  cod = models.CharField(max_length=255)
  curso = models.CharField(max_length=255)
  tipo = models.CharField(max_lenght=20, choices=TIPOS, default="CT")
  ha = models.CharField(max_length=255)
```
















