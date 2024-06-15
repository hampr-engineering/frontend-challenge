# Hampr Frontend Challenge

## Prerequisites

1. [Git](https://git-scm.com/) should be installed and used to clone this repository
2. [Node.js](https://nodejs.org/en/) should be installed
3. A GitHub account

## Quickstart

1. Fork this repository and clone the fork to your machine
2. Install the dependencies `npm install`
3. Start the application in development mode `npm dev` (then open [http://localhost:3000](http://localhost:3000) to view it in your browser)

## Overview

### Challenge

Build a very basic single-page application to create a Squad of Champions.

Using the provided Figma design and data files the application should:

1. Show a list of all Characters
2. Allow a user to filter the list of Characters
3. Allow a user to select up to 6 Characters
4. Show the selected Squad of Characters

#### What's provided

This repository contains boilerplate code for a [Next.js](https://nextjs.org/) project using the Next.js Pages router, TypeScript, a CSS reset (via the Material-UI design library's Baseline component), and the Mortal Kombot logo image. You are free to use any other boilerplate or React framework that uses TypeScript if you'd prefer.

We've also put together a `.json` file containing all Character data (sourced from [DashFight](https://dashfight.com/) and [EventHubs](https://www.eventhubs.com/)) from various fighting games (Mortal Kombat, Street Fighter, Super Smash Bros. and Dragon Ball Z). You can import this file directly into your code to complete the challenge (this has been done inside the `pages/index.tsx` file). You'll find the data file located in the `./data` directory.

##### Figma design files

- [Figma prototype (scrolling demo)](https://www.figma.com/proto/lARhl5uVfjSAf9wnOVJMNw/Squad-of-Champions?node-id=21%3A459&scaling=min-zoom&page-id=0%3A1)
- [Figma design file](https://www.figma.com/file/7Hu2mw1QKruihnmmy4rybQ/Squad-of-Champions---Components?node-id=0%3A1)
- [Figma design behaviour annotations](https://www.figma.com/file/41taXCaD9lqRhKKDO5tyNY/Squad-of-Champions---Comments?node-id=0%3A1)

#### Constraints

- React + TypeScript

## Expectations

**We do not expect you to spend more than a few hours on the challenge**, and we understand that it's unrealistic to implement a complete and polished solution in this time frame.

We have intentionally built-in some poor usability patterns that we'd love for you to either:
a) improve upon, or
b) suggest improvements, or
c) even just point out an awareness of problems/issues would be valuable.

If you feel there was more you could do to improve by the end of this time, please add some notes (e.g. dot points ) about what you'd change.

We'll discuss these with you in person (or video call). We are looking for sensible structure, readability, and adherence to industry best practices.

## Styling

Note we're flexible on whatever approach to styling you want to use.

We've tried to setup a few options to make getting started easier/quicker, being:
- global css/scss, or
- css modules, or even
- style props available in [Material UI](https://mui.com/material-ui/getting-started/)

Feel free to add any other libraries if you have a preferred way of working (e.g. Tailwind).

Also feel free to replace material-ui's baseline (to normalise styles between browsers) with something like like normalize.css if you'd prefer.

## Submission

Once you've finished you can send us the URL to your repository via email. If your repository is private let us know and we'll send you the GitHub accounts that will need access to review the submission.

You are free to open source your work if you like.

Good luck, have fun!!! :D
