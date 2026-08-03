import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { authApi } from "../../services/api";

export default function Notifications({ onUpdate }) {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchContactFallback = async () => {
    const response = await authApi.request(`/admin/contacts?status=new`);
    const contacts = response.contacts ?? response.data ?? [];
    return contacts.map((contact) => ({
      _id: contact._id,
      title: `New contact from ${contact.fullName}`,
      message: `${contact.message}\nEmail: ${contact.email}${contact.phone ? `\nPhone: ${contact.phone}` : ""}${contact.company ? `\nCompany: ${contact.company}` : ""}`,
      audience: "admins",
      createdAt: contact.createdAt,
      readBy: [],
      isFallback: true,
    }));
  };

  const fetchItems = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await authApi.request(`/admin/notifications`);
      const notifications = Array.isArray(response)
        ? response
        : response.data ?? response.notifications ?? [];

      if (!notifications.length) {
        const fallbackItems = await fetchContactFallback();
        setItems(fallbackItems);
      } else {
        setItems(notifications);
      }
    } catch (err) {
      setError(err.message || "Failed to load notifications.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const remove = async (id, isFallback) => {
    if (isFallback) {
      await authApi.request(`/admin/contacts/${id}/status`, {
        method: "PUT",
        body: JSON.stringify({ status: "read" }),
      });
    } else {
      await authApi.request(`/admin/notifications/${id}`, { method: "DELETE" });
    }
    fetchItems();
    onUpdate?.();
  };

  const markRead = async (id, isFallback) => {
    if (isFallback) {
      await authApi.request(`/admin/contacts/${id}/status`, {
        method: "PUT",
        body: JSON.stringify({ status: "read" }),
      });
    } else {
      await authApi.request(`/admin/notifications/${id}/read`, { method: "PUT" });
    }
    fetchItems();
    onUpdate?.();
  };

  const isRead = (notification) => {
    if (!user) return false;
    const userId = user._id || user.id;
    return notification.readBy?.some((id) => id?.toString() === userId?.toString());
  };

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-semibold">Notifications</h3>
        <p className="text-sm text-gray-400">Mark outreach items as read once reviewed.</p>
      </div>
      <ul className="space-y-4">
        {items.map((n) => {
          const read = isRead(n);
          return (
            <li key={n._id} className="rounded-3xl border border-[#24A8E0]/20 bg-[#0f1118] p-4 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-medium text-white">{n.title}</div>
                    <span className={`rounded-full px-2 py-1 text-xs font-semibold ${read ? "bg-green-500/15 text-green-300" : "bg-yellow-500/15 text-yellow-300"}`}>
                      {read ? "Read" : "Unread"}
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-gray-400">Audience: {n.audience}</div>
                </div>
                <div className="text-xs uppercase tracking-[2px] text-gray-500">{new Date(n.createdAt).toLocaleString()}</div>
              </div>
              {n.message && <p className="mt-4 text-sm text-gray-300 whitespace-pre-line">{n.message}</p>}
              <div className="mt-4 flex flex-wrap gap-3">
                {!read && (
                  <button
                    type="button"
                    onClick={() => markRead(n._id, n.isFallback)}
                    className="rounded-full border border-[#24A8E0]/20 bg-[#24A8E0]/10 px-4 py-2 text-sm text-[#F1CF45] transition hover:bg-[#24A8E0]/20"
                  >
                    Mark as read
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => remove(n._id, n.isFallback)}
                  className="rounded-full border border-red-500 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
