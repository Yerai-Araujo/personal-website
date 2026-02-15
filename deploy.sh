#!/bin/bash

ng build --configuration production --base-href "/"

cd dist/personal-website/browser/

cp index.html 404.html
touch .nojekyll

git init
git add .
git commit -m "deploy: update website"
git branch -M main
git remote add origin https://github.com/Yerai-Araujo/yerai-araujo.github.io
git push -u origin main -f

cd ../../../
