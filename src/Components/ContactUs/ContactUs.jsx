import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './ContactUs.css'



function ContactUs() {


  return (
    <>

      <h2 className='h2-About'>Reach Us</h2>
      <div className="row w-100 py-5">
        <div className="col-xl-6 px-5 ">
          <div className="row row-cols-md-2 ">
            <div className="aos-item" data-aos="fade-up" data-aos-delay="200">
              <div className="aos-item__inner">
                <div className="bg-light hvr-shutter-out-horizontal d-block p-0 py-3 my-2 rounded">
                  <div className="d-flex justify-content-start">
                    <i className="fa-solid fa-envelope h3 pe-2"></i>
                    <span className="h5">Email</span>
                  </div>
                  <span>pramodbhimavad@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="aos-item" data-aos="fade-up" data-aos-delay="400">
              <div className="aos-item__inner">
                <div className="bg-light hvr-shutter-out-horizontal d-block p-3 my-2 rounded">
                  <div className="d-flex justify-content-start">
                    <i className="fa-solid fa-phone h3 pe-2"></i>
                    <span className="h5">Phone</span>
                  </div>
                  <span>9424001502,9425621502</span>
                </div>
              </div>
            </div>
          </div>
          <div className="aos-item mt-4" data-aos="fade-up" data-aos-delay="600">
            <div className="aos-item__inner">
              <div className="bg-light hvr-shutter-out-horizontal d-block p-3 rounded">
                <div className="d-flex justify-content-start">
                  <i className="fa-solid fa-location-pin h3 pe-2"></i>
                  <span className="h5">Shop location</span>
                </div>
                <span>Berchha Mandi, Shajapur (M.P.)</span>
              </div>
            </div>
          </div>
          <div className="aos-item" data-aos="fade-up" data-aos-delay="800">
            <div className="mt-4 w-100 aos-item__inner rounded">
              <iframe className="hvr-shadow rounded" width="100%" height="345" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.7474708666323!2d76.32907697797481!3d23.288623852192973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39634f4d58a3c355%3A0x62642dc2cfa69d7c!2sKaka%20Krishi%20Sewa%20Kendra!5e0!3m2!1sen!2sin!4v1722774433000!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe>
            </div>
          </div>
        </div>


        <div className="col-xl-6">
          <form className='ms-5 me-5'>
            <div className="form row ">
              <div className="form-group col-md-6 text-start  ">
                <label htmlFor="FirstName" className='custom-font-label'>First Name</label>
                <input type="FirstName" className="form-control" id="FirstName" placeholder="Enter Your First Name" />
              </div>
              <div className="form-group col-md-6 text-start ">
                <label htmlFor="LastName" className='custom-font-label'>Last Name</label>
                <input type="LastName" className="form-control" id="LastName" placeholder="Enter Your Last Name" />
              </div>
            </div>
            <div className="form-group text-start  ">
              <label htmlFor="inputAddress" className='custom-font-label'>Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group text-start  ">
              <label htmlFor="inputAddress2" className='custom-font-label'>Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form row">
              <div className="form-group col-md-6 text-start ">
                <label htmlFor="inputCity" className='custom-font-label'>City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4 text-start  ">
                <label htmlFor="inputCountry" className='custom-font-label'>Country</label>
                <select id="inputCountry" className="form-control">
                  <option selected>Choose...</option>
                  <option>Indian</option>
                  <option>Non-Indian</option>
                </select>
              </div>
              <div className="form-group col-md-2 text-start">
                <label htmlFor="inputZip" className='custom-font-label'>Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>
            {/* <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div> */}
            <button type="submit" className="btn btn-primary mt-5 mb-5">Send Message</button>
          </form>

        </div>

      </div >
    </>
  )
}

export default ContactUs

