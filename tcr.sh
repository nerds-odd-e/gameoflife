#!/usr/bin/env bash

while true; do
  git status -s | grep . || { sleep 1; continue; }
  npm test && git add . && git commit -am "working" || (git reset --hard; git clean -fd)
done