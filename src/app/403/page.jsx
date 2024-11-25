export default function Forbidden() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-center space-y-6 p-6">
      <div className="text-red-500 text-6xl">
        <i className="bi bi-shield-lock-fill"></i>
      </div>
      <h1 className="text-4xl font-bold text-gray-800">403 - Forbidden</h1>
      <p className="text-base text-gray-600">
        Anda tidak memiliki akses ke halaman ini.
      </p>
      <a href="/" className="btn">
        Kembali ke Beranda
      </a>
    </div>
  );
}
