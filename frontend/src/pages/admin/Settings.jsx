import React, { useEffect, useState } from "react";
import { authApi, ApiError } from "../../services/api";

export default function Settings() {
  const [items, setItems] = useState([]);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const fetchSettings = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await authApi.request(`/admin/settings`);
      setItems(Array.isArray(result) ? result : []);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Unable to load settings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchSettings();
  }, []);

  const clearMessages = () => {
    setError("");
    setSuccess("");
  };

  const createSetting = async () => {
    if (!key.trim()) {
      setError("Setting key is required.");
      return;
    }
    setSaving(true);
    clearMessages();
    try {
      await authApi.request(`/admin/settings`, {
        method: "POST",
        body: JSON.stringify({ key: key.trim(), value: value.trim() }),
      });
      setKey("");
      setValue("");
      setSuccess("Setting created successfully.");
      await fetchSettings();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Unable to create setting.");
    } finally {
      setSaving(false);
    }
  };

  const startEdit = (setting) => {
    setEditingId(setting._id);
    setEditValue(setting.value ?? "");
    clearMessages();
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue("");
    clearMessages();
  };

  const saveSetting = async (id) => {
    if (!editValue.toString().trim()) {
      setError("Setting value cannot be empty.");
      return;
    }

    setSaving(true);
    clearMessages();
    try {
      await authApi.request(`/admin/settings/${id}`, {
        method: "PUT",
        body: JSON.stringify({ value: editValue }),
      });
      setSuccess("Setting updated successfully.");
      setEditingId(null);
      setEditValue("");
      await fetchSettings();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Unable to update setting.");
    } finally {
      setSaving(false);
    }
  };

  const deleteSetting = async (id) => {
    setSaving(true);
    clearMessages();
    try {
      await authApi.request(`/admin/settings/${id}`, { method: "DELETE" });
      setSuccess("Setting deleted successfully.");
      await fetchSettings();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Unable to delete setting.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#111015]/90 p-6 shadow-lg shadow-black/20">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">Settings</h2>
            <p className="mt-2 text-gray-400">Create and manage admin settings used across the application.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div>
            <label className="text-sm text-gray-300">Key</label>
            <input
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Enter setting key"
              className="mt-2 w-full rounded-3xl border border-[#24A8E0]/20 bg-[#0f1118] px-4 py-3 text-sm text-white focus:border-[#24A8E0] focus:outline-none"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300">Value</label>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter setting value"
              className="mt-2 w-full rounded-3xl border border-[#24A8E0]/20 bg-[#0f1118] px-4 py-3 text-sm text-white focus:border-[#24A8E0] focus:outline-none"
            />
          </div>
          <div className="flex items-end">
            <button
              type="button"
              disabled={saving}
              onClick={createSetting}
              className="w-full rounded-3xl bg-[#24A8E0] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#1bb4ff] disabled:opacity-50"
            >
              {saving ? "Saving..." : "Create Setting"}
            </button>
          </div>
        </div>

        {(error || success) && (
          <div className={`mt-4 rounded-3xl border p-4 ${error ? "border-red-500/30 bg-red-500/10 text-red-200" : "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"}`}>
            {error || success}
          </div>
        )}
      </div>

      <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#111015]/90 p-6 shadow-lg shadow-black/20">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Configured settings</h3>
          <span className="rounded-full bg-[#24A8E0]/10 px-3 py-1 text-xs font-semibold text-[#24A8E0]">{items.length} items</span>
        </div>

        {loading ? (
          <p className="text-gray-400">Loading settings...</p>
        ) : items.length === 0 ? (
          <p className="text-gray-400">No settings configured yet.</p>
        ) : (
          <div className="space-y-4">
            {items.map((setting) => (
              <div key={setting._id} className="grid gap-4 rounded-3xl border border-[#24A8E0]/10 bg-[#0f1118] p-4 sm:grid-cols-[1fr_auto]">
                <div className="space-y-2">
                  <div className="text-sm uppercase tracking-[3px] text-[#24A8E0]">{setting.key}</div>
                  {editingId === setting._id ? (
                    <input
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="w-full rounded-2xl border border-[#24A8E0]/20 bg-[#111015] px-4 py-3 text-sm text-white focus:border-[#24A8E0] focus:outline-none"
                    />
                  ) : (
                    <div className="text-sm text-gray-300 break-words">{setting.value === null ? "null" : setting.value?.toString()}</div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {editingId === setting._id ? (
                    <>
                      <button
                        type="button"
                        onClick={() => saveSetting(setting._id)}
                        className="rounded-3xl bg-[#24A8E0] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#1bb4ff] disabled:opacity-50"
                        disabled={saving}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="rounded-3xl border border-[#24A8E0]/20 px-4 py-2 text-sm text-white transition hover:bg-[#16202f]"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => startEdit(setting)}
                        className="rounded-3xl border border-[#24A8E0]/20 px-4 py-2 text-sm text-white transition hover:bg-[#16202f]"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteSetting(setting._id)}
                        className="rounded-3xl border border-red-500/40 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/10 disabled:opacity-50"
                        disabled={saving}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
