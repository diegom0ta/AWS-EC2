// load the SDK for JavaScript
const AWS = require('aws-sdk');

// set the region
AWS.config.update({ region: 'us-east-2' });
AWS.config.accessKeyId = 'AKIAT3YLHLJ7BFOYAYSR';
AWS.config.secretAccessKey = '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';
// create an ec2 object
const ec2 = new AWS.EC2({ apiVersion: '2016-11-15' });

// setup instance params
const params = {
	ImageId: 'ami-03657b56516ab7912',
	InstanceType: 't2.micro',
	KeyName: 'backzth3end',
	MinCount: 1,
	MaxCount: 1,
	SubnetId: ' subnet-88d6a1c4',
	TagSpecifications: [
		{
			ResourceType: 'instance',
			Tags: [
				{
					Key: 'jsinstance',
					Value: 'dev'
				}
			]
		}
	]
};

ec2.runInstances(params, function (err, data) {
	if (err) {
		console.log(err, err.stack); // an error occurred
	} else {
		console.log(data); // successful response
	}
});
