#!/usr/bin/env bash

git status
git add --all
git commit -m $1
git pull
git push
