install: 
	npm install

start: 
	npx babel-node -- 'src/bin/brain-games.js' 

startEven: 
	npx babel-node -- 'src/bin/brain-even.js' 

publish:
	npm publish

lint:
	npx eslint .