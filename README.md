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

* Just call `todo`
```js 
function foo() {
    todo();
}

foo();
```

Result
```sh
 > [TODO] In Function: foo() | At: C:\Users\alexn\Desktop\js\todo.js\app.js:4:5
```