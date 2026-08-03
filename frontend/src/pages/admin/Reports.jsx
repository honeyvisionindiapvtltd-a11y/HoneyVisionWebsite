import React, { useEffect, useState } from "react";
import { authApi } from "../../services/api";

export default function Reports() {
  const [items, setItems] = useState([]);
  const fetch = async () => setItems(await authApi.request(`/admin/reports`));
  useEffect(() => { fetch(); }, []);
  const remove = async (id) => { await authApi.request(`/admin/reports/${id}`, { method: "DELETE" }); fetch(); };
  return (
    <div>
      <h3 className="mb-4 text-xl">Reports</h3>
      <ul>
        {items.map((r) => (
          <li key={r._id} className="flex items-center justify-between py-2">
            <div>
              <div className="font-medium">{r.title}</div>
              <div className="text-sm text-gray-400">Type: {r.type} • {new Date(r.generatedAt).toLocaleString()}</div>
            </div>
            <button onClick={() => remove(r._id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
