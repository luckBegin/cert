import {Body, Controller, Get, InternalServerErrorException, Post, Query, Render, Res} from "@nestjs/common";
import axios from "axios";

@Controller("")
export class CertController {
	constructor(
	) {
	}

	@Get()
	@Render('index')
	public view() {

	}

	@Get("result")
	@Render('result')
	public async result(@Query("q") query) {
		if (!query) {
			throw new InternalServerErrorException("缺少查询编号");
		}
		try {
			const response = await axios.get(
				`https://cert.chinahrt.com/backstage/stucert/getCertInfoByCert`,
				{
					params: {
						cerNo: query
					}
				}
			);
			const certData = response.data;
			if( certData.status === 0) {
				return { data: certData.data }
			} else {
				return { data: null  }
			}

		} catch (err) {
			throw new InternalServerErrorException("查询失败");
		}
	}

	@Post()
	public async post(@Body() data, @Res() res) {
		// return res.json(await this.service.post(data));
	}
}
