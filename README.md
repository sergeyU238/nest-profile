# CurriculumVitae

This is a demo project
It consists of library database with prisma for project and API app.
The API app:

- consists of two modules, profile module and experience module
- use CQRS pattern
- use DDD structure
- use Apollo for Graphql implementation

PS tests are not implemented for now.

## First Run

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
npm run nx serve api
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

Push seeds in to prisma

```shell
npm run seed-prisma
```

To run the dev server for your app, use:

```sh
npx nx serve api
```

To create a production bundle:

```sh
npx nx build api
```

To see all available targets to run for a project, run:

```sh
npx nx show project api
```
