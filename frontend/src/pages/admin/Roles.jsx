import React, { useEffect, useState } from "react";
import { authApi } from "../../services/api";

export default function Roles() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const fetch = async () => setItems(await authApi.request(`/admin/roles`));
  useEffect(() => { fetch(); }, []);
  const create = async () => { await authApi.request(`/admin/roles`, { method: "POST", body: JSON.stringify({ name }) }); setName(""); fetch(); };
  const remove = async (id) => { await authApi.request(`/admin/roles/${id}`, { method: "DELETE" }); fetch(); };
  return (
    <div>
      <h3 className="mb-4 text-xl">Roles</h3>
      <div className="mb-3 flex gap-2">
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Role name" className="rounded px-2 py-1 bg-[#0f1118]" />
        <button onClick={create} className="rounded bg-[#24A8E0] px-3">Create</button>
      </div>
      <ul>
        {items.map((r)=> (
          <li key={r._id} className="flex items-center justify-between py-2">
            <div className="font-medium">{r.name}</div>
            <button onClick={()=>remove(r._id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
