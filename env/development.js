let url = 'https://giantoceanhk.com';
if(process.env.NODE_ENV != 'development'){
	url = '/api';
}
export default {
	url
}
