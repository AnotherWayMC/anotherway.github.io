import { ReactNode, useState } from "react";
import { RiCloseFill } from "react-icons/ri";

interface MessageProps {
  type: string;
  message: ReactNode;
}

function Message({ type, message }: MessageProps) {
  const [isClosed, setClosed] = useState(false);
  const closeMessage = () => {
    setClosed(true);
  };
  return (
    <>
      {!isClosed && (
        <div className={`message ${type}`}>
          <div>
            {message}
            <RiCloseFill
              onClick={closeMessage}
              className="cursor-pointer"
              size={32}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Message;
