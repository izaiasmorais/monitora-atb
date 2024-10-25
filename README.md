# Dashboard de Gerenciamento de Prescrições

## Introdução
Um dashboard que gerencia prescrições de um médico/profissional de forma completa, com sistema de filtro, paginação e métricas.

## Tecnologias
- Linguagem: [JavaScript]([https://nodejs.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript))

## Funcionalidades

- [ ] Cadastro do usuário com nome, email e senha.
- [ ] Autenticação com email e senha.
- [ ] Recuperação de senha.
- [x] Segurança de rotas via token de autenticação JWT.
- [x] Listar prescrições de forma paginada.
- [x] Filtro completo de prescrições.
- [x] Criar prescrições.
- [x] Editar prescrições.
- [x] Deletar prescrições.

## Instalação
Clone o repositório:

```bash
git clone https://github.com/izaiasmorais/prescriptions
cd prescriptions
```

Instale as dependências:

```bash
pnpm install
```

Configure o arquivo .env com suas credenciais:

```env
NEXT_PUBLIC_DEV_API_URL=
```

## Executando o Projeto
Inicie o servidor:

```bash
pnpm dev
```
