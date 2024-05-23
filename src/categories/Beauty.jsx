import End from "../components/End";
import beauty from '../images/beauty.jfif';
import Rating from '../components/Rating'

export default function Beauty () {
    return (
        <div className="beauty">
            <div className="beauty-section">
                <h2 className="inter-title">Beauty</h2>
                <h6 className="inter-text">Filter by distance <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg></h6>
<ul>
    <li>
        <div>
            <img src={beauty} />
        </div>
        <div className="beauty-content">
            <h4>Title</h4>
            <p className="inter-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button>View More</button>
            <span><Rating/></span>

        </div>
    </li>
</ul>

            </div>

            <div className="end">
                <End />
            </div>
        </div>
    );
}