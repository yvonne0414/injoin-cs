import './HomePage.scss';
import FePage2Header from '../../../components/FePage2Header';


const HomePage = () => {
  return (
    <>
      <div class="container">
        <section class="section1">
          <div class="mask"></div>
          <div class="pc-img d-none d-md-flex">
            <img src="FePage2Header" alt="" />
          </div>

          <div class="s1-position">
            <p class="font-cn-content">今朝有酒今朝醉，明日愁來明日愁。</p>
            <h3 class="font-en-title">There is wine today,</h3>
            <h3 class="font-en-title">Drunkenness today,</h3>
            <h3 class="font-en-title">Sorrow tomorrow。</h3>
            <p class="font-cn-title">放鬆交友，飲酒生活</p>
            <button class="s1-button button-style my-2">Details</button>
          </div>
          <div class="ul-position">
            <ul class="pagination">
              <li class="mx-2">
                <a href="">
                  <div>
                    <p>left</p>
                    <p>Prev</p>
                  </div>
                </a>
              </li>
              <li class="mx-2 mx-md-5">
                <a href="">
                  <div>
                    <p>1/4</p>
                  </div>
                </a>
              </li>
              <li class="mx-2">
                <a class="active" href="">
                  <div>
                    <p>right</p>
                    <p>Next</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="box"></div>
        </section>
        <section class="section2 d-none">
          <h3 class="section-title-en">W</h3>
          <div class="section-content">
            <h3 class="section-title-cn">關於我們</h3>
            <p class="section-content-en">Welcome to INJOIN</p>
            <p class="section-content-cn">莫扎特講過一句值得人反覆尋思的話，</p>
            <p class="section-content-cn">誰和我一樣用功，誰就會和我一樣成功。</p>
            <button class="button-style section-button">Read More</button>
          </div>
          <div class="s2-img1">
            <img src="../images/s2-img1.jpg" alt="" />
          </div>
          <div class="s2-img2">
            <img src="../images/s2-img2.png" alt="" />
          </div>
        </section>
        <section class="section3 position-relative d-none">
          <h3 class="section-title-en w-100 text-end">B</h3>
          <div class="section-content text-end">
            <h3 class="section-title-cn">熱門商品</h3>
            <p class="section-content-en">Best Seller</p>
            <p class="section-content-cn">我們可以很篤定的說，</p>
            <p class="section-content-cn">誰這需要花很多時間來嚴謹地論證。</p>
            <button class="button-style section-button">Buy It !</button>
          </div>
          <div class="slider position-absolute">
            <div class="slider-prd d-flex justify-content-between">

              <div class="prd-card">
                <div class="prd-img">
                  <img src="../images/s3-img.png" alt="" />
                </div>
                <p class="prd-text">[ Porton mosto verde ]</p>
              </div>
              <div class="prd-card">
                <div class="prd-img">
                  <img src="../images/s3-img.png" alt="" />
                </div>
                <p class="prd-text">[ Porton mosto verde ]</p>
              </div>
            </div>
            <div class="slider-button">
              <button class="left">left</button>
              <button class="right">right</button>
            </div>
          </div>
        </section>
        <section class="section4 position-relative d-none">
          <h3 class="section-title-en">G</h3>
          <div class="section-content">
            <h3 class="section-title-cn">調酒酒譜</h3>
            <p class="section-content-en">Welcome to INJOIN</p>
            <p class="section-content-cn">總而言之，如果別人做得到，那我也可以做到。</p>
            <p class="section-content-cn">在人生的歷程中，酒的出現是必然的。</p>
            <button class="button-style section-button">Read More</button>
          </div>
          <div class="bartd-slider position-absolute">
            <div class="bartd-card">
              <div class="bartd-img">
                <img src="../images/s4-img.png" alt="" />
              </div>
              <p class="batrd-text">[ 西班牙式琴通寧 ]</p>
            </div>
            <div class="bartd-card d-none d-md-block">
              <div class="bartd-img">
                <img src="../images/s4-img.png" alt="" />
              </div>
              <p class="batrd-text">[ 西班牙式琴通寧 ]</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
