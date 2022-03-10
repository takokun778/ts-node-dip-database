## TypeORM

```baah
yarn add typeorm

cd src/infra/typeorm

npx typeorm init --database postgres

npx typeorm entity:create --name user

yarn ts-node node_modules/.bin/typeorm migration:generate --name create-user-table

yarn ts-node node_modules/.bin/typeorm migration:run

yarn start src/index.ts
```

## Prisma

```bash
yarn add --dev prisma

cd src/infra/prisma

npx prisma init

npx prisma db pull

yarn add @prisma/client

npx prisma generate

export DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres?schema=public" && yarn start src/index.ts
```