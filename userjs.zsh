#!/bin/zsh
local date_today
date_today=$(date +"%Y-%m-%d")

local origin arkenfox override
origin=userjs_$date_today.js
arkenfox=arkenfox_$date_today.js
override=user-overrides.js

## Trim reference file
cp arkenfox.js $origin
gsed -i -e '/^\/\*.*\*\/[[:space:]]*$/d' -e '/^\/\*/,/\*\//d' -e 's|^[[:space:]]*//.*$||' -e '/^[[:space:]]*$/d' -e 's|);[[:space:]]*//.*|);|' $origin
sort $origin -o $origin


## Process arkenfox file
curl -fsSL -o $arkenfox  https://raw.githubusercontent.com/arkenfox/user.js/master/user.js
gsed -i -e '/^\/\*.*\*\/[[:space:]]*$/d' -e '/^\/\*/,/\*\//d' -e 's|^[[:space:]]*//.*$||' -e '/^[[:space:]]*$/d' -e 's|);[[:space:]]*//.*|);|' $arkenfox
sort $arkenfox -o $arkenfox
gawk -i inplace '!/parrot/' $arkenfox

## Compare both files
colordiff $arkenfox $origin

cat arkenfox.js user-overrides.js > user.js
