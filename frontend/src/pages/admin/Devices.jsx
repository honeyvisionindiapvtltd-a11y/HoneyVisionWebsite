import React, { useEffect, useState } from "react";
import { authApi } from "../../services/api";

export default function Devices() {
  const [items, setItems] = useState([]);

  const fetch = async () => { setItems(await authApi.request(`/admin/devices`)); };
  useEffect(() => { fetch(); }, []);

  const remove = async (id) => { await authApi.request(`/admin/devices/${id}`, { method: "DELETE" }); fetch(); };

  return (
    <div>
      <h3 className="mb-4 text-xl">AI Cameras / Devices</h3>
      <ul>
        {items.map((d) => (
          <li key={d._id} className="flex items-center justify-between py-2">
            <div>
              <div className="font-medium">{d.name}</div>
              <div className="text-sm text-gray-400">{d.serial || '—'} • {d.status}</div>
            </div>
            <button onClick={() => remove(d._id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
