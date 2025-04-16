---
sidebar_position: 3
---

# Serializers

Um Serializer é um componente que converte dados complexos, como objetos, em formatos simples como JSON ou XML, facilitando a transmissão, armazenamento e posterior reconstrução desses dados. Esse processo é chamado de serialização. 

## Passos a seguir

Tenha em seu projeto o REST framework caso não tenha   ` pip install djangorestframework `:

## Importações importantes
```md title="serializer.py"
from rest_framework import serializers 
from .models import * 
```
A primeira linha serve para importar o modulo serializers do Django REST Framework que tem a funcionalidade de converter objetos definidos do Django em formato JSON.
Já na segunda linha vai importar tudo o que existir dentro do models.py

## Classe Cadastro
```md title="serializer.py"
class CadastroSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Cadastro 
        fields = '__all__' 
```
A class CadastroSerializers herda a serializers.ModelSerializer que usa modelo Django Cadastro para gerar campos automatico 

A class meta define configurações internas do serializer  

Model = cadastro => Ele se baseia no modelo definido como Cadastro  

fields = '__all__' → Inclui todos os campos do modelo Cadastro na API. 

## Classe Disciplina

```md title="serializer.py"
class DisciplinaSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Disciplinas 
        fields = '__all__' 
```

## Classe Ambiente

```md title="serializer.py"
class AmbienteSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Ambiente 
        fields = '__all__' 
```

## Classe Turma

```md title="serializer.py"
class TurmaSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Turma 
        fields = '__all__' 
```

## Classe Curso

```md title="serializer.py"
class CursoSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Curso 
        fields = '__all__' 
```

Todas as classes vão seguir uma mesma estrutura o que as direncia é o caminho na qual se refere e o formato das tabelas.
Com essa estrutura feita o serializer vai estar completo podendo dar sequencia para as outras partes do projeto.

O que foi definido em `serializer.py` vai ser **usada na Views**.