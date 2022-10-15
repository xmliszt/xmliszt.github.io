#!/bin/bash
# abort on errors
set -e

now=$(date +"%Y-%m-%d-%T")
if [[ -d "dist" ]]; then
  git add -A && git commit -m "production: $now"
  git push origin master
fi
