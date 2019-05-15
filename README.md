# lambda-monitor-logger

[![Build Status](https://circleci.com/gh/blackflux/lambda-monitor-logger.png?style=shield)](https://circleci.com/gh/blackflux/lambda-monitor-logger)
[![Test Coverage](https://img.shields.io/coveralls/blackflux/lambda-monitor-logger/master.svg)](https://coveralls.io/github/blackflux/lambda-monitor-logger?branch=master)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=blackflux/lambda-monitor-logger)](https://dependabot.com)
[![Dependencies](https://david-dm.org/blackflux/lambda-monitor-logger/status.svg)](https://david-dm.org/blackflux/lambda-monitor-logger)
[![NPM](https://img.shields.io/npm/v/lambda-monitor-logger.svg)](https://www.npmjs.com/package/lambda-monitor-logger)
[![Downloads](https://img.shields.io/npm/dt/lambda-monitor-logger.svg)](https://www.npmjs.com/package/lambda-monitor-logger)
[![Semantic-Release](https://github.com/blackflux/js-gardener/blob/master/assets/icons/semver.svg)](https://github.com/semantic-release/semantic-release)
[![Gardener](https://github.com/blackflux/js-gardener/blob/master/assets/badge.svg)](https://github.com/blackflux/js-gardener)

Logging designed to be used with lambda-monitor

## Install

Install with [npm](https://www.npmjs.com/):

    $ npm install --save lambda-monitor-logger

## Usage

<!-- eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies -->
```js
const logger = require('lambda-monitor-logger');

logger.error('Keyboard not found. Press F1 to Resume');
// => ERROR: Keyboard not found. Press F1 to Resume
```

This logger will simply log to console and prefix with the debug level.

The available levels are: `debug`, `info`, `warning`, `error`, `critical`.
