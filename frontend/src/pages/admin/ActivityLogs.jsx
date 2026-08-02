import React, { useEffect, useState } from "react";
import { authApi } from "../../services/api";

export default function ActivityLogs() {
  const [items, setItems] = useState([]);
  const fetch = async () => { setItems(await authApi.request(`/admin/activitylogs`)); };
  useEffect(() => { fetch(); }, []);
  const remove = async (id) => { await authApi.request(`/admin/activitylogs/${id}`, { method: "DELETE" }); fetch(); };
  return (
    <div>
      <h3 className="mb-4 text-xl">Activity Logs</h3>
      <ul>
        {items.map((a) => (
          <li key={a._id} className="py-2">
            <div className="font-medium">{a.action}</div>
            <div className="text-sm text-gray-400">{a.user ? a.user.email || a.user._id : 'system'} — {new Date(a.createdAt).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
