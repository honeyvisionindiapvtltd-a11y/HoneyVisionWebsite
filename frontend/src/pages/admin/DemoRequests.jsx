import { useEffect, useState } from "react";
import { authApi, ApiError } from "../../services/api";

const DemoRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const data = await authApi.request("/admin/demo-requests");
      setRequests(data.requests);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to load demo requests.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchRequests(); }, []);

  const updateStatus = async (id, status) => {
    try {
      await authApi.request(`/admin/demo-requests/${id}/status`, { method: "PUT", body: JSON.stringify({ status }) });
      fetchRequests();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to update status.");
    }
  };

  const deleteReq = async (id) => {
    try {
      await authApi.request(`/admin/demo-requests/${id}`, { method: "DELETE" });
      fetchRequests();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to delete request.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-[#0f1118] p-6">
        <h3 className="text-lg font-semibold">Demo Requests</h3>
        {loading ? <p>Loading...</p> : (
          <ul className="mt-3 space-y-3">
            {requests.map(r=> (
              <li key={r._id} className="bg-[#111015] p-3 rounded-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{r.fullName} — {r.company || "-"}</div>
                    <div className="text-sm text-gray-400">{r.email} • {r.phone}</div>
                    <div className="mt-2">{r.message}</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <select value={r.status} onChange={(e)=>updateStatus(r._id, e.target.value)} className="p-2 bg-[#0f1118]">
                      <option value="new">New</option>
                      <option value="scheduled">Scheduled</option>
                      <option value="completed">Completed</option>
                    </select>
                    <button onClick={()=>deleteReq(r._id)} className="text-red-400">Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DemoRequests;
