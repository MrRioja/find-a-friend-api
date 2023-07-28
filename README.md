<p align="center">
  <img src=".github/logo.png" alt="Logo" width="300"/>
  <br>
</p>
<h3 align="center">
Leve a felicidade para o seu lar!
</h3>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=find&message=friend&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/find-a-friend-api?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/find-a-friend-api?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/find-a-friend-api?color=blueviolet&style=for-the-badge">
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#find-a-friend-api">Find a Friend API</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

## Sobre

Projeto desenvolvido durante o desafio do módulo III do bootcamp Ignite da Rocketseat cujo objetivo foi colocar em prática todo o conteúdo estudado durante o módulo.

## Find a Friend API

A API proposta nesse desafio tem como cliente um aplicativo criado em React o qual pode ser visto no link abaixo:

[![Figma badge](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/community/file/1220006040435238030)

Nesse desafio desenvolveremos uma API para a adoção de animais, a FindAFriend API, utilizando SOLID e testes.
O propósito desse repositório é conter o código da API dessa aplicação, colocando todo o conteúdo aprendido durante o módulo em prática e cumprir as regras abaixo para a API:

### Regras da aplicação

- [ ] Deve ser possível cadastrar um pet.
- [ ] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade.
- [ ] Deve ser possível filtrar pets por suas características.
- [ ] Deve ser possível visualizar detalhes de um pet para adoção.
- [x] Deve ser possível se cadastrar como uma ORG.
- [x] Deve ser possível realizar login como uma ORG.

### Regras de negócio

- [ ] Para listar os pets, obrigatoriamente precisamos informar a cidade.
- [x] Uma ORG precisa ter um endereço e um número de WhatsApp.
- [ ] Um pet deve estar ligado a uma ORG.
- [ ] O usuário que quer adotar, entrará em contato com a ORG via WhatsApp.
- [ ] Todos os filtros, além da cidade, são opcionais.
- [x] Para uma ORG acessar a aplicação como admin, ela precisa estar logada.

As requisições para testar a API estão disponíveis no botão abaixo:

[![Run in Insomnia](https://insomnia.rest/images/run.svg)]()

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/find-a-friend-api.git

# Acesse a pasta do projeto no terminal/cmd
$ cd find-a-friend-api

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# O servidor iniciará na porta 3333 ou na porta definida no arquivo .env na variável PORT - acesse <http://localhost:3333>
```

## Tecnologias

[![My Skills](https://skillicons.dev/icons?i=nodejs,express,js,jest,postgres,ts&perline=10&theme=dark)](https://skillicons.dev)

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
