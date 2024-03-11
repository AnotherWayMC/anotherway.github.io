function Main() {
  return (
    <>
      <section className="banner-sect">
        <div className="banner flex items-center justify-center text-white">
          <div className="blur"></div>
          <h2 className="text-5xl sm:text-7xl ">AnotherWay</h2>
          <p className="text-2xl w-1/3">
            Сервер на версії 1.16.5-1.20.4 по політиці, ролеплею та історії
          </p>
          <div className="flex">
            <a
              href="https://discord.com/invite/nvs3EZY2xE"
              target="_blank"
              className="btn hover:bg-white text-xl hover:text-black"
            >
              Почати гру
            </a>
          </div>
        </div>
      </section>
      <section className="sm:px-5">
        <h3 className="text-3xl">Що таке AnotherWay?</h3>
        <div className="w-full flex flex-col sm:grid gap-x-2 gap-y-9 text-xl sm:grid-cols-3 grid-cols-1">
          <div className="sm:text-left row-start-1 col-start-1">
            <p>
              <b>AnotherWay</b> - це безкоштовний майнкрафт{" "}
              <b>на версії Java та Bedrock</b> сервер про альтернативну історію
              України з відіграшем ролей людей різних епох(RP), елементами
              політики, а також з додатковим контентом: новою зброєю,
              предметами, їжею, блоками і так далі.
            </p>
            <div className="flex justify-center">
              <img src="../images/main/player.png" alt="Мапа серверу" />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <img
                src="../images/main/map.png"
                className="main-img"
                alt="Мапа серверу"
              />
            </div>
            <p className="row-start-1 sm:text-center col-start-2">
              Наш сервер - це Ванілла+, засноване на плагіні Towny, який
              дозволяє цікаво і ефективно керувати країнами і місцями та додає
              кілька важливих механік для нашого серверу. Тобто ми додаємо новий
              контент на сервер, як-от зброя, блоки, обладунки, предмети,
              рослини за допомогою плагінів і ресурс паків.
            </p>
          </div>

          <div className="row-start-1 sm:text-right col-start-3">
            <p>
              Ми надаємо вам безмежні можливості для відіграшу ролей правителів,
              пастухів, фермерів, воїнів, аристократів, єпископів та сотень
              інших ролей і професій, реалізації ваших політичних амбіцій і
              бажань.
            </p>
            <div className="flex justify-center">
              <img src="../images/main/player.png" alt="Мапа серверу" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-3xl">ЧАПИ</h3>
        <div className="sm:grid grid-cols-3 gap-3">
          <div className="my-4">
            <p className="text-xl">Як почати гру?</p>
            <p>
              Щоб потрапити до нас вам потрібно перейти до нас в{" "}
              <a
                href="https://discord.com/invite/nvs3EZY2xE"
                target="_blank"
                className="underline text-sky-500"
              >
                дискорд
              </a>
              , перейти в категорію "почати гру", продивитися все, що є у цій
              категорії, зайти в канал "подати заявку", подати саму заявку і
              очікувати, поки вас приймуть
            </p>
          </div>
          <div className="my-4">
            <p className="text-xl">Чи є у вас донат?</p>
            <p>
              Так. Ви можете купити привілеї, які дають такі бонуси, як
              переносний верстак, точило, картографічний стіл і так далі та
              можливість ставити погоду і час для себе. Тобто донат, по суті, на
              гру не впливає
            </p>
          </div>
          <div className="my-4">
            <p className="text-xl">Як потрапити на спавн?</p>
            <p>
              На спавн ви потрапляєте при вході на сервер. Там ви можете вибрати
              собі місто, помилуватися його краєвидами та потрапити на різні
              івенти. Проте, якщо ви вже вибрали місто, то щоб потрапити на
              спавн вам треба знайти спеціальний портал у основному світі, або
              отримати привілей Ютубера або Боярина і прописати /spawn
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
