import './HomePage.scss';
import { FE_IMAGE_URL } from '../../../utils/config';
import FePagination from '../../../components/FePagination1';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import Carousel from 'react-bootstrap/Carousel';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <section className="section1">
          <div className="mask"></div>
          <div className="pc-img d-none d-md-flex">
            <img src={`${FE_IMAGE_URL}/homepage/pc-img.svg`} alt="" />
          </div>

          <div className="s1-position">
            <p className="font-cn-content">今朝有酒今朝醉，明日愁來明日愁。</p>
            <h3 className="font-en-title">There is wine today,</h3>
            <h3 className="font-en-title">Drunkenness today,</h3>
            <h3 className="font-en-title">Sorrow tomorrow。</h3>
            <p className="font-cn-title">放鬆交友，飲酒生活</p>
            <button className="s1-button button-style my-2">Details</button>
          </div>
          <div className="ul-position">
            <FePagination />
          </div>
          <div className="box"></div>
        </section>
        <section className="section2">
          <h3 className="section-title-en">W</h3>
          <div className="section-content">
            <h3 className="section-title-cn">關於我們</h3>
            <p className="section-content-en">Welcome to INJOIN</p>
            <p className="section-content-cn">莫扎特講過一句值得人反覆尋思的話，</p>
            <p className="section-content-cn">誰和我一樣用功，誰就會和我一樣成功。</p>
            <button className="button-style section-button">Read More</button>
          </div>
          <div className="s2-img1">
            <img src={`${FE_IMAGE_URL}/homepage/s2-img1.jpg`} alt="" />
          </div>
          <div className="s2-img2">
            <img src={`${FE_IMAGE_URL}/homepage/s2-img2.png`} alt="" />
          </div>
        </section>
        <section className="section3 position-relative">
          <h3 className="section-title-en w-100 text-end">B</h3>
          <div className="section-content text-end">
            <h3 className="section-title-cn">熱門商品</h3>
            <p className="section-content-en">Best Seller</p>
            <p className="section-content-cn">我們可以很篤定的說，</p>
            <p className="section-content-cn">誰這需要花很多時間來嚴謹地論證。</p>
            <button className="button-style section-button">Buy It !</button>
          </div>
          <div className="slider position-absolute">
            <div className="slider-prd row">
              <div className="col-md-4 prd-card d-none d-md-block">
                <div className="prd-img">
                  <img src={`${FE_IMAGE_URL}/homepage/s3-img.png`} alt="" />
                </div>
                <p className="prd-text">[ Porton mosto verde ]</p>
              </div>
              <div className="col-6 col-md-4 prd-card">
                <div className="prd-img">
                  <img src={`${FE_IMAGE_URL}/homepage/s3-img.png`} alt="" />
                </div>
                <p className="prd-text">[ Porton mosto verde ]</p>
              </div>
              <div className="col-6 col-md-4 prd-card">
                <div className="prd-img">
                  <img src={`${FE_IMAGE_URL}/homepage/s3-img.png`} alt="" />
                </div>
                <p className="prd-text">[ Porton mosto verde ]</p>
              </div>
            </div>
            <div className="slider-button">
              <AiFillCaretLeft className="button-size" />
              <AiFillCaretRight className="button-size" />
            </div>
          </div>
        </section>
        <section className="section4 position-relative">
          <h3 className="section-title-en">C</h3>
          <div className="section-content">
            <h3 className="section-title-cn">調酒酒譜</h3>
            <p className="section-content-en">classic cocktail</p>
            <p className="section-content-cn">總而言之，如果別人做得到，那我也可以做到。</p>
            <p className="section-content-cn">在人生的歷程中，酒的出現是必然的。</p>
            <button className="button-style section-button">Read More</button>
          </div>
          <div className="bartd-slider position-absolute">
            <div className="bartd-card">
              <div className="bartd-img">
                <img src={`${FE_IMAGE_URL}/homepage/s4-img.png`} alt="" />
              </div>
              <p className="batrd-text">[ 西班牙式琴通寧 ]</p>
            </div>
            <div className="bartd-card d-none d-md-block">
              <div className="bartd-img">
                <img src={`${FE_IMAGE_URL}/homepage/s4-img.png`} alt="" />
              </div>
              <p className="batrd-text">[ 西班牙式琴通寧 ]</p>
            </div>
            <div className="bartd-card d-none d-md-block">
              <div className="bartd-img">
                <img src={`${FE_IMAGE_URL}/homepage/s4-img.png`} alt="" />
              </div>
              <p className="batrd-text">[ 西班牙式琴通寧 ]</p>
            </div>
            <div className="slider-button">
              <AiFillCaretLeft className="button-size" />
              <AiFillCaretRight className="button-size" />
            </div>
          </div>
        </section>
        <section className="section5 position-relative">
          <h3 className="section-title-en w-100 text-end">T</h3>
          <div className="section-content text-end text-md-start">
            <h3 className="section-title-cn">現正揪團</h3>
            <p className="section-content-en">travel with a tour group</p>
            <br />
            <br />
            <button className="button-style section-button">Details</button>
          </div>
          <div className="s5-img">
            <img src={`${FE_IMAGE_URL}/homepage/s5-img.png`} alt="" />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
