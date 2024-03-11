function Media() {
  return (
    <div>
      <h2 className="text-2xl">Медіа ресурси</h2>
      <p>
        Медіа ресурси - цу логотипи, тексти та інша корисна інформація/контент,
        який потрібний ютуберам, стрімерам та тим, хто робить меми про наш
        сервер
      </p>
      <a
        href="/images/media/media.zip"
        className="btn positive-btn inline-block"
      >
        Завантажити пак
      </a>
      <section>
        <h4 className="text-xl">Логотипи</h4>
        <div className="media-grid">
          <figure className="media-asset">
            <img src="/images/media/logo1.png" alt="Логотип без фону" />
            <figcaption>Логотип без фону</figcaption>
          </figure>

          <figure className="media-asset">
            <img src="/images/media/logo2.png" alt="Логотип з фоном" />
            <figcaption>Логотип з фоном</figcaption>
          </figure>
        </div>
        <h4 className="text-xl">Тексти</h4>
        <div className="media-grid">
          <figure className="media-asset">
            <img src="/images/media/text1.png" alt="Текст без приписки" />
            <figcaption>Текст без приписки</figcaption>
          </figure>

          <figure className="media-asset">
            <img src="/images/media/text2.png" alt="Текст з припискою" />
            <figcaption>Текст з припискою</figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Media;
