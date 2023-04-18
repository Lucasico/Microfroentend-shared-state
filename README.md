# Microfrontend Shared State
Este repositório contém um exemplo simples de compartilhamento de estado em microfrontends, utilizando as tecnologias Vite e Module Federation e React.

## Visão geral
O objetivo deste projeto é demonstrar como é possível compartilhar o estado entre microfrontends de forma desacoplada, utilizando a técnica de Module Federation. Module Federation é um recurso disponível no Webpack  que permite que módulos sejam compartilhados entre diferentes aplicações em tempo de execução.


O projeto contém quatro microfrontends sendo eles:

- **content**: Um Microfrotend que exponhe para uso um state e um App **Content**

- **Footer**: Um Microfrotend que exponhe para uso um App **Footer** e que consome remotamente o state exposto pelo content

- **Header**: Um Microfrotend que exponhe para uso um App **Header** e que consome remotamente o state exposto pelo content

- **Main-App**: um Microfrotend container que por sua vez é responsável por receber e renderizar os MCF acima

## Stack
- React como lib de contrução de UI [Link-Doc](https://react.dev/)
- Zustand como lib para gerenciamente de stado global [Link-Doc](https://docs.pmnd.rs/zustand/getting-started/introduction)
- Vite como empacotador dos MFC(content, Footer e Header) [Link-Doc](https://vitejs.dev/guide/)
- Webpack como empacotador do MFC MainApp [Link-Doc](https://webpack.js.org/)
- vite-plugin-federation como plugin do vite para suporte ao module federation nativo do webpack [Link-Doc](https://github.com/originjs/vite-plugin-federation)
- module federation como gerenciador dos builds distribuidos [Link-Doc](https://webpack.js.org/concepts/module-federation/)

## Executando o projeto

1. Clone este repositório em sua máquina:

```
git clone https://github.com/Lucasico/Microfroentend-shared-state.git
```

2. Entre dentro de cada pasta (content, header e footer) e instale as dependencias com o comando:

```
pnpm install
```

3. Instale as dependencias do Main-App com o comando:

```
yarn install
```

4. Entre dentro de cada pasta (content, header e footer) e gere o build e rode o preview:

```
pnpm build && pnpm preview
```

5. Por fim basta agora executar o main-host com o comando:

```
yarn start
```

**e a magica acontecera 😎🫣**


## Contribuindo

Para contribuir com este repositório, siga os seguintes passos:

1. Crie um fork deste repositório em sua conta no GitHub.

2. Crie uma nova branch para suas alterações:
```
git checkout -b minha-nova-feature
```
3. Faça as alterações desejadas no código.

4. Faça o commit de suas alterações:
```
git commit -m "Adiciona nova funcionalidade"
```
5. Envie as alterações para seu repositório no GitHub:
```
git push origin minha-nova-feature
```
6. Abra um pull request para o repositório original.


## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais informações.

## Autor
**Lucasico**, vulgo eu kkk 😅






