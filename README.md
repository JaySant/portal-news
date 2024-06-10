# Portal de Noticias

O Projeto é um portal de noticias utilizando o [Next.js](https://nextjs.org). O site consome a API do [NewsApi](https://newsapi.org) para trazer as principais noticias do dia.

![Capa](public/capa.png)

## Vamos começar

Essas são as instruções para obter uma cópia do projeto operando na sua máquina local.

### Pré-requisitos

* Node.js
* Conta na NewsAPI para obter a chave de API

### 🔧 Instalação

1. Clone o repositório

```bash
git clone https://github.com/"Seu Usuario"/portal-news.git
cd portal-news
```
2. Instale as dependências:
```bash
npm install
```
3. Configure a chave de API
* Adicione a sua chave API no arquivo `.env.local` localizada raiz do projeto:
```bash
NEXT_PUBLIC_API_KEY=sua-chave-de-api-aqui
```
### Desenvolvimento
Para rodar em modo desenvolvimento
```bash
npm run dev
```

## Construído com:
* [Next.js](https://nextjs.org)
* [NewsApi](https://newsapi.org)
* [React](https://react.dev)
* [Css Modules](https://github.com/css-modules/css-modules)

### Licença
Este projeto está licenciado sob a Licença MIT. Para mais informações [LICENSE](https://opensource.org/license/mit)

