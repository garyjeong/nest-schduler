import { Test, TestingModule } from '@nestjs/testing';
import axios from 'axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  it('test', async () => {
    console.log(await axios.get('https://api.exchangerate.host/latest'));
  });
});
