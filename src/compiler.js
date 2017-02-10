const tokenizer = require('./tokenizer')
const parser = require('./parser')
const emitter = require('./emitter')

const compiler = (input) => {
  let tokens = tokenizer(input)
  let ast = parser(tokens)
  let output = emitter(ast)

  return output
}

console.log(compiler('(add 1 2 (mult 3 4))'))
