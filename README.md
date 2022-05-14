# movie-api

dependencias utilizadas
- yarn add express

- yarn add typescript ts-node-dev @types/express -D 
(ts-node-dev para ajudar a converter os aquivos js para ts | @types/express para as tipagens do express)

- yarn tsc --init 
(inicializar o ts dentro da aplicação)

- yarn add typeorm reflect-metadata pg
(reflect-metadata é para utilizarmos notações no projeto, e o pg é o driver do postgres)

- yarn add uuid
(para gerar os uuid v4)

- yarn add @types/uuid -D
(tipagem do uuid)

-- configurando para o ts-node-dev rodar nossa aplicação, fazer as conversões, e usando o --transpile-only para desativar as checagens automáticas
"scripts": {
     "dev": "ts-node-dev --transpile-only src/server.ts"
}


Migrations:
Um histórico de tudo que estamos rodando dentro do banco de dados.
Ajuda a mandar o banco de dados atualizado.
Todos da equipe conseguem utilizar um banco de dados atualizado, para que não tenha conflitos. 
Criando migrations: yarn typeorm migration:create -n NomeMigration
Rodando migrations: yarn typeorm migration:run
Reverter a ultima migration executada: yarn typeorm migration:revert