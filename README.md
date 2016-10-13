# GoEuro

## The task

Build a simple client-side app that lists GitHub repositories for a given user.

Use the GitHub API documented here: https://developer.github.com/v3 

Sample request: https://api.github.com/users/goeuro/repos

The end-user will enter a Github user's name and see a list of repositories for that user including a link to the repos. App needs to handle the following responses correctly:

- The Github user does not exist
- Github user has no repos
- Github API does not respond

## Solution

First of all, you can find the working app here: https://ivantsov.github.io/goeuro

It should perfectly work on **all modern browsers with support of ES6**.

### How to run

If you want to run the app locally: `npm i && npm run build`.

After that, please open `index.html` file in the browser.

### What's inside?

The app is based on React and Redux according to the task. All Redux related things are placed in `redux/` folder.

**Note:** Personally, I don't see any reason for using Redux in such simple app. And I wouldn't but the task...

### Tests

For tests I used Jest, mainly because it allows you to test plain JS modules as well as React components using [snapshot testing](https://facebook.github.io/jest/docs/tutorial-react.html#snapshot-testing).

For demostration purpose I've tested `reducer`, `action` as Redux part of the app and also `App` component.

To run the tests: `npm test`.
