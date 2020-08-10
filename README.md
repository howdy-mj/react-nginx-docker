### Docker 명령어
```
# 도커 생성
$ docker build -t nginx-react:0.1 .

# 도커 이미지 확인
$ docker images

# 도커 컨테이너 실행
$ docker run -d -p 8300:80 nginx-react:0.1
$ docker run -d -p 8013:80 nginx-react:0.2

# 도커 이미지, 컨테이너 확인
$ docker ps -a
```

참고: https://hello-bryan.tistory.com/169


### Openssl

```
# Openssl 발급
$ openssl req -subj '/CN=localhost' -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365

# 도커 이미지 생성
$ docker build -t nginx-ssl:0.1 .
$ docker build -t nginx-ssl:0.2 .

# 도커 컨테이너 실행
$ docker run --name nginx-ssl -d -v `pwd`:/etc/nginx/conf.d -p 443:443 nginx-ssl:0.1
$ docker run --name nginx-ssl-2 -d -v `pwd`:/etc/nginx/conf.d -p 443:443 nginx-ssl:0.2
```

참고: https://medium.com/@oliver.zampieri/self-signed-ssl-reverse-proxy-with-docker-dbfc78c05b41


docker run --name nginx -d -v /root/nginx/conf:/etc/nginx/conf.d --net=host nginx