Use o comando yarn create next-app [nome] -e https://github.com/ExecutivosDigital/nextjs-layout

para formatar yarn prettier --write .

## Como Usar

Para criar o projeto utilize o comando abaixo substituindo o [nome] pelo nome do projeto:

```bash
# Criar Projeto
$  yarn create next-app [nome] -e https://github.com/ExecutivosDigital/nextjs-layout
```

Acesse a pasta criada:

```bash
# Acesse a pasta
$  cd [nome]
```

Adicione o repositório do GitHub do projeto:

```bash
# Adicione a remote origin
$  git remote add origin [link_do_repositório]
```

Crie a branch main:

```bash
# Criar branch
$  git branch -M main
```

Realize o primeiro push:

```bash
# Push
$  git push -u origin main
```

## Configurações Iniciais

1. Acesse o arquivo lib/axios.ts
    + `$ Altere a constante api_url para a url da API que será usada`
    + `$ Altere a constante token para "[nome_do_projeto]token"`

2. Acesse o arquivo styles/themes.ts
    + `$ Altere as cores primárias baseado no projeto do Figma`
    + `$ Altere as cores secundárias baseado no projeto do Figma`


