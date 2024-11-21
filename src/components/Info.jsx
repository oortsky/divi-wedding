const Info = () => {
  const locationUrl = [
    {
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.796708994257!2d107.13841009999999!3d-6.2022109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6987007d72800b%3A0x3337417d24748ff0!2sR42Q%2BGCR%20Saung%20yanta%20Ki%20abrag%2C%20Jl.%20Ktr.%20Desa%20Banjarsari%2C%20Banjarsari%2C%20Kec.%20Sukatani%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat%2017630!5e0!3m2!1sid!2sid!4v1691879256732!5m2!1sid!2sid"
    },
    {
      link: "https://maps.app.goo.gl/Jook48PZ6UVAvm3o8"
    }
  ];

  return (
    <section id="info" className="p-6 bg-white py-20">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="text-center max-w-lg">
            <span className="uppercase text-gray-500 text-sm tracking-wider block mb-6">
              seputar info acara
            </span>
            <h2 className="text-primary-blue font-sacramento text-5xl font-bold">
              Informasi Acara
            </h2>
            <p className="text-sm font-light mt-6">
              Alamat: Rumah Mempelai Pria. <br />
              Jl. Kantor Desa Banjarsari, Kp. Teriti Buniayu RT.002/RW.006, Desa
              Banjarsari, Kec. Sukatani, Kab. Bekasi
            </p>

            {/* Google Map Embed */}
            <div className="w-full h-fit rounded-lg overflow-hidden mt-6 mb-3 shadow-md">
              <iframe
                src={locationUrl[0].link}
                width="100%"
                height="250"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a
              href={locationUrl[1].link}
              target="_blank"
              className="btn w-full max-w-sm shadow bg-primary-blue text-white border-primary-blue hover:text-primary-blue hover:bg-white hover:border-white"
            >
              View Maps
            </a>

            <p className="text-sm font-light mt-6">
              Diharapkan untuk tidak salah alamat dan tanggal. Manakala tiba di
              tujuan namun tidak ada tanda-tanda sedang dilangsungkan
              pernikahan, boleh jadi Anda salah jadwal, atau salah tempat.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-6">
          {/* Akad Nikah Card */}
          <div className="card bg-primary-blue text-white w-full shadow-md mb-5 max-w-md">
            <div className="card-body text-center">
              <h2 className="card-title mx-auto mb-4 uppercase font-semibold">
                Akad Nikah
              </h2>
              <div className="flex justify-center space-x-6">
                <div className="flex flex-col items-center text-xs">
                  <i className="bi bi-clock text-lg mb-1"></i>
                  <span>09.00 - 10.00</span>
                </div>
                <div className="flex flex-col items-center text-xs">
                  <i className="bi bi-calendar3 text-lg mb-1"></i>
                  <span>Minggu, 26 Jan 2025</span>
                </div>
              </div>
              <p className="text-xs mt-4">
                Saat acara akad diharapkan untuk kondusif menjaga kekhidmatan
                dan kekhusyuan seluruh prosesi.
              </p>
            </div>
          </div>

          {/* Resepsi Card */}
          <div className="card bg-primary-blue text-white w-full shadow-md max-w-md">
            <div className="card-body text-center">
              <h2 className="card-title mx-auto mb-4 uppercase font-semibold">
                Resepsi
              </h2>
              <div className="flex justify-center space-x-6">
                <div className="flex flex-col items-center text-xs">
                  <i className="bi bi-clock text-lg mb-1"></i>
                  <span>11.00 - selesai</span>
                </div>
                <div className="flex flex-col items-center text-xs">
                  <i className="bi bi-calendar3 text-lg mb-1"></i>
                  <span>Minggu, 26 Jan 2025</span>
                </div>
              </div>
              <p className="text-xs mt-4">
                Saat acara akad diharapkan untuk kondusif menjaga kekhidmatan
                dan kekhusyuan seluruh prosesi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
