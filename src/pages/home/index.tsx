import Carousel from '../../components/carousel';
import './styles.scss';

const Home = () => {
  const imageContainerOne = [
    require('../../assets/ayra.png'),
    require('../../assets/rema.png'),
    require('../../assets/carti.png'),
  ];

  const imageContainerTwo = [
    require('../../assets/girl1.png'),
    require('../../assets/girl2.png'),
    require('../../assets/girl3.png'),
  ];

  const imageContainerThree = [
    require('../../assets/girl2.png'),
    require('../../assets/girl3.png'),
    require('../../assets/girl1.png'),
  ];

  const imageContainerFour = [
    require('../../assets/girl3.png'),
    require('../../assets/ayra.png'),
    require('../../assets/rema.png'),
  ];

  const imageContainerFive = [
    require('../../assets/girl2.png'),
    require('../../assets/girl1.png'),
    require('../../assets/girl3.png'),
  ];

  return (
    <div className='home_main_container'>
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
              <img
                src={require('../../assets/instagram.svg')}
                alt='instagram'
              />
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
                lens. Photography is more than just a hobby for me, it's a way
                of life. My photography style is a blend of artistry and
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
        <div className='home_section'>
          <div className='section_one'>
            <div className='image_container_one'>
              <Carousel images={imageContainerOne} timeInterval={28000} />
            </div>
            <div className='image_container_two'>
              <div className='container_image_one'>
                <div className='con_1'>
                  <Carousel images={imageContainerTwo} timeInterval={22000} />
                </div>
                <div className='con_2'>
                  <Carousel images={imageContainerThree} timeInterval={10000} />
                </div>
              </div>
              <div className='container_image_two'>
                <div className='con_3'>
                  <Carousel images={imageContainerFour} timeInterval={17000} />
                </div>
                <div className='con_4'>
                  <Carousel images={imageContainerFive} timeInterval={27000} />
                </div>
              </div>
            </div>
          </div>
          <div className='section_two'>
            <div className='section_two_heading'>
              <p>
                Explore My <br /> World
              </p>
            </div>
            <div className='section_two_socials'>
              <div className='section_two_social'>
                <img
                  src={require('../../assets/instagram.svg')}
                  alt='instagram'
                />
                <img
                  src={require('../../assets/snapchat.svg')}
                  alt='snapchat'
                />
                <img src={require('../../assets/sms.svg')} alt='mail' />
              </div>
              <img src={require('../../assets/lined.svg')} alt='instagram' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
