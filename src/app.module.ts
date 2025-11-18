import {Module} from '@nestjs/common';
import {ShareModule} from "./share.module";
import {CertModule} from "./flight/cert.module";

@Module({
	imports: [
		ShareModule,
		CertModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {
}
