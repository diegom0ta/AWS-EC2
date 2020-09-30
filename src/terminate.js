// load the SDK for JavaScript
const AWS = require('aws-sdk');

// set the region
AWS.config.update({ region: 'us-east-2' });
AWS.config.accessKeyId = '';
AWS.config.secretAccessKey = '';
// create an ec2 object
const ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });

// setup instance params
const params = {
	InstanceIds: ['']
};

ec2.terminateInstances(params, function (err, data) {
	if (err) {
		console.log(err, err.stack); // an error occurred
	} else {
		console.log(data); // successful response
	}
});
