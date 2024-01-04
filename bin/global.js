#!/usr/bin/env node
// Va a funcionar del lado de node y hacer un import del módulo que acabamos de crear
// y luego ejecutará la función que se encuentra en ese módulo en index.js
let random = require('../src/index.js');

random.funnyCommit();