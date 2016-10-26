import { domainConfig } from './../config/app';
import request from './../utils/request';

const ReactNativeSource = request(`${domainConfig.API_DOMAIN}react-native.json?sort=new&t=${+new Date()}`, {});

export default ReactNativeSource;
