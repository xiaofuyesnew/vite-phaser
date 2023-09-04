import { resolve } from 'path'
import { fileURLToPath } from 'url'
import prompts from 'prompts'
import minimist from 'minimist'
import fs from 'fs-extra'
import { lightYellow, lightGreen, lightBlue, lightMagenta, lightRed, lightCyan, lightGray } from 'kolorist'
import validate from 'validate-npm-package-name'



(async () => {
  const { copy, moveSync, readJsonSync, writeJsonSync } = fs

  const templates = {
    default: {
      dir: 'vite-phaser',
      color: lightCyan
    },
    demo: {
      dir: 'vite-phaser-demo',
      color: lightMagenta
    },
    extension: {
      dir: 'vite-phaser-extension',
      color: lightRed
    },
    electron: {
      dir: 'vite-phaser-electron',
      color: lightBlue
    },
    tauri: {
      dir: 'vite-phaser-tauri',
      color: lightYellow
    },
  }

  const templateRoot = resolve(fileURLToPath(import.meta.url), '../..')

  const argv = minimist(process.argv.slice(2))

  // if (argv._.length) {
  //   execData.projectName = argv._[0]
  // }

  // if (argv.template && typeof argv.template === 'string' && Object.keys(templates).includes(argv.template)) {
  //   execData.templateDir = resolve(templateRoot, templates[argv.template])
  // } else if (argv.template) {
  //   console.log(lightYellow(`⚠ No such template name in ${lightGreen(JSON.stringify(Object.keys(templates)))}, using ${lightGreen(`default`)} instead.`))
  //   execData.templateDir = resolve(templateRoot, templates.default)
  // }

  // console.log(execData)

  // const targetDir = resolve(process.cwd(), execData.projectName)

  // copy(execData.templateDir, targetDir)
  //   .then(() => {
  //     console.log('success')
  //     const originPackage = readJsonSync(resolve(targetDir, 'package.json'))
  //     originPackage.name = execData.projectName
  //     writeJsonSync(resolve(targetDir, 'package.json'), originPackage, {spaces: 2})
  //     moveSync(resolve(targetDir, '_gitignore'), resolve(targetDir, '.gitignore'))
  //   }).catch((err) => {
  //     console.log('fail', err)
  //   })

  const choseTemplateConfig = {
    message: 'Chose a template:',
    name: 'template',
    type: 'select',
    choices: Object.keys(templates).map(item => ({
      title: templates[item].color(item),
      value: item
    })),
  }

  const response = {
    projectName: '',
    template: ''
  }

  // console.log(argv)

  // console.log(process.cwd())

  // console.log(fileURLToPath(import.meta.url))

  // console.log(resolve(fileURLToPath(import.meta.url), '../..', `vite-phaser-${argv.template}`))

  if (!argv.template || typeof argv.template !== 'string') {
    response.template = (await prompts(choseTemplateConfig)).template
  } else if (Object.keys(templates).includes(argv.template)) {
    response.template = argv.template
  } else {
    response.template = 'default'
    console.log(lightYellow(`⚠ No such template name in ${lightGreen(JSON.stringify(Object.keys(templates)))}, using ${lightGreen(`default`)} instead.`))
  }

  if (!argv._[0]) {
    response.projectName = (await prompts({
      type: 'text',
      name: 'projectName',
      message: 'What is your project name?',
      initial: response.template === 'default' ? 'vite-phaser' : `vite-phaser-${response.template}`
    })).projectName
  } else {
    response.projectName = argv._[0]
  }

  // console.log(response)

  copy(resolve(templateRoot, templates[response.template].dir), resolve(process.cwd(), response.projectName))
    .then(() => {
      const originPackage = readJsonSync(resolve(resolve(process.cwd(), response.projectName), 'package.json'))
      originPackage.name = response.projectName
      writeJsonSync(resolve(resolve(process.cwd(), response.projectName), 'package.json'), originPackage, { spaces: 2 })
      moveSync(resolve(resolve(process.cwd(), response.projectName), '_gitignore'), resolve(resolve(process.cwd(), response.projectName), '.gitignore'))
      console.log(`${lightGreen('Success!')} Continue with: ${lightGray(`cd ${response.projectName} && pnpm install`)}`)
    }).catch((err) => {
      console.log('fail', err)
      process.exit(1)
    })

})()
