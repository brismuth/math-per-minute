# Math per minute

Based on [preact-pwa](https://preact-pwa-yfxiijbzit.now.sh/). I wanted to get some exposure to progressive web apps, and after losing the math speed round in [Jackbox Party Pack 3's trivia game](https://jackboxgames.com/project/jbpp3/), I decided to build a math speed test of my own.

Check it out! https://mathperminute.com/

## Features
* Counts the number of addition and subtraction problems you can solve in a minute
* Progressive web app
* Mobile friendly
* Offline support

## Working with this project locally
### Prerequisites

Make sure that [Node v7](https://nodejs.org/en/download/releases/) is installed.

Make sure that [yarn](https://github.com/yarnpkg/yarn) is installed.

### Instructions

First, clone the repo

```bash
$ git clone https://github.com/brismuth/math-per-minute.git
```

Then, install all dependencies:

```bash
$ yarn
$ yarn post-install
```

Finally, to run the project for development:

```bash
$ yarn dev
```

### To run the project for production

```bash
$ yarn start
```

### To run the project for production with docker

```bash
$ ./build.sh
$ docker run -d \
	--name math \
	-p 3000:3000 \
    -v /ssd_files/math/access.log:/usr/src/app/build/access.log \
    -v /ssd_files/math/logs/:/root/.pm2/logs/ \
	math
```
