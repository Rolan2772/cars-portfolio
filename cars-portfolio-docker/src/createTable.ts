import fs from 'fs';
import path from 'path';
import {config, DynamoDB} from 'aws-sdk';
import {CARS_PORTFOLIO_TABLE, getAwsConfig} from "./config";

config.update(getAwsConfig());
const dynamoDb = new DynamoDB();
const source = path.resolve(__dirname, 'data/cars-portfolio-create-table.json');
const json: DynamoDB.Types.CreateTableInput = JSON.parse(fs.readFileSync(source, 'utf8'));

dynamoDb.createTable(json, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});