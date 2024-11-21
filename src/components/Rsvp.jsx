import { useState, useEffect } from "react";
import { ulid } from "ulid";
import confetti from "canvas-confetti";
import { supabase } from "../libs/supabase.js"; // Import Supabase client

const Rsvp = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isAttending, setIsAttending] = useState(null);
  const [error, setError] = useState(null);

  // Periksa apakah user sudah submit data berdasarkan ID di localStorage
  useEffect(() => {
    const savedId = localStorage.getItem("rsvpId");
    if (savedId) {
      checkRSVPStatus(savedId); // Cek status RSVP berdasarkan ID yang tersimpan
    }
  }, []);

  // Fungsi untuk memeriksa status RSVP di database
  const checkRSVPStatus = async (id) => {
    const { data, error } = await supabase
      .from("guests")
      .select("attending")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error checking RSVP status:", error);
    } else if (data) {
      setSubmitted(true);
      setIsAttending(data.attending);
    }
  };

  const handleSupabaseInsert = async (formData, id) => {
    try {
      const { data, error } = await supabase.from("guests").insert([
        {
          id: id, // Gunakan ID ULID yang dihasilkan
          name: formData.get("name"),
          attending: formData.get("attending") === "Yes",
          count: formData.get("count"),
        },
      ]);

      if (error) {
        console.error("Error inserting data:", error);
        setError("Gagal mengirim data. Silakan coba lagi.");
      } else {
        console.log("Data inserted:", data);
        localStorage.setItem("rsvpId", id); // Simpan ID ULID ke localStorage
      }
    } catch (error) {
      console.error("Error inserting data:", error);
      setError("Gagal mengirim data. Silakan coba lagi.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const attending = formData.get("attending") === "Yes";
    const newId = ulid(); // Buat ID ULID baru

    setIsAttending(attending);
    setSubmitted(true);
    setError(null); // Reset error state

    console.log("Nama Lengkap:", formData.get("name"));
    console.log("Hadir:", formData.get("attending"));
    console.log("Jumlah Tamu:", formData.get("count"));

    // Simpan data ke Supabase dengan ID ULID
    await handleSupabaseInsert(formData, newId);

    // Tampilkan confetti
    confetti({
      particleCount: 150,
      spread: 60,
    });
  };

  return (
    <section
      id="rsvp"
      className="p-6 bg-broken-white py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/bg.png')`,
      }}
    >
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="text-center max-w-lg">
            <span className="uppercase text-gray-500 text-sm tracking-wider block mb-4">
              konfirmasi kehadiran
            </span>
            <h2 className="text-primary-blue font-sacramento text-5xl font-bold">
              RSVP
            </h2>
            <p className="text-base font-light mt-4">
              Anda dimohon untuk melengkapi formulir di bawah ini sebagai
              konfirmasi kehadiran pada acara pernikahan kami.
            </p>
          </div>
        </div>

        {/* RSVP Form */}
        <div className="flex justify-center mt-12">
          <div className="w-full max-w-md">
            <div className="border border-gray-300 rounded-lg p-5 shadow-md">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  {error && (
                    <div className="text-red-500 text-sm mb-4">{error}</div>
                  )}
                  <div className="form-group py-4">
                    <label htmlFor="name" className="font-semibold">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="bg-transparent border-b-2 border-primary-blue w-full decoration-0 outline-0 mt-2"
                      required
                    />
                  </div>
                  <div className="form-group py-4">
                    <label className="font-semibold">
                      Apakah Anda Akan Hadir?
                    </label>
                    <div className="flex items-center gap-6 mt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          id="attending-yes"
                          name="attending"
                          value="Yes"
                          className="radio radio-sm bg-transparent border-primary-blue checked:bg-primary-blue"
                          required
                        />
                        <span>Ya, Hadir</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          id="attending-no"
                          name="attending"
                          value="No"
                          className="radio radio-sm bg-transparent border-primary-blue checked:bg-primary-blue"
                          required
                        />
                        <span>Tidak Hadir</span>
                      </label>
                    </div>
                  </div>
                  <div className="form-group py-4">
                    <label htmlFor="count" className="font-semibold">
                      Jumlah Tamu
                    </label>
                    <input
                      type="number"
                      id="count"
                      name="count"
                      min="1"
                      max="3"
                      defaultValue="1"
                      className="bg-transparent border-b-2 border-primary-blue w-full decoration-0 outline-0 mt-2"
                      required
                    />
                    <span className="text-xs font-light">
                      * Maks 3 orang, termasuk Anda.
                    </span>
                  </div>
                  <div className="flex justify-end form-group py-4">
                    <button
                      type="submit"
                      className="btn bg-primary-blue text-white rounded-full tracking-wide hover:text-primary-blue hover:bg-white transition ease-out duration-150"
                    >
                      <i className="bi bi-send-fill"></i>
                      Kirim
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8">
                  {isAttending ? (
                    <div>
                      <h1 className="text-primary-blue font-sacramento text-4xl font-bold">
                        Terima Kasih!
                      </h1>
                      <p className="text-base font-light">
                        Kami senang Anda bisa hadir dan menantikan kehadiran
                        Anda di acara kami.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h1 className="text-primary-blue font-sacramento text-4xl font-bold">
                        Terima Kasih!
                      </h1>
                      <p className="text-base font-light">
                        Kami mengerti bahwa Anda tidak dapat hadir, dan kami
                        menghargainya.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rsvp;