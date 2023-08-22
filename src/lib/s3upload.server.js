// TODO matthew update this to use the version3 AWS sdk
import { randomUUID } from 'crypto';
import aws from 'aws-sdk';

const region = 'us-east-1';
const bucketName = 'contactly'

const s3 = new aws.S3({
    region,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: 'v4'
})

export async function generateS3UploadURL() {
    const imageName = randomUUID()

    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60
    })

    return await s3.getSignedUrlPromise('putObject', params)
}

