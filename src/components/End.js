import one from '../images/one.jfif';
import feed from '../images/feed.jfif';

export default function End () {
    return (
        <div className="endd inter-text">
                <h5>Feeds</h5>
              <div className="end-inner">  
                <div >
                    <figure className="feed">
                    <img src={one}/>
                    <figcaption>Title</figcaption></figure>
                    </div>
           <figure>
            <h6>Title</h6>
                <img className="f"src={feed}/>
                <figcaption className="ann inter-small">Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</figcaption>
            </figure>
            <button>View Comments </button>
            <form>
                <label className="inter-text">Enter Your Comment</label>
                <hr/>
    <textarea type="text"
    name="messageItem"
    className="form-control"
    value=""
    onChange="" 
    rows="1"
    placeholder="Comment"></textarea>

            </form>
            <hr/>
            </div>
 </div>
    );
}