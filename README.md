## 실시간 시계 만들기

react-live-clock 사용

https://momentjs.com/docs/#/displaying/format/

설치

```
npm install --save react-live-clock
```

사용

```js
import Clock from "react-live-clock";

<Clock format="HH:mm" ticking={true} />;
// ticking: 실시간 새로고침
```
