<script>
  import {Swiper, SwiperSlide} from "swiper/svelte";
  import "swiper/css";
  import {EffectCoverflow, Pagination} from "swiper";
  import {t} from "@/utils";

  const dataList = [
    {
      title: "OMG",
      description: "Best app I’ve purchased! I started growing my own herbs, gardening, and I’m impressed with NatureID. It diagnosed my plants when they seem to be drying. I am super happy. Thank you!",
      date: "June 21",
      user: "Bella Storms",
    },
    {
      title: "It works!",
      description: "This app is awesome! It’s really easy to use and has some really cool features other apps don’t. It identifies plants really fast and gives very helpful care tips.",
      date: "June 21",
      user: "Audgia",
    },
    {
      title: "Best plant app!!",
      description: "I stumbled upon it by accident and downloading it was the best decision I made! My plants are thriving and I’m learning more and more on how to care for them all.",
      date: "May 5",
      user: "James Eldar",
    },
  ]
</script>

<section class="swiper-container">
  <Swiper
    class="screen-slider"
    slidesPerView={"auto"}
    allowTouchMove={true}
    centeredSlides={true}
    initialSlide={0}
    noSwiping={false}
    speed={500}
    autoplay
    loop
    spaceBetween={10}
    modules={[EffectCoverflow, Pagination]}
    loopAdditionalSlides={3}
    on:slideChange={(e) => {}}
    on:swiper={(e) => {}}
  >
    {#each dataList as {title, description, date, user} (title)}
      <SwiperSlide class="screen-slider-item" key="title">
        <div class="reviews__item">
          <div class="reviews__top">
            <div class="reviews__left">
              <div class="reviews__title">
                {t(title)}
              </div>
              <div class="reviews__stars"></div>
            </div>
            <div class="reviews__right">
              <span>{t(date)}</span>
              <span>{t(user)}</span>
            </div>
          </div>
          <div class="reviews__text">
             <span class="divtext--">
                {@html t(description)}
             </span>
          </div>
        </div>
      </SwiperSlide>
    {/each}
  </Swiper>
</section>

<style lang="scss" global>
  @import "./src/styles/mixins.scss";
  .swiper-container {
    height: 13.7rem;
    width: 100%;
    margin-bottom: -0.5rem;

    @include iPhonesAfterX {
      margin-bottom: 0.3rem;
    }
  }

  .screen-slider-item {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.05) !important;
    transform: translate3d(0, 0, 0);
    max-height: 13.2rem !important;
    width: 85% !important;
    padding: 0;

    @include tabletPortrait {
      width: 75%  !important;
    }
  }

  .screen-slider {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.05) !important;
    transform: translate3d(0, 0, 0);
    position: relative;
    margin: 0 auto;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .reviews {
    &__item {
      padding: 1.2rem 1rem 0.9rem 1.59rem;
      background-color: rgba(255, 255, 255, 0.8);
      font-size: 1.167rem;
      text-align: left;
      letter-spacing: -0.01em;
      box-sizing: border-box;
      border-radius: 0.667rem;
      opacity: 1;
      height: 100%;
      backdrop-filter: blur(0.333rem);
      transition: backdrop-filter 0.3s linear 0.2s;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    }

    &__top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 0.4rem;
    }

    &__title {
      font-weight: 700;
      margin-bottom: 0.35rem;
      text-transform: uppercase;
      color: #000;
      font-size: 1.25rem;
    }

    &__stars {
      margin-top: 0.7rem;
      width: 7rem;
      display: flex;
      justify-content: space-between;
      height: 1.3rem;
      background-image: url(@/images/icons/stars.png);
      background-size: cover;
    }

    &__right {
      text-align: right;
      padding-right: 0.7rem;
      color: rgb(134, 133, 140);
      display: flex;
      flex-direction: column;
      line-height: 1.95rem;

      & span {
        white-space: nowrap;
      }
    }

    &__date {
      line-height: 1.9rem;
    }

    &__text {
      position: relative;
      top: -0.3rem;
      font-size: 1.3rem;
      line-height: 1.3;
      overflow: auto;
      letter-spacing: -0.01rem;
      height: 6.8rem;
      color: #000;

      @media (max-width: 320px) {
        font-size: 1.2rem;
        line-height: 1.3;
      }

      .divtext-- {
        display: block;
      }
    }
  }
</style>
