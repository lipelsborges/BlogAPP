# 📌 Blog de Node

Um sistema de Blog simples e funcional desenvolvido com a **stack Node.js**, utilizando o framework Express para o backend e o banco de dados MongoDB para persistência. O projeto é um modelo de arquitetura MVC focado em demonstrar o ciclo completo de um aplicativo web, incluindo autenticação segura e gerenciamento de conteúdo.

## 🚀 Tecnologias e Dependências

| Pacote | Versão | Função |
| :--- | :--- | :--- |
| **Node.js** | `v22.18.0` | Ambiente de execução. |
| **Express.js** | `^5.1.0` | Framework web principal. |
| **Mongoose** | `^8.19.2` | ODM para comunicação com MongoDB. |
| **Passport.js** | `^0.7.0` | Framework de autenticação. |
| **bcryptjs** | `^3.0.3` | Criptografia de senhas (Hashing). |
| **express-handlebars** | `^8.0.3` | Template engine (Views). |
| **bootstrap** | (Incluso no `public/`) | Estilização e responsividade (Versão 5). |
| **connect-flash** | `^0.1.1` | Mensagens de feedback temporárias (Flash Messages). |

## 📐 Arquitetura e Estrutura

O projeto adota o padrão **MVC (Model-View-Controller)** com a seguinte organização:

| Diretório | Conteúdo e Responsabilidade |
| :--- | :--- |
| `app.js` | Arquivo principal de configuração (servidor, middlewares, conexão DB). |
| `models/` | **Modelos Mongoose:** Schemas para `Categoria`, `Postagem` e `Usuário`. |
| `routes/` | **Controllers/Rotas:** Lógica de requisição-resposta (`admin.js`, `usuario.js`). |
| `views/` | **Views Handlebars:** Templates de página (HTML/CSS/Handlebars). |
| `config/` | Configurações do Passport (`auth.js`). |
| `helpers/` | Middlewares de segurança (`eAdmin.js`). |
| `public/` | Arquivos estáticos (CSS, JS, Imagens, Bootstrap). |

## 🔑 Segurança e Autenticação

### Modelos de Usuário

O modelo de `Usuário` (`models/Usuario.js`) define:
* **Autenticação:** Login via `email` e `senha`.
* **Segurança:** Senha armazenada em **hash** (criptografada) via `bcryptjs`.
* **Permissão:** Campo `eAdmin` (`0` ou `1`) para controle de acesso ao painel.

### Middleware de Segurança

O projeto utiliza um *middleware* **`eAdmin`** para proteger todas as rotas da área administrativa (`/admin`), garantindo que apenas usuários com a flag `eAdmin: 1` tenham acesso.

---

## ✨ Funcionalidades do Blog

### 1. Área Pública (Navegação)

| Rota | Tipo | Descrição |
| :--- | :--- | :--- |
| `/` | GET | **Home:** Lista as postagens mais recentes e exibe o Jumbotron de boas-vindas. |
| `/postagem/:slug` | GET | Exibe o conteúdo completo da postagem. |
| `/categorias` | GET | Lista o índice de categorias disponíveis. |
| `/categorias/:slug` | GET | Lista todas as postagens filtradas pela categoria. |

### 2. Gerenciamento de Conteúdo (Área Admin)

O acesso a todas as rotas em `/admin` é **restrito**.

#### Categorias (CRUD Completo)
| Ação | Rotas | Tipo |
| :--- | :--- | :--- |
| **Listar** | `/admin/categorias` | GET |
| **Criar** | `/admin/categorias/add` e `/admin/categorias/nova` | GET / POST |
| **Editar** | `/admin/categorias/edit/:id` e `/admin/categorias/edit` | GET / POST |
| **Deletar**| `/admin/categorias/deletar` | POST |

#### Postagens (CRUD Completo)
| Ação | Rotas | Tipo |
| :--- | :--- | :--- |
| **Listar** | `/admin/postagens` | GET |
| **Criar** | `/admin/postagens/add` e `/admin/postagens/nova` | GET / POST |
| **Editar** | `/admin/postagens/edit/:id` e `/admin/postagem/edit` | GET / POST |
| **Deletar**| `/admin/postagens/deletar/:id` | GET |

### 3. Autenticação

| Ação | Rotas | Tipo |
| :--- | :--- | :--- |
| **Registro** | `/usuarios/registro` | GET / POST |
| **Login** | `/usuarios/login` | GET / POST |
| **Logout** | `/usuarios/logout` | GET |

---

## ⚙️ Instalação e Execução

### Pré-requisitos

* Node.js (`v22.18.0` ou superior)
* MongoDB (Servidor rodando localmente na porta padrão)

### Passos

1. **Clonar o Repositório:**
   ```bash
   git clone [https://github.com/lipelsborges/BlogAPP]
   cd BlogAPP