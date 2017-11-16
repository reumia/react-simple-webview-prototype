# Webview Prototype

React project for webview of application prototyping.
This repository allows you to check out the following.

- File structure with `react-router`
- Http request configuration and structure with `axios` 
- Throbber UI for loading resources with `react-transition-group` and `redux`

> Especially this project don't use `Link` component of `react-router`, because all histories of browser and page transitions are depended on Application's behaviors.


## Installation

```bash
# brew 가 없으시다면,
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# node 가 없으시다면,
$ brew install node

# node 및 npm version 확인
$ node -v && npm -v         # node > v.8.x.x, npm > v.5.x.x 

# 소스 빌드
$ npm install -g yarn       # yarn 설치
$ yarn                      # 의존성 모듈 설치
$ yarn build                # JavaScript 빌드 실행
$ yarn start:prod           # 데모 서버 실행
```
