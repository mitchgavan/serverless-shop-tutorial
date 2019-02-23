# Serverless Shop Tutorial

[View demo](https://serverless-shop-demo.netlify.com/)

There's also an accompanying [tutorial blog post](https://mitchgavan.com/react-serverless-shop/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is based on [Create React App v2](https://github.com/facebookincubator/create-react-app) and [netlify-lambda v1](https://github.com/netlify/netlify-lambda). (For more information about Create react App, check their full [documentation](https://github.com/facebookincubator/create-react-app#create-react-app).)

The main addition is a new folder: `src/lambda`. Each JavaScript file in there will automatically be prepared for Lambda function deployment.

## Local Development

Before developing, clone the repository and run `npm install` from the root of the repo to install all dependencies.

### Option 1: Starting both servers at once

Most people should be able to get up and running just by running:

```bash
npm start
```

This uses [npm-run-all](https://github.com/mysticatea/npm-run-all#readme) to run the functions dev server and app dev server concurrently.

### Option 2: Start each server individually

**Run the functions dev server**

From inside the project folder, run:

```
npm start:lambda
```

This will open a local server running at `http://localhost:9000` serving your Lambda functions, updating as you make changes in the `src/lambda` folder.

You can then access your functions directly at `http://localhost:9000/{function_name}`, but to access them with the app, you'll need to start the app dev server. Under the hood, this uses `react-scripts`' [advanced proxy feature](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#configuring-the-proxy-manually) with the `setupProxy.js` file.

**Run the app dev server**

While the functions server is still running, open a new terminal tab and run:

```
npm run start:app
```

This will start the normal create-react-app dev server and open your app at `http://localhost:3000`.

Local in-app requests to the relative path `/.netlify/functions/*` will automatically be proxied to the local functions dev server.
