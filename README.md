# Curriculum Vitae (CV)

This is a demo project.

It use Nx monorepository.

It consists of library database with Prisma and API app.

The API app:

- consists of two modules, profile module and experience module
- use CQRS pattern
- use DDD structure
- use Apollo for Graphql implementation

PS tests are not implemented for now.

## Live example

You can see the live example here https://nest-profile.relaxdev.ru/graphql

## First Run Locally

You should have Docker on our PS!

First run Postgres with Docker

```sh
docker-composer up
```

When run database creation

```sh
npm run database-structure-update
```

When start the api locally

```sh
npm run serve:api
```

## Run tasks

Generate prisma models

```shell
npm run generate-prisma
```

Push prisma models in database

```shell
npm run migrate-prisma
```

Push seeds in to database

```shell
npm run seed-prisma
```

To run the dev server for your app, use:

```sh
npm run serve:api
```

To create a bundle:

```sh
npm run build:api
```

To see all available targets to run for a project, run:

```sh
npx nx show project api
```

## Deploy commands

Please note, you should provide `DATABASE_URL` in you production environment before build.

Build first

```sh
npm run build
```

Then start

```sh
npm run start
```
