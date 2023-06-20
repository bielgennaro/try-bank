
## Documentação da API
A API tem quatro tabelas, User, Employer, Employees e Manager. Abaixo estará especificado como usar as rotas e sua descrição.
# Rotas Users

```http
  GET /users/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | Lista todos os usuários |

```http
  GET /users/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | Lista o usuário referente ao ID recebido |

```http
  POST /users/create
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | Registra um usuário no banco de dados |


```http
  PUT /users/update/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id, email, name, password`      | `integer, string, string, string` | Atualiza um usuário referente ao ID passado |

```http
  DEL /users/delete/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `Integer` | Deleta um usuário |

# Rotas Employers

```http
  GET /employers/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | Lista todos os empregadores |

```http
  GET /employers/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | Lista o empregador referente ao ID recebido |

```http
  POST /employers/contract
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name, email, password`      | `string, string, string` | Registra um empregador no banco de dados |


```http
  PUT /employers/update/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id, email, name, password`      | `integer, string` | Atualiza um empregador referente ao ID passado |

```http
  DEL /employers/delete/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `Integer` | Deleta um empregador |

# Rotas Employees

```http
  GET /employees/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | Lista todos os funcionários |

```http
  GET /employees/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | Lista o funcionário referente ao ID recebido |

```http
  POST /employees/register
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name, email, isWorking, employerId`      | `string, string, boolean, integer` | Registra um funcionário no banco de dados - **OBRIGATÓRIO** Existir um empregado registrado no campo `employerId` |


```http
  PUT /employees/update/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id, email, name, password`      | `integer, string, string, string` | Atualiza um funcionário referente ao ID passado |

```http
  DEL /employees/delete/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `Integer` | Deleta um funcionário |


# Rotas Manager

```http
  GET /manager/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | Lista todos os gerentes  |

#### Retorna um item

```http
  GET /manager/list/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | Lista todos os gerentes cadastrados no ID recebido |

```http
  POST /manager/register
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name, email, password`      | `string, string, string` |Cadastra um novo gerente no banco de dados |

```http
  PUT /manager/update/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id, name, email, password`      | `integer, string, string, string` |Atualiza os dados do ID recebido |

```http
  DEL /manager/delete/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` |Deleta o gerente na qual se refere o ID recebido |








