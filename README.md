# bot-template

telegram bot template using puregram with github actions as an auto-deployer to the server

## installing deps

```sh
yarn add -D typescript ts-node tsc-alias tsconfig-paths eslint eslint-config-standard eslint-plugin-import eslint-plugin-n eslint-plugin-perfectionist eslint-plugin-promise @types/node @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

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

## removing `git remote`

```sh
git remote remove origin
```

don't forget to rename `.env.example` to `.env`!

```sh
mv .env.example .env
```
