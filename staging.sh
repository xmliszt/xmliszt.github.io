#!/bin/bash

npm run build
# abort on errors
set -e

now=$(date +"%Y-%m-%d-%T")
if [[ -d "dist" && -d "../staging.xmliszt.github.io" ]]; then
  rm -r ../staging.xmliszt.github.io/*
  cp -r dist/* ../staging.xmliszt.github.io/
  cd ../staging.xmliszt.github.io
  git checkout staging && git pull
  git add -A && git commit -m "staging: $now"
  git push origin staging
fi
