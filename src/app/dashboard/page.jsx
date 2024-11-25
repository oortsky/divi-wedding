"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../libs/supabase.js";

export default function Dashboard() {
  const [guestData, setGuestData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuestData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("guests")
        .select("name, attending, count");

      if (error) {
        console.error("Error fetching guest data:", error);
      } else {
        setGuestData(data);
      }
      setLoading(false);
    };

    fetchGuestData();
  }, []);

  const totalGuests = guestData.reduce((acc, guest) => acc + guest.count, 0);
  const attendingGuests = guestData
    .filter(guest => guest.attending)
    .reduce((acc, guest) => acc + guest.count, 0);
  const notAttendingGuests = totalGuests - attendingGuests;

  if (loading) return (
    <div className="w-full h-[100dvh] flex justify-center items-center">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
      <p className="text-lg text-gray-500">
        Selamat datang di halaman dashboard Anda!
      </p>

      <div className="overflow-x-auto shadow-lg rounded-lg gap-6">
        <div className="stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <i className="bi bi-people-fill text-3xl"></i>
            </div>
            <div className="stat-title">Total Tamu</div>
            <div className="stat-value text-primary-blue">
              {totalGuests.toLocaleString()}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <i className="bi bi-check-circle-fill text-3xl text-green-500"></i>
            </div>
            <div className="stat-title">Tamu Hadir</div>
            <div className="stat-value text-green-600">
              {attendingGuests.toLocaleString()}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <i className="bi bi-x-circle-fill text-3xl text-red-500"></i>
            </div>
            <div className="stat-title">Tamu Tidak Hadir</div>
            <div className="stat-value text-red-600">
              {notAttendingGuests.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table table-zebra w-full whitespace-nowrap">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th>No.</th>
              <th>Nama</th>
              <th>Jumlah</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {guestData.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  Tidak Ada Tamu
                </td>
              </tr>
            ) : (
              guestData.map((guest, index) => (
                <tr
                  key={index}
                  className={guest.attending ? "bg-green-50" : "bg-red-50"}
                >
                  <th>{index + 1}</th>
                  <td>{guest.name}</td>
                  <td>{guest.count} orang</td>
                  <td>
                    <div
                      className={`badge ${
                        guest.attending ? "badge-success" : "badge-error"
                      }`} // Ensures the badge stays on one line
                    >
                      {guest.attending ? "Hadir" : "Tidak Hadir"}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}