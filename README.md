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

1. Acesse o arquivo `lib/axios.ts`
    - Altere a constante `api_url` para a url da API que será usada
    - Altere a constante `token` para `[nome_do_projeto]token`

2. Acesse o arquivo `styles/themes.ts`
    - Altere as cores primárias baseado no projeto do Figma
    - Altere as cores secundárias baseado no projeto do Figma


## Boas praticas para organização de arquivos

1.  Bibliotecas que precisam de arquivos de configurações
    + Adicione as configurações em um arquivo na pasta `lib` com o nome da biblioteca
    
2.  Criação de componentes
    - Os componentes deverão ser criados em uma pasta localizada em `src/components`
    - Os componentes deverão ser divididos em Globais`(Pasta Global)` e componentes de páginas `(Page)`
    - Os nomes de pastas de componentes deverão iniciar com letra maiúscula
    - Componentes que são utilizados em mais de uma página deverão ser alocados na pasta Global
    - Componentes de páginas deverão ser organizados da seguinte maneira `src/components/[nome_da_página]/[nome_do_componente]`
    - Componentes deverão ser criados em três ocasiões:
        1. Quando esse componente está sendo utilizado em mais de uma tela.
        2. Quando esse componente possui uma lógica complexa de funcionamento que exige muitas linhas de código
        3. Quando a estilização desse componente é muito extensa e ocupa muito espaço no arquivo dá pagina e no arquivo de estilos.

