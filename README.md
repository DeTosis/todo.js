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

* Function signature
```js
function todo(message = null) { .. }
```

At `todo` function call application **will** exit with exit code 1.
```sh
 > [TODO] In Function: foo() | At: C:\Users\alexn\Desktop\js\todo.js\app.js:4:5
```