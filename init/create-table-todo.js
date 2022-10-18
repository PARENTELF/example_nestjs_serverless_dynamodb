const AWS = require('aws-sdk');

AWS.config.update({ region: 'REGION' });

AWS.config.update({ endpoint: 'http://localhost:8000' });

const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const params = {
  AttributeDefinitions: [
    {
      AttributeName: 'id',
      AttributeType: 'S',
    },
  ],
  KeySchema: [
    {
      AttributeName: 'id',
      KeyType: 'HASH',
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: 'TodosTable',
  StreamSpecification: {
    StreamEnabled: false,
  },
};

ddb.createTable(params, (err, data) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Table Created', data);
  }
});
