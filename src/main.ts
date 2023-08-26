import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Session } from 'express-session';
import * as passport from 'passport'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(
  //   Session({
  //     secret:'keybody act',
  //     resave:false,
  //     saveUninitialized:false,
  //     cookie:{maxAge:3600000}
  //   })
  // )
  await app.listen(3001);
}
bootstrap();
