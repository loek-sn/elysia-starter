# Elysia Starter Template

A starter template for building backend applications with [Elysia](https://elysiajs.com/).

## Features

- ⚡ Fast and lightweight Elysia server
- 🛠️ Ready for customization
- 🧪 Easy to extend with plugins and middleware

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)

### Installation

```bash
pnpm install
# or
npm install
```

### Running the Server

```bash
pnpm start
# or
npm start
```

The server will start on [http://localhost:3000](http://localhost:3000).

## Project Structure

```
.
├── src/
│   ├── index.ts
│   ├── db/
│   │   ├── auth.schema.ts
│   │   ├── drizzle.ts
│   │   └── schema.ts
│   ├── lib/
│   │   └── auth.ts
│   ├── plugins/
│   │   └── auth.plugin.ts
│   └── routes/
├── package.json
├── README.md
├── tsconfig.json
├── .env
├── .gitignore
└── bun.lock
```

### Environment Variables

Create a `.env` file in the project root with the following variables:

```env
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
DATABASE_URL=
```
Fill in the values as appropriate for your environment.

## Customization

- Add your routes and logic in `src/index.ts`.
- Install Elysia plugins as needed.

## Learn More

- [Elysia Documentation](https://elysiajs.com/docs)
- [GitHub Issues](https://github.com/elysiajs/elysia/issues)

## License

MIT
