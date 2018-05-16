# Teste com AngularJS

## Utilizando

Para começar a utilizar clone o repositório e instale as dependências

```
git clone https://github.com/marcosvor/testeAngularJS.git
cd testeAngularJS
```

### Instalar dependencias

```
npm install
```

### Rodar applicação

```
npm start
```

Coloque no browser: [`localhost:8000`]

## Layout do diretório

```
app/                    --> todos os arquivos da aplicação
  app.css               --> estilo geral
  form/                --> pasta com os arquivos da view de formulario
    form.html            --> template
    form.js              --> controller
  form/                --> pasta com os arquivos da view de formulario
    form.html            --> template
    form.js              --> controller
  form/                --> pasta com os arquivos da view de formulario
    form.html            --> template
    form.js              --> controller
  form/                --> pasta com os arquivos da view de formulario
    form.html            --> template
    form.js              --> controller
  app.js                --> modulo principal da aplicação
  index.html            --> arquivo de layout principal
  index-async.html      --> carrega os arquivos js assincronamente
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```