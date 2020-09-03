# ServeSide CLI

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Configuration](#configuration)
- [Help](#help)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation
Can be installed globally

```bash
npm i -g @serveside/cli
# or
yarn global add @serveside/cli
```

Can can be used like so:

```bash
serveside [--service=service]
```

Can also be used via `npx` like so:

```bash
npx @serveside/cli [--service=service]
```

## Configuration

Can create a config file in the root of your project called `.servesiderc` or `.serveside.json`

Can contain the service that the cli will install

For example:
```json
{
  "service": "svelte"
}
```

By default if no service is set, it will install the `react` service.

## Help

Can view the help in the terminal by passing `--help` to the cli
