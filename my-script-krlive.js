// 修改请求头
const headers = $request.headers;
headers['Origin'] = 'https://www.pandalive.co.kr';
$done({ headers });