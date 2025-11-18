import {NestFactory} from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';
import {AppModule} from './app.module';
import * as hbs from 'hbs';
import * as fs from 'fs' ;

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(
        AppModule,
    );
    app.enableCors({origin: '*'});

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    hbs.registerPartials(join(process.cwd(), 'views/partials'));
    app.setViewEngine('hbs');
    await app.listen(4000, '0.0.0.0');
}

bootstrap();
