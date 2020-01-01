#!/bin/bash
export NODE_ENV=production
echo "Creating remote DynamoDB"

npm run tsc
npm run import

