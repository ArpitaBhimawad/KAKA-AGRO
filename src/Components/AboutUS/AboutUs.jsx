
import './AboutUs.css'
import Figure from 'react-bootstrap/Figure';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ShopImage from './ShopImage';

function AboutUS() {


  return (
    <>


      <div className='Aboutus-body'>
        <h2 className='h2-About'>Kaka Krishi Seva Kendra </h2>
        <section class="about-us-sec">
          <h2>About Us</h2>
          <p>Kaka Krishi Seva Kendra was founded in 1990 by the visionary Gopal Ji Bhimawad and co-founder Promod Ji Bhimawad. Our company has been a trusted name in the agro-industry for over three decades.</p>
          <p>Specializing in fertilizers, pesticides, fungicides, and a range of agro products, we are also deeply committed to bio-farming solutions. Our mission is to provide sustainable and high-quality products at prices lower than the market average, ensuring that farmers have access to the best resources for their crops.</p>
          <p>At Kaka Krishi Seva Kendra, we believe in supporting agriculture through innovation and dedication, aiming to enhance farming practices and productivity across the region.</p>
        </section>


        <ShopImage />


        <div className='founder-data'>
                 
        
         
      <Container className='Cont_rating_rank'>
        
        <Figure className='m-4 px-3'>
          <Figure.Image
            width={120}
            height={100}
            
             src="\assets\images\papa.jpeg" roundedCircle
          />
          <Figure.Caption className='figure_caption'>
          Gopal Krishna Ji Bhimavad<br/> Founder <br/>
          Mobile Number:9424001502 <br/>Email:gopalkrishnabhimavad@gmail.com
          </Figure.Caption>
        </Figure> <Figure className='m-4 px-2'>
          <Figure.Image
            width={120}
            height={120}
            alt="171x180"
            src="\assets\images\bhayya.png" roundedCircle
          />
          <Figure.Caption className='figure_caption'>
          Pramod Ji Bhimavad<br/> Co-founder <br/>
         Mobile Number:9425621502 <br/>Email:pramodbhimavad@gmail.com
          </Figure.Caption>
        </Figure>
      </Container>


        </div>

      </div>

    </>
  )
}

export default AboutUS
