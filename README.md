#Expiry Timer
Sometimes, it's useful in code to know if a certain amount of time
has elapsed.

This module (dependent only on the babel-runtime) provides a nice, neat
interface for that

## Installation
```
npm i expiry-timer --save
```

## Usage
```
import timer from '../src/timer';

const e = timer(5000); // 5 seconds;

/*
 * Some time later 
 */
if (e.done()) {
    /* Do a thing */
    e.reset(); // Clock starts ticking immediately
}
```