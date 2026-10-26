# Contributing

How we work on this project. Read it once before your first change.

## 1. First-time setup

You only do this once.

1. Install **Node.js 24** or newer and **Git**.
2. Clone the repo and install everything:

   ```bash
   git clone https://github.com/Zareia/WebDevelopment_Project_CSE343_Fall26.git
   cd WebDevelopment_Project_CSE343_Fall26
   npm install
   ```

3. Create your environment file:

   ```bash
   cp server/.env.example server/.env
   ```

   Ask the team for the MongoDB connection string and put it in `MONGO_URI`.
   **Never commit `server/.env`** or share it publicly. It holds the database password.

4. Start everything:

   ```bash
   npm run dev
   ```

   - API: http://localhost:5000/api (docs at `/api/docs`)
   - Attendee app: http://localhost:5173
   - Organizer app: http://localhost:5174

   Stop it with **Ctrl + C**.

## 2. Every time you work on something

**Never work directly on `main`.** Each task gets its own branch.

1. Get the latest `main`:

   ```bash
   git checkout main
   git pull
   npm install
   ```

2. Create a branch for your task:

   ```bash
   git checkout -b feature/event-search
   ```

3. Write your code. Commit small steps as you go:

   ```bash
   git add .
   git commit -m "Add event search endpoint"
   ```

4. Before pushing, run the checks (all must pass):

   ```bash
   npm run lint
   npm run typecheck
   npm test
   ```

5. Push your branch:

   ```bash
   git push -u origin feature/event-search
   ```

6. On GitHub, open a **Pull Request** into `main`, describe what you did, and ask a teammate to review it.
7. After it is approved, merge it, then delete the branch.

## 3. Naming

**Branches**: `type/short-description` in lowercase with hyphens.

| Type        | Use it for                  | Example                       |
| ----------- | --------------------------- | ----------------------------- |
| `feature/`  | new functionality           | `feature/organizer-dashboard` |
| `fix/`      | bug fixes                   | `fix/login-error-message`     |
| `docs/`     | documentation only          | `docs/api-endpoints`          |
| `refactor/` | code cleanup, same behavior | `refactor/booking-service`    |

**Commit messages**: short, start with a verb, say what changed.

- ✅ `Add ticket type form to organizer app`
- ✅ `Fix booking list not refreshing after cancel`
- ❌ `update`, `fixes`, `asdf`

**Code**

- Files and variables: `camelCase`. React components: `PascalCase` (`EventCard.tsx`).
- MongoDB fields: `camelCase` (`startsAt`, `createdAt`).

## 4. Where code goes

| You are adding...             | Put it in                                      |
| ----------------------------- | ---------------------------------------------- |
| An API route                  | `server/src/routes/`                           |
| The handler for that route    | `server/src/controllers/`                      |
| Business logic                | `server/src/services/`                         |
| A Mongoose model              | `server/src/models/`                           |
| Request validation            | `server/src/validators/`                       |
| An API test                   | `server/test/`                                 |
| API documentation for a route | `server/src/docs/swagger.ts`                   |
| A page in an app              | `apps/<attendee or organizer>/src/pages/`      |
| A reusable UI piece           | `apps/<attendee or organizer>/src/components/` |
| Types used by server and apps | `packages/shared/src/`                         |
| Diagrams, docs, deliverables  | `docs/`                                        |

To add a package to one part only, use `-w`:

```bash
npm install some-package -w server
npm install some-package -w attendee
```

## 5. Pull request checklist

Before asking for a review, make sure:

- [ ] Lint, typecheck and tests pass
- [ ] You tested your change by running the app
- [ ] New API routes are added to the Swagger docs
- [ ] No `.env`, passwords or `console.log` debugging left in
- [ ] The PR is about **one** task (small PRs get reviewed faster)

## 6. Rules

- You must be able to **explain every line you commit**. It will be discussed.
- Use AI tools responsibly: understand the code before you commit it.
- Do not copy code from other teams.
- If you are stuck for more than an hour, ask in the group chat.
- Pull `main` often to avoid big merge conflicts.

## 7. Merge conflicts

If GitHub says your branch has conflicts:

```bash
git checkout main
git pull
git checkout your-branch
git merge main
```

Open the files Git lists, keep the correct code, remove the `<<<<<<<`, `=======` and `>>>>>>>` lines, then:

```bash
git add .
git commit
git push
```

If you are unsure which code to keep, ask the person who wrote the other change.
