#!/bin/sh

node_modules/.bin/lodash -s -d -o lodash-templates.js moduleId=lodash settings="{variable: 'data'}" template='templates/*.html' strict exports=node
