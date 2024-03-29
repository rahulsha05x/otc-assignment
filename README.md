# Assignment

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Start the application

Run `npx nx serve otc-trading-ui` to start the development server. Happy coding!

## Build for production

Run `npx nx build otc-trading-ui` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Approach taken

* I used formik and Yup to create form and perform validations for fields.
* Currently using static json to fetch price as per symbol selected.
* On submit trade inconsistencies check is performed.
* If Submit is successfull data is logged on console.

Things to improve.
* Add service call to fetch data for token name.
* Make token name field auto complete.
* format currency fields.
* add more tests.

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)
