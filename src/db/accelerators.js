// const AWS = require('aws-sdk');
// AWS.config.update({
//   region: 'local',
//   endpoint: 'http://dynamodb-local:8000',
//   accessKeyId:
//   secretAccessKey:
// });
// const dynamoClient = new AWS.DynamoDB.DocumentClient();
// console.log('Loading DB, please wait.');

// exports.getAccelerator = async () => {
//   try {
//     const TableName = 'accelerator';
//     const params = {
//       TableName: TableName
//     };
//     const accelerator = await dynamoClient.scan(params).promise();
//     res.send(accelerator);
//   } catch (err) {
//     console.log('error', err);
//   }
// };
