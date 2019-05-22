# API Heroes

# Bibliotecas utilizadas

- Framework **Hapi.js**.
- Autenticação com Json Web Token **(JWT)**.
- Documentação com **Swagger**.
- Testes utilizando **Mocha**.
- Cobertura de código com **[instanbul](https://apiherois-walefe.herokuapp.com/coverage)**

### Utilizando a API.

  Para uso da api basta acessar a **[documentação](https://apiherois-walefe.herokuapp.com/documentation)** e seguir as iformações. É necessário realizar ***autenticação*** para consumo, para isso existe um usuário teste previamente cadastrado para acesso:
  
  ```json
{
  "username": "xuxadasilva",
  "password": "123"
}
```

### Clonando o repositório

Após o clone do repositório basta rodar o comando npm install na raiz do projeto para instalar as dependências, os bancos de dados postgres e mongodb foram utilizados a partir de um container docker sendo necessário o uso do mesmo.
