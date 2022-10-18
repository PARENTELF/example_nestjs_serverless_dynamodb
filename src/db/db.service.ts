import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
@Injectable()
export class DatabaseService {
  @Inject(ConfigService)
  public config: ConfigService;

  connect(): AWS.DynamoDB.DocumentClient {
    console.info({
      region: this.config.get<string>('REGION'),
      endpoint: this.config.get<string>('DYNAMODB_ENDPOINT'),
      accessKeyId: this.config.get<string>('ACCESS_KEY_ID'),
      secretAccessKey: this.config.get<string>('SECRET_ACCESS_KEY'),
    });

    return this.config.get('IS_OFFLINE')
      ? new AWS.DynamoDB.DocumentClient({
          region: this.config.get('REGION'),
          endpoint: this.config.get('DYNAMODB_ENDPOINT'),
          accessKeyId: this.config.get('ACCESS_KEY_ID'),
          secretAccessKey: this.config.get('SECRET_ACCESS_KEY'),
        })
      : new AWS.DynamoDB.DocumentClient();
  }
}
