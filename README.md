# nestjs-workpsace-cli

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run ./src/index.ts
```

This project was created using `bun init` in bun v1.1.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

SCRIPTS -> 

Init project

Module

Кейс:
Хочу добавить модуль аутентификаци.

##### Зависимости:
`npm install --save @nestjs/jwt`

##### Импорт глобальной библиотеки:
```typescript
  JwtModule.registerAsync({
    global: true,
    inject: [EnvService],
    useFactory: (envService: EnvService) => ({
      secret: envService.get('SECRET_KEY'),
    }),
  }),
```