// node는 Common JS를 사용함
// 불러올 때는 require 사용
const http = require('http');
const hostname = "127.0.0.1"; // => 본인 컴퓨터 주소
const port = 8080;
// createServer() : 서버 생성
// 요청정보 = req / 응답정보 = res
const server = http.createServer(function(req, res) {
    const path = req.url;
    const method = req.method;
    if(path === '/products') {
        // 응답을 보낼 때 json객체를 보냄
        res.writeHead(200, {'Content-type' : 'application/json'});
        // 객체를 json으로 변환 : JSON.stringify(obj)
        const product = JSON.stringify({
            name: "기초화장품",
            price: 50000
        })
        res.end(product);
    } else {
        res.end("^_^");
    }
})
// http://localhost:8080 ==> 요청 !

// listen : 대기 호스트이름과 포트번호 요청을 기다림 
server.listen(port, hostname);
console.log("화장품 서버가 동작 중입니다.");