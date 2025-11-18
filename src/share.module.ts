import {Module} from "@nestjs/common";
import {HttpModule} from "@nestjs/axios";

@Module({
	imports: [
		// TypeOrmModule.forRoot({
		// 	type: 'mysql',
		// 	host: '154.37.215.81', // 154.37.215.81
		// 	port: 5566,
		// 	username: 'user',
		// 	password: 'luckly@qq1993',
		// 	database: 'db',
		// 	synchronize: false,
		// 	entities: [join(__dirname, '**', '*.entity.{ts,js}')],
		// }),
		HttpModule,
	],
	providers: [],
	exports: [
		HttpModule,
	]
})
export class ShareModule {
}
