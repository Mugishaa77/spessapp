import One from '../images/one.jfif';
import Two from '../images/two.jfif';
import Three from '../images/three.jfif';
import End from '../components/End';

export default function Messages (){
    const messages = [
  {
    id: 1,
    photo: One,
    sender: "John Doe",
    timestamp: "10 hours ago",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    unread: 2
  },
  {
    id: 2,
    photo: Two,
    sender: "Jane Smith",
    timestamp: "5 hours ago",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    unread: 0
  },
   {
    id: 1,
    photo: Three,
    sender: "John Doe",
    timestamp: "10 hours ago",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    unread: 2
  },
  {
    id: 2,
    photo: Two,
    sender: "Jane Smith",
    timestamp: "5 hours ago",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    unread: 0
  },
  {
    id: 1,
    photo: One,
    sender: "John Doe",
    timestamp: "10 hours ago",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    unread: 2
  },
  {
    id: 2,
    photo: Two,
    sender: "Jane Smith",
    timestamp: "5 hours ago",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    unread: 0
  },
  // Add more message objects as needed
];

    return (
        <div className="messages">
            <div className="chat-preview">
                <h5>Messages</h5>
                <span></span>
                <ul>
  {messages.map((message, index) => (
    <li key={index}>
      <div className="message-preview">
        <div className="profile-photo">
          <img src={message.photo} alt="Profile" />
        </div>
        <div className="part-two">
          <div className="text-preview">
            <h6 className="inter-text">{message.sender}</h6>
            <h2 className="time-stamp">{message.timestamp}</h2>
          </div>
          <div className="notif">
            <p className="inter-text">{message.content}</p>
            <p className="unread inter-text">{message.unread}</p>
          </div>
        </div>
      </div>
    </li>
  ))}
</ul>

                
                            
                               

            </div>
            <div className="chat-screen">
                <span className="sender-name"> 
                <img /> 
                <h6 className="inter-text">Lorem Ipsum</h6></span>

            </div>
            <div className="end">
                <End />
            </div>
        </div>
    );
}