#!/bin/bash

now=$(date +"%Y-%m-%d-%T")
if [[ -d "dist" && -d "../../staging.xmliszt.github.io" ]]; then
  cp -r dist ../../staging.xmliszt.github.io/
  cd ../../staging.xmliszt.github.io
  git checkout staging
  git add ./dist && git commit -m "staging: $now" && git push origin staging
fi
