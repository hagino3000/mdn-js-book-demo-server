
setup:
	@install node modules
	npm install

run:
	@echo Start with development mode
	NODE_ENV=development NODE_PATH='.' ./node_modules/node-dev/node-dev server.js

