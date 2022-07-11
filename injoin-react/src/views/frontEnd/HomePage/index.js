import './HomePage.scss';
import { FE_IMAGE_URL } from '../../../utils/config';
// import FePagination from '../../../components/FePagination1';
// import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
// import Carousel from 'react-bootstrap/Carousel';
import HomeHotCard from '../../../components/HomePage/HomeHotCard';
import Slider from 'react-slick';
import HomeBartdCard from '../../../components/HomePage/HomeBartdCard';
import { useState, useEffect } from 'react';
import { API_URL } from '../../../utils/config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AOS from 'aos';
// import 'aos/dist/aos.css';

const HomePage = () => {
  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  const [hotprd, setHotprd] = useState([]);
  const [hotbar, setHotbar] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    let gethotprd = async () => {
      let response = await axios.get(`${API_URL}/prd/hot`);
      setHotprd(response.data.data);
      console.log('res', response.data.data);
      // console.log('o', response.data.data[0].name);
    };
    gethotprd();
    let gethotbar = async () => {
      let response = await axios.get(`${API_URL}/bar/hot`);
      setHotbar(response.data.data);
      console.log('resb', response.data.data);
      console.log('o', response.data.data[0].name);
    };
    gethotbar();
    // AOS
    // AOS.init();
    // AOS.refresh();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <section className="section1">
          <div className="homeBox-1" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="1000"></div>
          <div data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1500">
            <div className="mask"></div>
            <div className="pc-img d-none d-md-flex">
              <img src={`${FE_IMAGE_URL}/homepage/pc-img.svg`} alt="" />
            </div>
          </div>

          <div className="s1-position" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="1200">
            <p className="font-cn-content">今朝有酒今朝醉，明日愁來明日愁。</p>
            <h3 className="font-en-title">There is wine today,</h3>
            <h3 className="font-en-title">Drunkenness today,</h3>
            <h3 className="font-en-title">Sorrow tomorrow。</h3>
            <p className="font-cn-title">放鬆交友，飲酒生活</p>
            <Link to="/account/user" className="s1-button button-style my-2">
              Join Us
            </Link>
          </div>
        </section>
      </div>

      <div className="container-fluid">
        <section className="section2 position-relative">
          <div className="homeBox-2" data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1300"></div>
          <div className="section-content" data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1000">
            <h3 className="section-title-en">W</h3>
            <h3 className="section-title-cn">關於我們</h3>
            <p className="section-content-en">Welcome to INJOIN</p>
            <p className="section-content-cn">莫扎特講過一句值得人反覆尋思的話，</p>
            <p className="section-content-cn">誰和我一樣用功，誰就會和我一樣成功。</p>
            <Link to="/aboutus" className="button-style section-button">
              Read More
            </Link>
          </div>
          <div data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="1000" className="position-absolut right-0 homepage-sec2-img-area">
            <div className="s2-img1">
              <img src={`${FE_IMAGE_URL}/homepage/s2-img1.jpg`} alt="" className="img-fluid w-100" />
            </div>
            <div className="s2-img2">
              <img src={`${FE_IMAGE_URL}/homepage/s2-img2.png`} alt="" className="img-fluid w-100" />
            </div>
          </div>
        </section>
        <section className="section3 position-relative">
          <div className="homeBox-3" data-aos="fade-rigleftht" data-aos-easing="ease-in" data-aos-duration="1500"></div>
          <div className="section-content text-end" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="1000">
            <h3 className="section-title-en text-end">B</h3>
            <h3 className="section-title-cn">熱門商品</h3>
            <p className="section-content-en">Best Seller</p>
            <p className="section-content-cn">我們可以很篤定的說，</p>
            <p className="section-content-cn">誰這需要花很多時間來嚴謹地論證。</p>
            <Link to="/production" className="button-style section-button section-button3">
              Buy It !
            </Link>
          </div>
          <div className="homepages3-slder" data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1000">
            <Slider {...settings}>
              {hotprd.map((v, i) => {
                return <HomeHotCard key={v.id} data={v} />;
              })}
            </Slider>
          </div>
        </section>
        <section className="section4 position-relative">
          <div className="homeBox-4" data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1500"></div>
          <div className="section-content" data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1000">
            <h3 className="section-title-en">C</h3>
            <h3 className="section-title-cn">調酒酒譜</h3>
            <p className="section-content-en">classic cocktail</p>
            <p className="section-content-cn">總而言之，如果別人做得到，那我也可以做到。</p>
            <p className="section-content-cn">在人生的歷程中，酒的出現是必然的。</p>
            <Link to="/bartending" className="button-style section-button">
              Read More
            </Link>
          </div>
          <div className="homepages4-slider" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="1000">
            <Slider {...settings}>
              {hotbar.map((v, i) => {
                return <HomeBartdCard key={v.id} data={v} />;
              })}
            </Slider>
          </div>
        </section>
        <section className="section5 position-relative">
          <div className="homeBox-5" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="1300"></div>
          <div className="section-content text-end text-md-start" data-aos="fade-left" data-aos-easing="ease-in" data-aos-duration="1000">
            <h3 className="section-title-en text-end">T</h3>
            <h3 className="section-title-cn">現正揪團</h3>
            <p className="section-content-en">travel with a tour group</p>
            <br />
            <Link to="/newgroup" className="button-style section-button">
              Details
            </Link>
          </div>
          <div className="s5-img" data-aos="fade-right" data-aos-easing="ease-in" data-aos-duration="1200">
            <img src={`${FE_IMAGE_URL}/homepage/s5-img.png`} alt="" />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
