#Expiry Timer
[![NPM](https://nodei.co/npm/expiry-timer.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/expiry-timer/)

[![Code Climate](https://codeclimate.com/github/dancrumb/expiry-timer/badges/gpa.svg)](https://codeclimate.com/github/dancrumb/expiry-timer)
[![Build Status](https://travis-ci.org/dancrumb/expiry-timer.svg?branch=master)](https://travis-ci.org/dancrumb/expiry-timer)
[![dependencies Status](https://david-dm.org/dancrumb/expiry-timer/status.svg)](https://david-dm.org/dancrumb/expiry-timer)

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

## API
To create a timer that counts down for `time` milliseconds:
```
const counter = timer(time);
```

Call `done()` on the timer to see if it has expired:

```
if (counter.done() {
    /* do something */
}
```

Call `reset()` to reset the timer back to its original length.

Call `reset(newLength)` to reset the timer to a new length.

## License

Provided under the [MIT License](http://spdx.org/licenses/MIT).