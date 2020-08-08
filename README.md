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