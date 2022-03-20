# [React] Bubble 클론 코딩

[<img src="https://github.com/hyemin12/react-dashboard-app/blob/master/public/img/portfolio/gominTalk.png?raw=true" />](https://wizardly-hermann-7fecb3.netlify.app)

이미지를 클릭하면 사이트로 이동합니다.

<br>
<br>
<hr>

## #About

<br>
1 react   <br> 
2 react-router-dom  <br> 
3 react-live-clock  <br> 
4 sasss  <br> 
<br> 
React를 사용하여 Lysn Bubble 어플을 클론 코딩하였다. 프로필 화면에 있는 이미지를 클릭하면, 해당 친구의 프로필 이미지를 크게 확인할 수 있으며 채팅방에 들어가서 친구에게 메세지를 보낼 수 있다.
<br>
<br>
<hr>

## #추가되어야하는 기능

<br>
1 친구가 보낸 메세지와 내가 보낸 메세지를 정렬하여 채팅방 화면에 출력하기<br>
2 마지막으로 전송 or 받은 메세지 미리보기 화면에 띄우기

<br>
<br>
<hr>

## #route 구성

<br>

<table >
<tr style="text-align:center">
<th width="50%">profile</th>
<th width="50%">profile detail</th>
</tr>
<tr>
<td>메인페이지, 내 프로필과 친구들 목록</td>
<td>친구들 프로필 이미지를 클릭하였을 때 출력되는 화면</td></tr>
<tr><td><img src="./_markdown/profile.png" ></td><td><img src="./_markdown/profile_detail.png" ></td><tr>
</table>

<table>
<tr>
<th width="50%">chat</th>
<th width="50%">chatting</th>
</tr>
<tr>
<td>채팅방 목록</td>
<td>채팅방, 친구와 주고받은 메세지를 확인할 수 있음</td></tr>
<tr><td><img src="./_markdown/chat.png" ></td><td><img src="./_markdown/chatting.png" ></td><tr>
</table>

<table>
<tr>
<th width="50%">community</th>
<th width="50%">setting</th>
</tr>
<tr>
<td>추천 커뮤니티와 사이트를 확인 할 수 있음</td>
<td>어플 설정 페이지 </td></tr>
<tr><td><img src="./_markdown/community.png" ></td><td><img src="./_markdown/profile.png" ></td><tr>
</table>

<br>
<hr>

## #react-live-clock 라이브러리로 실시간 시계 만들기

<br>

https://momentjs.com/docs/#/displaying/format/

| 설치

```
npm install --save react-live-clock
```

| 사용

```js
import Clock from "react-live-clock";

<Clock format="HH:mm" ticking={true} />;
// ticking: 실시간 새로고침
```
