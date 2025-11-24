import { expect } from 'vitest'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

console.warn = () => {}
