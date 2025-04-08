# Loop Space <a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a> <br>

This is my personal fullstack practice repo using [**NX Monorepo**](https://nx.dev/). It's a sandbox environment where I experiment with various frontend and backend technologies, building raw implementations and testing ideas. This repo is managed using Nx, allowing me to organize all apps and libraries within a single monorepo.

## Purpose

This is not a production-ready project — it's a **raw practice ground** where I:
- Explore how different frameworks work
- Try out component libraries and state management
- Build shared utilities across apps
- Connect frontends to a NestJS backend
- Learn and make mistakes in a controlled space

## Note
Expect messy code and lots of WIP — this is where I break things to learn how to fix them. Feel free to clone, explore, and use as a reference if you're also diving into multi-framework development with Nx.

#### Requirments
- Node `22.14.0`
- Nx `v20.7.1`
  > In order to available `nx` command globally in machine you have install nx via `npm install -g nx`

## How to
- How to generate Apps [**Nx Plugin Registry**](https://nx.dev/plugin-registry)
- How to generate Library 
    ```bash
    nx g @nx/angular:library libs/LIBRARY_NAME
    ```
- How to remove Library 
    ```bash
    nx g @nx/workspace:remove LIBRARY_NAME
    ```
- [Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!


## Serve App

To run the dev server for your app, use:

```sh
npx nx serve APP_NAME
```

To create a production bundle:

```sh
npx nx build APP_NAME
```

To see all available targets to run for a project, run:

```sh
npx nx show project APP_NAME
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.
You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
  
## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
