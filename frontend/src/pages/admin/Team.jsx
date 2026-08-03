import React, { useEffect, useState } from "react";
import { authApi } from "../../services/api";

export default function Team() {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const fetch = async () => setMembers(await authApi.request(`/admin/team`));
  useEffect(() => { fetch(); }, []);
  const create = async () => { await authApi.request(`/admin/team`, { method: "POST", body: JSON.stringify({ fullName: name, email }) }); setName(""); setEmail(""); fetch(); };
  const remove = async (id) => { await authApi.request(`/admin/team/${id}`, { method: "DELETE" }); fetch(); };
  return (
    <div>
      <h3 className="mb-4 text-xl">Team</h3>
      <div className="mb-3 flex gap-2">
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full name" className="rounded px-2 py-1 bg-[#0f1118]" />
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="rounded px-2 py-1 bg-[#0f1118]" />
        <button onClick={create} className="rounded bg-[#24A8E0] px-3">Add</button>
      </div>
      <ul>
        {members.map((m)=> (
          <li key={m._id} className="flex items-center justify-between py-2">
            <div>
              <div className="font-medium">{m.fullName}</div>
              <div className="text-sm text-gray-400">{m.email}</div>
            </div>
            <button onClick={()=>remove(m._id)} className="text-red-500">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
