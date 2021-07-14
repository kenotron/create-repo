
const degit = require('degit');

const emitter = degit('github:kenotron/monorepo-template', {
	cache: false,
	force: true
});

emitter.clone(process.cwd());