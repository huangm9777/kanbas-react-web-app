import "./index.css";
import { Dimensions } from "./Dimensions";
import { Position } from "./Position";

export default function Lab2() {
  const handleSend = () => {
    console.log("send");
  }
  return (
    <div>
      <h2>Lab 2</h2>
      <p>Styled Component is imported</p>
      <h2>Colors</h2>


      <p className="styled-text-2">
      I now have the ability to generate images and browse the web to provide real-time information, helping with tasks like staying updated on current events or creating visual content. Additionally, I can remember and tailor responses based on our past conversations, like your experiences and interests in Spring Cloud, cryptocurrency, and ML models. Anything new you'd like me to know or help you with?
      </p>
      <div className="message-input-container">
        <input className="message-input" type="text" placeholder="Enter your message" />
        <button className="send-button" onClick={handleSend}>Send</button>
      </div>

      <div id="chat-container">
        <p className="chat-text-1">This approach has a time complexity of O(n^2) in the worst case because of the nested loops and checking pairs. Its efficient enough for moderate values of numServers, but optimizations might be needed for larger inputs</p>
      </div>

      <Dimensions />
      <Position />

    </div>
    
  );
}
