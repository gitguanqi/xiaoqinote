#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git add .
git commit -m 'dev'
git push origin master
