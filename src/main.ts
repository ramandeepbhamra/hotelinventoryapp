//import { NestFactory } from '@nestjs/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// async function bootstarp() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
