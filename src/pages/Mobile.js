import End from '../components/End';

export default function Mobile() {
    return (
        <div className="mobile">
            <div className="post ">
                <legend className="inter-title">Post Spaces</legend>
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
                     <textarea type="text" name="description" id="description" rows="10" placeholder="Describe" className="form-control"></textarea>

   

                </form>
            </div>
            <div className="space-end">
                <End/>
            </div>


        </div>
    );
}