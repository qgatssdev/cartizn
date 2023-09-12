import './styles.scss';

const Home = () => {
  return (
    <div className='home_container'>
      <div className='header_container'>
        <div className='container_one'>
          <img src={require('../../assets/logo.svg')} alt='logo' />
        </div>
        <div className='container_two'>
          <p>
            "The ways of <span>Carti.</span> are not regular"
          </p>
        </div>
      </div>
      <div className='home_hero'>
        <div className='hero_container_one'>
          <div className='socials_container'>
            <img src={require('../../assets/instagram.svg')} alt='instagram' />
            <img src={require('../../assets/snapchat.svg')} alt='snapchat' />
            <img src={require('../../assets/sms.svg')} alt='mail' />
          </div>
          <div className='intro_container'>
            <p>Hello, I'm</p>
            <p className='name'>Fadejimi Ogunleye</p>
            <p>a Creative Photographer 📸</p>
            <p>
              founder of <span>CartiZn.</span>
            </p>
            <p>
              With a passion for capturing the beauty of the world through my
              lens. Photography is more than just a hobby for me, it's a way of
              life. My photography style is a blend of artistry and
              storytelling. I love experimenting with different techniques and
              perspectives to create unique and visually striking images. From
              vivid colors and dramatic lighting to minimalist compositions, I
              believe in pushing the boundaries of creativity to make each
              photograph a work of art.
            </p>
          </div>
        </div>
        <div className='hero_container_two'>
        <img src={require('../../assets/carti.png')} alt='Carti' />
        </div>
      </div>
    </div>
  );
};

export default Home;
