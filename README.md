# Deploy to Zoho Catalyst

This project builds as a static Vite site. Catalyst serves the generated `dist/` directory.

## First-time setup

1. Install the [Zoho Catalyst CLI](https://www.npmjs.com/package/zcatalyst-cli): `npm install -g zcatalyst-cli`.
2. Sign in and link this folder to your Catalyst project:

   ```sh
   catalyst login
   catalyst init
   ```

   Select your existing Catalyst project when prompted.

3. Install the project dependencies: `npm install`.

## Deploy

Run:

```sh
npm run deploy
```

This builds the site and deploys only the Catalyst web client. To build without deploying, run `npm run build`.
