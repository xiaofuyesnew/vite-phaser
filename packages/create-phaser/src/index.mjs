import { resolve } from 'path'
import { fileURLToPath } from 'url'
import prompts from 'prompts'
import minimist from 'minimist'

(async () => {
  const argv = minimist(process.argv.slice(2))

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
