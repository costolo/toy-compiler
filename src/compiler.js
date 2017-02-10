import { tokenizer } from './tokenizer'
import { parseProgram as parser } from './parser'
import { emitter } from './emitter'

export const compiler = (input) => {
  let tokens = tokenizer(input)
  let ast = parser(tokens)
  let output = emitter(ast)

  return output
}
