import Footer from '../../../components/footer';
import './styles.scss';

const Contact = () => {
  return (
    <>
      <div className='contact_container'>
        <div className='contact_content'>
          <h1>
            LETS TALK <span>📨</span>
          </h1>
          <p>I’m open for bookings and collaboration.</p>
          <form className='contact_form'>
            <div className='contact_form_item'>
              <label>Name:</label>
              <input />
            </div>
            <div className='contact_form_item'>
              <label>Email:</label>
              <input />
            </div>
            <div className='contact_form_item'>
              <label>Message:</label>
              <input />
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
