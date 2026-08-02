import React, { useEffect, useState } from "react";
import { authApi } from "../../services/api";

export default function MediaLibrary() {
  const [items, setItems] = useState([]);
  const fetch = async () => { setItems(await authApi.request(`/admin/media`)); };
  useEffect(() => { fetch(); }, []);
  const remove = async (id) => { await authApi.request(`/admin/media/${id}`, { method: "DELETE" }); fetch(); };
  return (
    <div>
      <h3 className="mb-4 text-xl">Media Library</h3>
      <ul>
        {items.map((m) => (
          <li key={m._id} className="flex items-center justify-between py-2">
            <div>
              <div className="font-medium">{m.filename}</div>
              <div className="text-sm text-gray-400">{m.type} • {m.size || '-'} bytes</div>
            </div>
            <div className="flex gap-2">
              <a href={m.url} target="_blank" rel="noreferrer" className="text-blue-400">Open</a>
              <button onClick={() => remove(m._id)} className="text-red-500">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
