import React, { useEffect, useState } from "react";
import { authApi } from "../../services/api";

export default function Alerts() {
  const [items, setItems] = useState([]);
  const fetch = async () => { setItems(await authApi.request(`/admin/alerts`)); };
  useEffect(() => { fetch(); }, []);
  const resolve = async (id) => { await authApi.request(`/admin/alerts/${id}`, { method: "PUT", body: JSON.stringify({ resolved: true }) }); fetch(); };
  const remove = async (id) => { await authApi.request(`/admin/alerts/${id}`, { method: "DELETE" }); fetch(); };
  return (
    <div>
      <h3 className="mb-4 text-xl">Alerts</h3>
      <ul>
        {items.map((a) => (
          <li key={a._id} className="flex items-center justify-between py-2">
            <div>
              <div className="font-medium">{a.message}</div>
              <div className="text-sm text-gray-400">Level: {a.level} • {a.resolved ? 'Resolved' : 'Active'}</div>
            </div>
            <div className="flex gap-2">
              {!a.resolved && <button onClick={() => resolve(a._id)} className="text-green-400">Resolve</button>}
              <button onClick={() => remove(a._id)} className="text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
