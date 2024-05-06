import One from '../images/one.jfif';
import End from '../components/End';

export default function Messages (){
    return (
        <div className="messages">
            <div className="chat-preview">
                <h5>Messages</h5>
                <span>Placeholder for Read and Unread</span>
                <ul>
                    <li>
                        <div className="message-preview">
                            <div className="profile-photo">
                                <img src={One} />
                            </div>
                            <div className="text-preview">
                                <h6 className="inter-text">Lorem Ipsum</h6>
                                 <p className="inter-text">Lorem ipsum dolor sit amet
                                    , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>                                
                                
                            </div>
                            <div className="notif">
                               
                                <h2 className="time-stamp">10 hours ago</h2>
                                <p className="unread inter-text">2</p>
                            </div>
                        </div>
                    </li>
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