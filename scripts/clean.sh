rm -r node_modules;
rm package-lock.json;
lerna clean --yes;
find . -name "package-lock.json" -delete

npm install
lerna bootstrap
