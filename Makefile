install: npm install

start: 
	npx babel-node -- 'src/bin/brain-gamesaam.js' 

build: 
	NODE_ENV=production babel src --out-dir dist --source-maps inline

prepublishOnly: 
	npm run build

publish: 
	npm publish