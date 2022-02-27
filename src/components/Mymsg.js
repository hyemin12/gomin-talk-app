function Mymsg(props) {
  const myMsg = document.querySelector(".my-msg");
  let reply = props.profile.reply[props.i];
  console.log(reply);
  // 답장가져오고 localhost에 저장하기
  // const parsedReply = localStorage.getItem("reply");
  // if (parsedReply !== null) {
  //   myMsg.classList.add("hidden");
  //   reply = JSON.parse(savedReply);
  // }
  // console.log(reply);
  return (
    <div className="my-msg">
      <ul className="my-msg-list">
        <li>
          <p>{reply.text}</p>
          <span>{reply.time}</span>
        </li>
      </ul>
    </div>
  );
}

export default Mymsg;
