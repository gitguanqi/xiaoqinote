#!/bin/bash
#program: this is a auto-deploy app scripts.
#author: Mr.MarkGuan 
#date: 2020-03-05
#version: v0.0.1

# deploy to github
set -e

git add .
git commit -m 'dev'
git push origin master
git push coding master

exit 0