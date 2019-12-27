import {config, DynamoDB} from 'aws-sdk';
import {CARS_PORTFOLIO_TABLE, getAwsConfig} from "./config";

config.update(getAwsConfig());
const dynamoDb = new DynamoDB();
const params: DynamoDB.Types.DeleteTableInput = {
    TableName: CARS_PORTFOLIO_TABLE
};

dynamoDb.deleteTable(params, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});