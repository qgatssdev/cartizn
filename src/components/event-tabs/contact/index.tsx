import './styles.scss';

const Contact = () => {
  return (
    <div>
      <div>
        <h1>
          LETS TALK <span>📨</span>
        </h1>
        <p>I’m open for bookings and collaboration.</p>
        <div>
          <div>
            <label>Name:</label>
            <input />
          </div>
          <div>
            <label>Email:</label>
            <input />
          </div>
          <div>
            <label>Message:</label>
            <input />
          </div>
        </div>

        <button>Send</button>
      </div>
    </div>
  );
};

export default Contact;
