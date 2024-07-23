import { useState, useEffect } from 'react';

const serverUrl = 'https://localhost:1234';

function createConnection(serverUrl, roomId) {
    // A real implementation would actually connect to the server
    return {
      connect() {
        console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
      },
      disconnect() {
        console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
      }
    };
  }
function ShowChatRoom({ roomId }) {
    useEffect(() => {
      const connection = createConnection(serverUrl, roomId);
      connection.connect();
      return () => connection.disconnect();
    }, [roomId]);
    return <h1>Welcome to the {roomId} room!</h1>;
}

export default function ChatRoom() {
    const [showChat, setShowChat] = useState(false);
    const [roomId, setRoomId] = useState('general');

    return(
        <div>
            <label>Choose your chat room:</label>
            <select value={roomId} onChange={e => setRoomId(e.target.value)}>
                <option value="general">general</option>
                <option value="travel">travel</option>
                <option value="sport">sport</option>
                <option value="music">music</option>
            </select>
            <button onClick={() => {setShowChat(!showChat)}}>{showChat ? 'Close chat' : 'Open chat'}</button>
            {showChat && <ShowChatRoom roomId={roomId} />}
        </div>
    )
}