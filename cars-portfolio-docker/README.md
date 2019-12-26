## ts-cars-portfolio-docker
Dockerization for ts-cars-portfolio project. Contains local DynamoDB setup and data population scripts.

## Prerequisites 
Local environment should have [Docker](https://docs.docker.com/install/) and [NodeJS](https://nodejs.org/en/) pre-installed.

Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) to access DB from command line.

Go to [http://localhost:8000/shell/](http://localhost:8000/shell/) to access DB from web console.

##### Install node modules
```
npm install
```

## Setup local DynamoDB 

##### Run docker containers
```
docker-compose up
```
Show all tables
```
aws dynamodb list-tables --endpoint-url http://localhost:8000
```
##### Initial data population
```
create-local-db
```

## Scripts
Build code
```
npm run tsc
```
Create DynamoDB table
```
npm create-table
```
Import data into DynamoDB
```
npm run inport
```

Drop DynamoDB table
```
npm delete-table
```

## Useful commands
Local DynamoDb variants.
```
# Run docker container
docker run -p 8000:8000 amazon/dynamodb-local

# Run docker container with shared DB. DB can be manupulated with AWS CLI 
docker run -p 8000:8000 amazon/dynamodb-local -jar DynamoDBLocal.jar -sharedDb

# Run docker container with volume. DB will be persisted between container restarts
docker run -p 8000:8000 -v :/home/dynamodblocal/data amazon/dynamodb-local -jar DynamoDBLocal.jar -sharedDb -dbPath .
```
AWS CLI commands
```
# List tables
aws dynamodb list-tables --endpoint-url http://localhost:8000

# Describe table
aws dynamodb describe-table --table-name CarsPortfolio --endpoint-url http://localhost:8000

# Delete table
aws dynamodb delete-table --table-name CarsPortfolio --endpoint-url http://localhost:8000

# Select all
aws dynamodb scan --table-name CarsPortfolio --endpoint-url http://localhost:8000

# Select all visible elemetns
aws dynamodb scan --table-name CarsPortfolio --endpoint-url http://localhost:8000 \
        --filter-expression "visible = :visible" \
        --expression-attribute-values  '{":visible":{"BOOL":true}}'

# Select by key condition expression
aws dynamodb query --table-name CarsPortfolio --endpoint-url http://localhost:8000 \
       --key-condition-expression "id = :id" \
       --expression-attribute-values  '{":id":{"S":"100"}}'
```
