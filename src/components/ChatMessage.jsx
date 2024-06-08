
function ChatMessage({ name, message,imageUrl  }) {


  return (
    <div className=" hover:bg-gray-200 cursor-default">
      <div className="flex ">
        <img className="rounded-full w-6 h-6" src={imageUrl} alt="asd" />
        <div className="px-4 flex items-center ">
          <h1 className="text-sm font-bold pr-4">{name}</h1>
          <h1 className="text-xs">{message}</h1>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
