import { resolve } from 'path'
import { fileURLToPath } from 'url'
import prompts from 'prompts'
import minimist from 'minimist'
import fs from 'fs-extra'
import { lightYellow, lightGreen } from 'kolorist'
import validate from 'validate-npm-package-name'

(async () => {
  const { copy, moveSync, readJsonSync, writeJsonSync } = fs

  const templates = {
    default: 'vite-phaser',
    demo: 'vite-phaser-demo',
    extension: 'vite-phaser-extension',
    electron: 'vite-phaser-electron',
    tauri: 'vite-phaser-tauri',
  }

  const execData = {
    templateDir: '',
    projectName: ''
  }

  const templateRoot = resolve(fileURLToPath(import.meta.url), '../..')

  const argv = minimist(process.argv.slice(2))

  if (argv._.length) {
    execData.projectName = argv._[0]
  }

  if (argv.template && typeof argv.template === 'string' && Object.keys(templates).includes(argv.template)) {
    execData.templateDir = resolve(templateRoot, templates[argv.template])
  } else if (argv.template) {
    console.log(lightYellow(`⚠ No such template name in ${lightGreen(JSON.stringify(Object.keys(templates)))}, using ${lightGreen(`default`)} instead.`))
    execData.templateDir = resolve(templateRoot, templates.default)
  }

  console.log(execData)

  const targetDir = resolve(process.cwd(), execData.projectName)

  copy(execData.templateDir, targetDir)
    .then(() => {
      console.log('success')
      const originPackage = readJsonSync(resolve(targetDir, 'package.json'))
      originPackage.name = execData.projectName
      writeJsonSync(resolve(targetDir, 'package.json'), originPackage, {spaces: 2})
      moveSync(resolve(targetDir, '_gitignore'), resolve(targetDir, '.gitignore'))
    }).catch((err) => {
      console.log('fail', err)
    })


  const promptsData = []

  console.log(argv)

  console.log(process.cwd())

  console.log(fileURLToPath(import.meta.url))

  console.log(resolve(fileURLToPath(import.meta.url), '../..', `vite-phaser-${argv.template}`))



  // const response = await prompts({
  //   type: 'text',
  //   name: 'projectName',
  //   message: 'What is your project name?',
  // })

  // console.log(response)
})()
