const GetInMap = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <p className="md:text-lg text-base leading-6">Prostrikers</p>
        <p className="md:text-lg text-base leading-7 text-[#404040]">
          22023 Teuku Umar, Kartini, NG 95006, USA
        </p>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70591.4755857888!2d-121.54994067972568!3d38.562989384408354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad11e2ba74ebf%3A0x6a48ef45bb45fc90!2sPRO%20STRIKERS!5e0!3m2!1sen!2sbd!4v1711863972354!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{ border: "0px", borderRadius: "10px" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="grid grid-cols-2 items-center">
        <div className="border-s-[1.5px] border-s-slate-400 border-solid ps-2 border-white text-lg leading-6">
          <p>Email</p>
          <p className="text-[#404040]">info@prostrikers.com</p>
        </div>
        <div className="border-s-[1.5px] border-s-slate-400 border-solid ps-2 border-white text-lg leading-6">
          <p>Phone</p>
          <p className="text-[#404040]"> (916)-890-5834</p>
        </div>
      </div>
    </div>
  );
};

export default GetInMap;
