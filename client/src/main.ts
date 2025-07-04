import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { provideEnvironmentNgxMask } from 'ngx-mask';

platformBrowser()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));
