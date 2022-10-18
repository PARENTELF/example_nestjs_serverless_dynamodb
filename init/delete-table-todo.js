const AWS = require('aws-sdk');

AWS.config.update({ region: 'REGION' });
AWS.config.update({ endpoint: 'http://localhost:8000' });

const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

ddb.deleteTable({ TableName: 'TodosTable' }, (err, data) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Table deleted', data);
  }
});
