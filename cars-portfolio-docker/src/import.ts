import fs from 'fs';
import path from 'path';
import {config, DynamoDB} from 'aws-sdk';
import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";
import {CARS_PORTFOLIO} from "./config";

config.update(CARS_PORTFOLIO.aws_local_config);
const client = new DynamoDB.DocumentClient();
const source = path.resolve(__dirname, 'data/cars-portfolio-import.json');
const json: DocumentClient.ScanOutput = JSON.parse(fs.readFileSync(source, 'utf8'));

json.Items.forEach(item => {
    const params = {
        TableName: CARS_PORTFOLIO.aws_table_name,
        Item: {
            id: item.id.S,
            visible: item.visible.BOOL,
            car: {
                model: item.car.M.model.S,
                fueltype: item.car.M.fueltype.S,
                gearingType: item.car.M.gearingType.S,
                version: item.car.M.version && item.car.M.version.S || ''
            },
            available: item.available.BOOL,
            images: [{
                src: item.images.L[0].M.src.S,
                title: item.images.L[0].M.title.S
            }],
            pricing: {
                price: item.pricing.M.price.N
            }
        }
    };

    client.put(params, function (err, data) {
        if (err) {
            console.error(err);
            console.error(`Failed to PutItem ${JSON.stringify(params.Item.id)}`);
        } else {
            console.log(`Imported item: ${params.Item.id}`);
        }
    });
});