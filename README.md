# circle-book 

This is a simple book shop website. 

## About The Project

The landing page shows all the available books (if its not in stock, it will be highlighted  with "No stock" in red). Customer can add a book to shopping cart OR in the detail page. They can visit the detail page by click "Detail" button.

The detail page contains more information (e.g. ISBN) and "Purchase now" button. Once customer buy it, it will pop up a message showing successful, and the availability will be updated instantly. If customer buy the last book, "Purchase now" button will be disabled and "Add to Cart" button will change to "Out of Stock".

Please note that the shopping cart at this stage only shows how many books being added but cannot be used for purchase. 

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
