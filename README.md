# Dashboard de Gerenciamento de Prescrições

![image](https://github.com/user-attachments/assets/522eef1d-2fde-470a-96b4-50fdf3d3cba0)

## Introdução

Um dashboard que gerencia prescrições de um médico/profissional de forma completa, com sistema de filtro e paginação.

<div>
<br/>
<img src="https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=2563EB&style=for-the-badge"/> <img src="https://img.shields.io/static/v1?label=STATUS&message=DEVELOPING&color=2563EB&style=for-the-badge"/> <img src="https://img.shields.io/static/v1?label=NODE&message=V20.11.1&color=2563EB&style=for-the-badge"/>
</div>

## Tecnologias

- Linguagem: [TypeScript](https://www.typescriptlang.org/)
- Biblioteca: [ReactJS](https://react.dev/)
- Framework: [Next.js](https://nextjs.org/)
- Componentes: [Shadcn-ui](https://ui.shadcn.com/)
- Conexão com api: [Axios](https://axios-http.com/docs/intro)
- Gerenciamento de estados http: [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- Gerenciamento de formulários: [React Hook Form](https://www.react-hook-form.com/)
- Validação de dados: [Zod](https://zod.dev/)

## Funcionalidades

- [x] Cadastro do usuário com nome, email e senha.
- [x] Autenticação com email e senha.
- [x] Segurança de rotas via token de autenticação JWT.
- [x] Listar prescrições de forma paginada.
- [x] Filtro completo de prescrições.
- [x] Criar prescrições.
- [x] Editar prescrições.
- [x] Deletar prescrições.
- [ ] Gráficos com informações sobre prescrições.
- [ ] Sistema de notificações.

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
