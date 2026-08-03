import React, { useEffect, useState } from "react";
import { authApi } from "../../services/api";

export default function Industries() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  const fetch = async () => { setItems(await authApi.request(`/admin/industries`)); };
  useEffect(() => { fetch(); }, []);
  const create = async () => { await authApi.request(`/admin/industries`, { method: "POST", body: JSON.stringify({ name }) }); setName(""); fetch(); };
  const remove = async (id) => { await authApi.request(`/admin/industries/${id}`, { method: "DELETE" }); fetch(); };

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Industry name" className="rounded px-3 py-2 bg-[#0f1118] text-white" />
        <button onClick={create} className="rounded bg-[#24A8E0] px-4 py-2">Create</button>
      </div>
      <ul>
        {items.map((s) => (
          <li key={s._id} className="flex items-center justify-between py-2">
            <span>{s.name}</span>
            <button onClick={() => remove(s._id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
