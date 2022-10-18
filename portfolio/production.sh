#!/bin/bash

now=$(date +"%Y-%m-%d-%T")
if [[ -d "dist" ]]; then
  cd dist
  git init
  git remote add origin git@github.com:xmliszt/xmliszt.github.io.git
  git add -A
  git commit -m "production: $now"
  git push -f origin main:master
fi
