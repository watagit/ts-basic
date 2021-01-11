// import World from './world'
//
// const root = document.getElementById('root')
// const world = new World('Hello world!')
// world.sayHello(root)

// 03. 基本の型定義
// import { unknownSample, anySample, notExistSample, primitiveSample } from './basic'
//
// unknownSample()
// anySample()
// notExistSample()
// primitiveSample()

// 04. 関数の型定義
import { logMessage } from './function/basic'
import { isUserSingedIn, isUserSingedIn2, sumProductsPrice } from './function/parameters'

logMessage('Hello TypeScript!')
isUserSingedIn('ABC', 'what_a_pon')
isUserSingedIn('DEF')
isUserSingedIn2('ABC')
const sum = sumProductsPrice(100, 200, 300, 400, 500)
console.log('Function parameters sample 5:', sum)
