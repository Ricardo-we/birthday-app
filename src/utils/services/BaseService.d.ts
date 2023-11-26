import BaseService, {
	RequestConfig,
	RequestConfigParamsRequired,
} from "../base/BaseService";

export default interface BaseServiceT {
	endpointName: string;
	request: BaseService;
	find?: (requestConfig?: RequestConfig) => Promise<any>;
	post?: (requestConfig?: RequestConfig) => Promise<any>;
	update?: (requestConfig: RequestConfigParamsRequired) => Promise<any>;
	destroy?: (requestConfig?: RequestConfigParamsRequired) => Promise<any>;
}
