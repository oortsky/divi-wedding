const Gifts = () => {
  return (
    <section id="gifts" className="py-20 p-6 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="text-center max-w-lg">
            <span className="uppercase text-gray-500 text-xs tracking-wider block mb-4">
              ungkapan tanda kasih
            </span>
            <h2 className="text-primary-blue font-sacramento text-5xl font-bold">
              Kirim Hadiah
            </h2>
            <p className="text-xs font-light mt-4">
              Kehadiran Anda adalah hadiah terindah bagi kami. Jika ingin
              memberikan hadiah, dapat dikirim ke rekening di bawah. Terima
              kasih!
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="w-full max-w-md">
            <div className="border border-gray-300 rounded-lg p-5 text-center shadow-md">
              <ul>
                <li className="py-4">
                  <div className="font-semibold text-base">Permata Bank</div>
                  <p className="text-gray-700 text-sm mt-2">
                    9927693019 - NASRUDIN
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
