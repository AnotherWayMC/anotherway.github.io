import { useState } from "react";
import Message from "../components/Message";
import Logo from "/images/media/text1.png";
import { RxCopy } from "react-icons/rx";

function Main() {
  const [isCopied, setCopied] = useState(false);
  const copyIp = () => {
    navigator.clipboard.writeText("play.anotherway.pp.ua");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
    return;
  };
  return (
    <>
      <section className="banner-sect">
        <div className="banner relative flex items-center justify-center text-white">
          <div className="blur"></div>
          <img className="title" src={Logo} alt="AnotherWay" />
          <p className="text-2xl w-2/3">
            Мережа українських історично політичних серверів
          </p>
          <p className="text-2xl w-2/3">
            ip:{" "}
            <b
              className="cursor-pointer flex-container justify-center "
              onClick={copyIp}
            >
              play.anotherway.pp.ua
              <RxCopy size={24} />
            </b>
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
      <section className="sm:px-5 mt-3">
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
              <img
                src="../images/main/player.png"
                className="main-img"
                alt="Мапа серверу"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <h3 className="text-3xl">ЧАПИ</h3>
        <div className="sm:grid grid-cols-3 gap-3">
          <div className="my-4">
            <p className="text-xl">Як почати гру?</p>
            <p>
              Щоб потрапити до нас вам потрібно зайти на наш сервер по айпі{" "}
              <span className="text-blue-300 cursor-pointer" onClick={copyIp}>
                anotherway.us.to:35354
              </span>
              . Зареєструйтеся, прочитайте npc "Допомога" та /rules, виберіть
              державу і місто.
            </p>
          </div>
        </div>
      </section>
      {isCopied && <Message type="info" message="Айпі зкопійовано!" />}
    </>
  );
}

export default Main;
