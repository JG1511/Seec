# Atividade Seec 2025.2

Projeto simples, para utilizar as skills que irei utilizar no meu novo estágio de desenvolvimento 

Para rodar aplicação:

1. primeiro clono o repositorio:

```
git clone <repositorio_git>
```
2. Após clonar o repo, der um npm install, tanto no front-end/cliente, como no back-end também

```
npm install
```
3. Logo em seguida, rode o front e o back`
```
npm run dev
```
obs: é o mesmo comando para rodar o back e o front

4. Como o back e o front funcionando, rode o container do docker que contem o BD
```
docker-compose up -d
```
5. Por fim, provávevl que o bd não tenha numa migration registrada. Então rode o seguinte comando:
```
npx migrate prisma dev
```
obs: esté ultimo comando tem que está dentro da pasta do back-end
