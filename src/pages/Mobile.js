import End from '../components/End';

export default function Mobile() {
    return (
        <div className="mobile">
            <div className="post ">
                <legend className="inter-title">Post Space</legend>
                <form className="inter-text">
                    <label>Name of Space</label>
                     <input type="text" id="name" name="name" placeholder="Enter name here" className="form-control" />



                     <label>Category</label>
                     <select className="form-control" >
                        <option value="">Select Category <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></option>
                        <option value="Beauty">Beauty</option>
                        <option value="Plumbing">Plumbing</option>
                         <option value="Housing">Housing</option>
                        <option value="Food">Food</option>
                        <option value="Rides">Rides</option>
                        <option value="Health">Health</option>
                        <option value="Office">Office</option>
                        <option value="Deliveries">Deliveries</option>
                     </select>

                     <label>How many people can the space hold?</label>
                     <input type="number" name="people" id="people" className="form-control" />

                     <label>Average time required to serve one customer</label>
                     <input type="time" name="time" id="time" className="form-control" />

                     <label>Location</label>
                     <input type="location" name="location" id="location" className="form-control" />

                     <label>Space Description</label>
                     <textarea type="text" name="description" id="description" rows="7" placeholder="Describe" className="form-control"></textarea>

   

                </form>
                <div className="bottom">
                <div className="bottom-inner inter-small">
                    <div className="add-photo">
                        <h6>Cover Photo</h6>
                        <svg width="90" height="72" viewBox="0 0 97 79" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="1.39703" width="95.8229" height="77.1029" rx="7.5" stroke="#686868"/>
<path d="M54.726 28.8498H54.7541M47.7098 60.9131H29.4678C27.2349 60.9131 25.0934 60.1336 23.5144 58.7459C21.9355 57.3583 21.0485 55.4763 21.0485 53.5139V23.917C21.0485 21.9546 21.9355 20.0726 23.5144 18.6849C25.0934 17.2973 27.2349 16.5178 29.4678 16.5178H63.1454C65.3783 16.5178 67.5198 17.2973 69.0988 18.6849C70.6777 20.0726 71.5648 21.9546 71.5648 23.917V39.9486" stroke="#686868" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.0485 48.5806L35.0808 36.2486C37.6852 34.0461 40.8958 34.0461 43.5002 36.2486L54.726 46.1142" stroke="#686868" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51.9196 43.6481L54.7261 41.1817C56.6064 39.5934 58.7954 39.1494 60.8498 39.8499M57.5325 55.9802H74.3713M65.9519 48.581V63.3794" stroke="#686868" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                    <div className="add-photo">
                        <h6>Select Photo</h6>
                        <svg width="90" height="72" viewBox="0 0 97 79" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="1.39703" width="95.8229" height="77.1029" rx="7.5" stroke="#686868"/>
<path d="M54.726 28.8498H54.7541M47.7098 60.9131H29.4678C27.2349 60.9131 25.0934 60.1336 23.5144 58.7459C21.9355 57.3583 21.0485 55.4763 21.0485 53.5139V23.917C21.0485 21.9546 21.9355 20.0726 23.5144 18.6849C25.0934 17.2973 27.2349 16.5178 29.4678 16.5178H63.1454C65.3783 16.5178 67.5198 17.2973 69.0988 18.6849C70.6777 20.0726 71.5648 21.9546 71.5648 23.917V39.9486" stroke="#686868" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.0485 48.5806L35.0808 36.2486C37.6852 34.0461 40.8958 34.0461 43.5002 36.2486L54.726 46.1142" stroke="#686868" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M51.9196 43.6481L54.7261 41.1817C56.6064 39.5934 58.7954 39.1494 60.8498 39.8499M57.5325 55.9802H74.3713M65.9519 48.581V63.3794" stroke="#686868" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </div>
                </div>
                <button className="post-space">Post Space</button>
                </div>
            </div>
            <div className="space-end">
                <End/>
            </div>


        </div>
    );
}