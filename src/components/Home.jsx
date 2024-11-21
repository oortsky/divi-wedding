const Home = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center min-h-screen -mt-16 py-20"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      <div className="container mx-auto p-6">
        <div className="flex justify-center">
          <div className="text-center max-w-lg">
            <h2 className="text-primary-blue font-sacramento text-5xl font-bold mb-6">
              Acara Pernikahan
            </h2>
            <h3 className="text-gray-700 text-sm mb-6">
              Diselenggarakan pada 26 Januari 2025 di Kab. Bekasi, Jawa Barat.
            </h3>
            <p className="text-gray-600 text-sm">
              Oleh karena itu, dengan segala hormat, kami bermaksud untuk
              mengundang Bapak/Ibu, Saudara/i, untuk hadir pada acara pernikahan
              kami.
            </p>
          </div>
        </div>

        {/* Ubah grid menjadi responsif flex layout */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-20 text-center space-y-8 md:space-y-0 md:space-x-20">
          {/* Bagian mempelai pria */}
          <div className="w-full md:w-1/2 text-center">
            <h3 className="text-5xl text-indigo-950 font-sacramento font-semibold">
              Nasrudin <br /> (Udin/Ndin)
            </h3>
            <p className="text-base uppercase font-light tracking-wide mt-2">
              Putra ke-2 dari Alm. Bapak Jahadi (Koting) <br /> dan <br />{" "}
              Ibu Paris Susilawati
            </p>
          </div>

          {/* Ikon hati */}
          <span className="heart py-8">
            <i className="text-4xl bi bi-heart-fill text-red-500"></i>
          </span>

          {/* Bagian mempelai wanita */}
          <div className="w-full md:w-1/2 text-center">
            <h3 className="text-5xl text-indigo-950 font-sacramento font-semibold">
              Dewi Octaviani <br /> (Vivi)
            </h3>
            <p className="text-base uppercase font-light tracking-wide mt-2">
              Putri ke-2 dari Bapak Edi Subroto <br /> dan <br /> Ibu Suharsi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;