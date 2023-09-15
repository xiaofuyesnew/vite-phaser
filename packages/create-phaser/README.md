# create-phaser

## Scaffolding Your First Vite Phaser Project

> **Compatibility Note** : Vite Phaser requires Node.js version lts or latest. Please upgrade if your package manager warns about it.

With NPM:

```bash
$ npm create phaser
```

With Yarn:

```bash
$ yarn create phaser
```

With PNPM:

```bash
$ pnpm create phaser
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Phaser demo project, run:

```bash
# npm 7+, extra double-dash is needed:
$ npm create phaser my-phaser-game -- --template demo

# yarn
$ yarn create phaser my-phaser-game --template demo

# pnpm
$ yarn create phaser my-phaser-game --template demo
```

Currently supported template presets include:

- `default`
- `demo`
- `extension`
- `electron`
- `tauri`
