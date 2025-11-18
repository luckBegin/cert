import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CertController} from "./controller/cert.controller";
import {ShareModule} from "../share.module";


@Module({
	imports: [
		ShareModule
	],
	providers: [
	],
	controllers: [
		CertController
	],
	exports: [
		ShareModule
	]
})
export class CertModule {

}
