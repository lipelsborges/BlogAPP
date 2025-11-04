# 📌 Blog de Node

Um sistema de Blog simples e funcional desenvolvido com a **stack Node.js**, utilizando o framework Express para o backend e o banco de dados MongoDB para persistência. O projeto foca em demonstrar o ciclo completo de um aplicativo web, incluindo autenticação, validação de dados e segurança.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias principais e as dependências listadas no `package.json`:

* **Backend:** Node.js (`v22.18.0`)
* **Framework:** Express.js (Roteamento e Middleware)
* **Banco de Dados:** MongoDB (via Mongoose ODM)
* **Autenticação:** Passport.js (Estratégia Local)
* **Segurança:** bcryptjs (Criptografia de Senha)
* **Template Engine:** Handlebars (Estrutura da View)
* **Estilização:** Bootstrap (Design, Componentes e Responsividade)
* **Middleware:** `body-parser` (Tratamento de dados POST)
* **Sessões:** `express-session` (Gerenciamento de Sessão)
* **Mensagens Temporárias:** `connect-flash` (Exibição de mensagens)

## ✨ Funcionalidades Principais

* **Registro de Usuários:** Cadastro de novos usuários com validação completa.
* **Login e Logout:** Autenticação de usuários usando Passport.js e Sessões.
* **Segurança:** Senhas armazenadas de forma segura (Hashed) com bcryptjs.
* **Mensagens Flash:** Exibição de mensagens de sucesso, erro e aviso após redirecionamentos.
* **Estrutura MVC Simplificada:** Separação de rotas, modelos e views.
* **Design:** Interface responsiva e moderna graças ao Bootstrap.

## ⚙️ Como Instalar e Rodar o Projeto

### Pré-requisitos

Você precisará ter o **Node.js** e o **MongoDB** instalados em seu sistema.

* Node.js (versão mínima `v22.18.0`)
* MongoDB (Instale o Community Server e garanta que ele está rodando)

### 1. Clonar o Repositório

```bash

git clone [https://github.com/lipelsborges/BlogAPP.git](https://github.com/lipelsborges/BlogAPP.gits)
cd BlogAPP