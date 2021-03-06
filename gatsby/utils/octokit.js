/* eslint-disable no-console */
const { Octokit } = require('@octokit/rest');

exports.octokit = new Octokit({
  timeZone: 'Europe/Paris',
  baseUrl: 'https://api.github.com',
  log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error,
  },
  request: {
    agent: undefined,
    fetch: undefined,
    timeout: 0,
  },
});
