# todo.js

A small JavaScript module inspired by todo!() rust macro.

## Usage

* Download [todo.js](./todo.js) and add it to your project
* Import module:

```js
const { todo } = require("./todo");
// === or ===
import { todo } from './todo';
```

To use function in TypeScript you need to additionally create `todo.d.ts` in directory with `todo.js` and paste this code:
```ts
export function todo(): never;
```

* Just call `todo`
```js 
function foo() {
    todo();
}

foo();
```

At `todo` function call application **will** exit with exit code 1.
```sh
 > [TODO] In Function: foo() | At: C:\Users\alexn\Desktop\js\todo.js\app.js:4:5
```