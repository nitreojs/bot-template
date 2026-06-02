# bot-template

telegram bot template using puregram v3 (esm-only) with github actions as an auto-deployer to the server

requires node 22+

## installing deps

```sh
yarn add puregram @starkow/logger env-var
yarn add -D typescript tsx tsc-alias eslint eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-promise eslint-import-resolver-typescript @types/node @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## scripts

- `yarn dev` - run in watch mode via `tsx` (reads `.env` through node's native `--env-file`)

- `yarn build` - compile with `tsc` and rewrite `@/*` aliases via `tsc-alias`

- `yarn start` - run the compiled bot from `dist/`

- `yarn lint` - lint with eslint

## setting up `.github/workflows`

- `GH_PAT` - github personal access token with `repo` access

- `SERVER_HOST` - server IP

- `SERVER_USERNAME` - user's name on the server

- `SERVER_SSH_KEY` - self-explanatory, i guess

- `TELEGRAM_BOT_TOKEN` - self-explanatory, i guess

- `TELEGRAM_CHAT_ID` - where the bot will post deployment info

###### don't need github actions?

```sh
rm -rf .github
```

## starting fresh

don't want the template's commit history when you start your own project? nuke `.git` and re-init — every file stays in place, the history collapses to a single commit:

```sh
rm -rf .git
git init -b lord
git add .
git commit -m "init"
```

`-b lord` keeps the branch name the deploy workflow triggers on. this also drops the `origin` remote, so just point it at your own repo:

```sh
git remote add origin <your-repo-url>
```

## removing `git remote`

> only need this if you kept the history (skipped *starting fresh* above) and just want to swap the remote

```sh
git remote remove origin
```

don't forget to rename `.env.example` to `.env`!

```sh
mv .env.example .env
```
