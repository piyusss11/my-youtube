import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomString } from "../utils/help";
function LiveChat() {
  const [myLiveMessage, setMyLiveMessage] = useState("");
  const dispatch = useDispatch();
  const liveChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      //   console.log("appi");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(25),
          imageUrl: `https://picsum.photos/seed/${Math.floor(
            Math.random() * 1000
          )}/200`,
        })
      );
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <div className="ml-6 h-[550px] p-4 flex-col  border-2 ">
      <h1 className=" border-b-2 pb-2">Live Chat</h1>
      <div className=" py-4 h-[430px] overflow-y-scroll flex flex-col-reverse gap-2 mb-2 ">
        {liveChatMessages.map((c, index) => (
          <ChatMessage
            key={index}
            name={c.name}
            message={c.message}
            imageUrl={c.imageUrl}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(myLiveMessage);
          dispatch(
            addMessage({
              name: "Admin",
              message: myLiveMessage,
              imageUrl: `https://picsum.photos/seed/${Math.floor(
                Math.random() * 1000
              )}/200`,
            })
          );
          setMyLiveMessage("");
        }}
        className="flex w-full border-2 bg-gray-100 h-12 p-2 rounded-lg gap-6"
      >
        <input
          className="w-80 rounded-lg px-2"
          type="text"
          placeholder="write message"
          value={myLiveMessage}
          onChange={(e) => setMyLiveMessage(e.target.value)}
        />
        <button type="submit">
          <i className="ri-send-plane-2-line"></i>
        </button>
      </form>
    </div>
  );
}

export default LiveChat;
