import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { authApi, ApiError } from "../../services/api";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  MessageCircle,
  Box,
  FileText,
  AlertTriangle,
  BarChart3,
  Bell,
  User,
  LogOut,
  Search,
  ChevronLeft,
  Menu,
} from "lucide-react";
import Products from "./Products";
import DemoRequests from "./DemoRequests";
import NotificationsPage from "./Notifications";
import WebsiteCMS from "./WebsiteCMS";
import Alerts from "./Alerts";
import Analytics from "./Analytics";

const sections = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Users", icon: Users },
  { label: "Demo Requests", icon: CalendarDays },
  { label: "Contact Messages", icon: MessageCircle },
  { label: "Products", icon: Box },
  { label: "Alerts", icon: AlertTriangle },
  { label: "Analytics", icon: BarChart3 },
  { label: "Website CMS", icon: FileText },
  { label: "Notifications", icon: Bell },
  { label: "Profile", icon: User },
];

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [summary, setSummary] = useState(null);
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerSearch, setHeaderSearch] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [contactSearch, setContactSearch] = useState("");
  const [contactStatusFilter, setContactStatusFilter] = useState("");
  const [globalSearchResults, setGlobalSearchResults] = useState(null);
  const [globalSearchLoading, setGlobalSearchLoading] = useState(false);
  const [usersLoading, setUsersLoading] = useState(false);

  const fetchSummary = async () => {
    try {
      const data = await authApi.request("/admin/summary");
      setSummary(data.data);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to load dashboard summary.");
    }
  };

  const fetchUsers = async (search = "") => {
    setUsersLoading(true);
    try {
      const query = search ? `?search=${encodeURIComponent(search)}` : "";
      const data = await authApi.request(`/admin/users${query}`);
      setUsers(data.users || []);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to load user list.");
      setUsers([]);
    } finally {
      setUsersLoading(false);
    }
  };

  const fetchContacts = async (search = "", status = "") => {
    try {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      if (status) params.set("status", status);
      const query = params.toString() ? `?${params.toString()}` : "";
      const data = await authApi.request(`/admin/contacts${query}`);
      setContacts(data.contacts);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to load contact messages.");
    }
  };

  const fetchGlobalSearch = async (query) => {
    setGlobalSearchLoading(true);
    setError("");
    try {
      const data = await authApi.request(`/admin/search?q=${encodeURIComponent(query)}`);
      setGlobalSearchResults(data.results || data);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to perform global search.");
      setGlobalSearchResults({});
    } finally {
      setGlobalSearchLoading(false);
    }
  };

  const handleHeaderSearch = () => {
    if (!headerSearch.trim()) {
      return;
    }

    setGlobalSearchResults(null);
    fetchGlobalSearch(headerSearch);
  };

  useEffect(() => {
    if (!user?.role) return;

    const loadDashboard = async () => {
      await fetchSummary();
      if (activeSection === "Users") await fetchUsers(userSearch);
      if (activeSection === "Contact Messages") await fetchContacts(contactSearch, contactStatusFilter);
    };

    void loadDashboard();
  }, [activeSection, user, userSearch, contactSearch, contactStatusFilter]);

  useEffect(() => {
    if (activeSection === "Users") {
      setHeaderSearch(userSearch);
    } else if (activeSection === "Contact Messages") {
      setHeaderSearch(contactSearch);
    }
  }, [activeSection, userSearch, contactSearch]);

  const deleteUser = async (userId) => {
    try {
      await authApi.request(`/admin/users/${userId}`, {
        method: "DELETE",
      });
      fetchUsers(userSearch);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to delete user.");
    }
  };

  const updateContactStatus = async (contactId, status) => {
    try {
      await authApi.request(`/admin/contacts/${contactId}/status`, {
        method: "PUT",
        body: JSON.stringify({ status }),
      });
      fetchContacts(contactSearch, contactStatusFilter);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to update contact status.");
    }
  };

  const replyToContact = async (contactId) => {
    try {
      await authApi.request(`/admin/contacts/${contactId}/reply`, {
        method: "PUT",
      });
      fetchContacts(contactSearch, contactStatusFilter);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Failed to send reply email.");
    }
  };

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen bg-[#111015] flex items-center justify-center text-white px-4">
        <div className="max-w-md rounded-3xl border border-[#24A8E0]/30 bg-[#111015]/95 p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white">Access denied</h2>
          <p className="mt-3 text-gray-300">Admin dashboard is available only to administrators.</p>
        </div>
      </div>
    );
  }

  const sidebarItemClass = (section) =>
    `flex w-full items-center justify-start gap-3 rounded-3xl px-4 py-3 text-left text-sm font-medium transition ${
      activeSection === section
        ? "bg-[#24A8E0]/20 text-[#F1CF45] border border-[#24A8E0]/40 shadow-lg shadow-[#24A8E0]/10"
        : "text-gray-300 hover:bg-[#24A8E0]/10 hover:text-white"
    }`;

  const navigateToSection = (section) => {
    setActiveSection(section);
    setGlobalSearchResults(null);
    setHeaderSearch("");
  };

  const dashboardQuickLinks = [
    { label: "Users", value: summary?.userCount ?? 0, icon: Users, section: "Users", subtitle: "Manage registered users" },
    { label: "Products", value: summary?.productCount ?? 0, icon: Box, section: "Products", subtitle: "Manage product catalog" },
    { label: "Messages", value: summary?.contactCount ?? 0, icon: MessageCircle, section: "Contact Messages", subtitle: "Review incoming messages" },
    { label: "Demo Requests", value: summary?.demoRequestCount ?? 0, icon: CalendarDays, section: "Demo Requests", subtitle: "Review incoming demos" },
    { label: "Notifications", value: summary?.notificationCount ?? 0, icon: Bell, section: "Notifications", subtitle: "Review new admin alerts" },
    { label: "Visitor trends", value: "View", icon: BarChart3, section: "Analytics", subtitle: "Open analytics dashboard" },
    { label: "Security alerts", value: "View", icon: AlertTriangle, section: "Alerts", subtitle: "Inspect system alerts" },
  ];

  const renderGlobalSearchResults = () => {
    if (globalSearchResults === null) return null;

    if (globalSearchLoading) {
      return (
        <div className="rounded-4xl border border-[#24A8E0]/20 bg-[#111015]/90 p-6 shadow-lg shadow-black/20">
          <h3 className="text-xl font-semibold text-white">Search results</h3>
          <p className="mt-4 text-gray-400">Searching admin resources...</p>
        </div>
      );
    }

    const hasResults = Object.values(globalSearchResults).some((items) => Array.isArray(items) && items.length > 0);

    return (
      <div className="rounded-4xl border border-[#24A8E0]/20 bg-[#111015]/90 p-6 shadow-lg shadow-black/20">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Search results</h3>
            <p className="mt-2 text-sm text-gray-400">Showing matches across admin resources.</p>
          </div>
          <span className="rounded-full bg-[#24A8E0]/10 px-3 py-1 text-sm font-semibold text-[#24A8E0]">
            {Object.values(globalSearchResults).reduce((sum, items) => sum + (Array.isArray(items) ? items.length : 0), 0)} matches
          </span>
        </div>

        {!hasResults ? (
          <div className="mt-6 rounded-3xl border border-[#24A8E0]/10 bg-[#0f1118] p-6 text-gray-400">No results found for "{headerSearch}".</div>
        ) : (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {Object.entries(globalSearchResults).map(([sectionKey, items]) => {
              if (!Array.isArray(items) || items.length === 0) return null;

              const label = {
                navigation: "Navigation",
                users: "Users",
                contacts: "Contact messages",
                products: "Products",
                demoRequests: "Demo requests",
                alerts: "Alerts",
                notifications: "Notifications",
                activityLogs: "Activity logs",
                cmsPages: "CMS pages",
              }[sectionKey] || sectionKey;

              return (
                <div key={sectionKey} className="rounded-3xl border border-[#24A8E0]/10 bg-[#0f1118] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-white">{label}</h4>
                    <span className="rounded-full bg-[#24A8E0]/10 px-2 py-1 text-xs font-semibold text-[#24A8E0]">{items.length}</span>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    {items.slice(0, 5).map((item) => (
                      <li
                        key={item._id || item.id || `${sectionKey}-${item.title || item.name || item.section || Math.random()}`}
                        className={`rounded-3xl bg-[#111015] p-3 ${sectionKey === "navigation" ? "cursor-pointer hover:bg-[#1a222f]" : ""}`}
                        onClick={() => {
                          if (sectionKey === "navigation" && item.section) {
                            setActiveSection(item.section);
                            setGlobalSearchResults(null);
                            setHeaderSearch(item.title);
                          }
                        }}
                      >
                        <div className="text-sm font-medium text-white">
                          {item.fullName || item.title || item.name || item.email || item.slug || item.action || item.message || item.section || "Untitled"}
                        </div>
                        <div className="mt-1 text-xs text-gray-400">
                          {sectionKey === "navigation"
                            ? item.description
                            : item.email || item.company || item.slug || item.status || item.level || (item.message && `${item.message.substring(0, 80)}...`) || item.createdAt || "Details available"}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <div className="space-y-6">
            <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-2">
              <button
                type="button"
                onClick={() => navigateToSection("Products")}
                className={`group rounded-[28px] border p-6 text-left shadow-lg shadow-black/20 transition hover:-translate-y-1 ${activeSection === "Products" ? "border-[#F1CF45] bg-[#16202f]" : "border-[#24A8E0]/20 bg-[#111015]/90 hover:border-[#F1CF45]/30 hover:bg-[#13161f]"}`}
              >
                <p className="text-sm uppercase tracking-[4px] text-[#24A8E0]">Products</p>
                <p className="mt-4 text-4xl font-bold text-white">{summary?.productCount ?? 0}</p>
                <p className="mt-2 text-sm text-gray-400">Total products in catalog</p>
              </button>
              <button
                type="button"
                onClick={() => navigateToSection("Users")}
                className={`group rounded-[28px] border p-6 text-left shadow-lg shadow-black/20 transition hover:-translate-y-1 ${activeSection === "Users" ? "border-[#F1CF45] bg-[#16202f]" : "border-[#24A8E0]/20 bg-[#111015]/90 hover:border-[#F1CF45]/30 hover:bg-[#13161f]"}`}
              >
                <p className="text-sm uppercase tracking-[4px] text-[#24A8E0]">Users</p>
                <p className="mt-4 text-4xl font-bold text-white">{summary?.userCount ?? 0}</p>
                <p className="mt-2 text-sm text-gray-400">Total registered users</p>
              </button>
              <button
                type="button"
                onClick={() => navigateToSection("Contact Messages")}
                className={`group rounded-[28px] border p-6 text-left shadow-lg shadow-black/20 transition hover:-translate-y-1 ${activeSection === "Contact Messages" ? "border-[#F1CF45] bg-[#16202f]" : "border-[#24A8E0]/20 bg-[#111015]/90 hover:border-[#F1CF45]/30 hover:bg-[#13161f]"}`}
              >
                <p className="text-sm uppercase tracking-[4px] text-[#24A8E0]">Messages</p>
                <p className="mt-4 text-4xl font-bold text-white">{summary?.contactCount ?? 0}</p>
                <p className="mt-2 text-sm text-gray-400">Total contact messages</p>
              </button>
              <button
                type="button"
                onClick={() => navigateToSection("Demo Requests")}
                className={`group rounded-[28px] border p-6 text-left shadow-lg shadow-black/20 transition hover:-translate-y-1 ${activeSection === "Demo Requests" ? "border-[#F1CF45] bg-[#16202f]" : "border-[#24A8E0]/20 bg-[#111015]/90 hover:border-[#F1CF45]/30 hover:bg-[#13161f]"}`}
              >
                <p className="text-sm uppercase tracking-[4px] text-[#24A8E0]">Demo Requests</p>
                <p className="mt-4 text-4xl font-bold text-white">{summary?.demoRequestCount ?? 0}</p>
                <p className="mt-2 text-sm text-gray-400">Total demo requests received</p>
              </button>
              <button
                type="button"
                onClick={() => navigateToSection("Notifications")}
                className={`group rounded-[28px] border p-6 text-left shadow-lg shadow-black/20 transition hover:-translate-y-1 ${activeSection === "Notifications" ? "border-[#F1CF45] bg-[#16202f]" : "border-[#24A8E0]/20 bg-[#111015]/90 hover:border-[#F1CF45]/30 hover:bg-[#13161f]"}`}
              >
                <p className="text-sm uppercase tracking-[4px] text-[#24A8E0]">Notifications</p>
                <p className="mt-4 text-4xl font-bold text-white">{summary?.notificationCount ?? 0}</p>
                <p className="mt-2 text-sm text-gray-400">New admin notifications</p>
                <div className="mt-4 rounded-2xl bg-[#0d1018] p-4 text-sm text-gray-200 ring-1 ring-[#24A8E0]/10 transition group-hover:bg-[#152134]">
                  <p className="text-xs uppercase tracking-[3px] text-[#24A8E0]">Latest alert</p>
                  <p className="mt-2 font-semibold text-white line-clamp-2">
                    {summary?.latestNotificationSnippet || "No recent notifications yet."}
                  </p>
                </div>
              </button>
              <div className="rounded-[28px] border border-[#24A8E0]/20 bg-[#111015]/90 p-6 shadow-lg shadow-black/20">
                <p className="text-sm uppercase tracking-[4px] text-[#24A8E0]">Admins</p>
                <p className="mt-4 text-4xl font-bold text-white">{summary?.adminCount ?? 0}</p>
                <p className="mt-2 text-sm text-gray-400">Team members with admin rights</p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <button
                type="button"
                onClick={() => navigateToSection("Analytics")}
                className={`group rounded-[28px] p-7 shadow-lg shadow-black/20 text-left transition hover:-translate-y-1 ${activeSection === "Analytics" ? "border-[#F1CF45] bg-[#16202f]" : "border-[#24A8E0]/20 bg-[#111015]/90 hover:border-[#F1CF45]/30 hover:bg-[#13161f]"}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[4px] text-[#24A8E0]">Traffic</p>
                    <h2 className="mt-3 text-xl font-semibold text-white">Visitor trends</h2>
                  </div>
                  <div className="rounded-full bg-[#24A8E0]/15 p-3 text-[#24A8E0]">
                    <BarChart3 size={20} />
                  </div>
                </div>
                <div className="mt-6 h-32 rounded-3xl bg-linear-to-br from-[#18202c] to-[#111015] p-4 text-gray-400">
                  <p>Chart placeholder</p>
                  <p className="mt-2 text-sm text-gray-500">Visitors, sessions and conversion trends will display here.</p>
                </div>
              </button>
              <button
                type="button"
                onClick={() => navigateToSection("Alerts")}
                className={`group rounded-[28px] p-7 shadow-lg shadow-black/20 text-left transition hover:-translate-y-1 ${activeSection === "Alerts" ? "border-[#F1CF45] bg-[#16202f]" : "border-[#24A8E0]/20 bg-[#111015]/90 hover:border-[#F1CF45]/30 hover:bg-[#13161f]"}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[4px] text-[#24A8E0]">Alerts</p>
                    <h2 className="mt-3 text-xl font-semibold text-white">Security events</h2>
                  </div>
                  <div className="rounded-full bg-[#24A8E0]/15 p-3 text-[#24A8E0]">
                    <AlertTriangle size={20} />
                  </div>
                </div>
                <div className="mt-6 space-y-3 text-sm text-gray-400">
                  <p>3 high-priority alerts active.</p>
                  <p>All systems are stable, but review the latest notifications.</p>
                </div>
              </button>
            </div>
          </div>
        );
      case "Users":
        return (
          <div className="space-y-6">
            <div className="flex flex-col gap-3 rounded-[28px] border border-[#24A8E0]/20 bg-[#111015]/90 p-4 shadow-lg shadow-black/20 sm:flex-row sm:items-center sm:justify-between">
              <input
                type="text"
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
                placeholder="Search users by name, email, or company"
                className="w-full rounded-3xl border border-[#24A8E0]/20 bg-[#0f1118] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-[#24A8E0] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => fetchUsers(userSearch)}
                className="rounded-full bg-[#24A8E0] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#1bb4ff]"
              >
                Search
              </button>
            </div>
            <div className="rounded-[28px] border border-[#24A8E0]/20 bg-[#111015]/90 overflow-auto shadow-lg shadow-black/20">
              <table className="min-w-full divide-y divide-[#24A8E0]/10 text-left text-sm text-gray-300">
                <thead className="bg-[#111015]">
                  <tr>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Company</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Joined</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#24A8E0]/10 bg-[#0f1118]">
                  {usersLoading ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-10 text-center text-gray-400">
                        Loading users...
                      </td>
                    </tr>
                  ) : users.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-10 text-center text-gray-400">
                        No users found. If users exist, try refreshing the page or checking the backend user records.
                      </td>
                    </tr>
                  ) : (
                    users.map((userItem) => (
                      <tr key={userItem._id}>
                        <td className="px-6 py-4 font-medium text-white">{userItem.fullName || "Unnamed user"}</td>
                        <td className="px-6 py-4">{userItem.email}</td>
                        <td className="px-6 py-4">{userItem.company || "-"}</td>
                        <td className="px-6 py-4 capitalize">{userItem.role}</td>
                        <td className="px-6 py-4">{new Date(userItem.createdAt).toLocaleDateString()}</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-2">
                            <button
                              type="button"
                              onClick={() => deleteUser(userItem._id)}
                              className="rounded-full border border-red-500 px-3 py-2 text-sm text-red-300 hover:bg-red-500/20"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "Contact Messages":
        return (
          <div className="space-y-6">
            <div className="flex flex-col gap-3 rounded-[28px] border border-[#24A8E0]/20 bg-[#111015]/90 p-4 shadow-lg shadow-black/20 sm:flex-row sm:items-center sm:justify-between">
              <input
                type="text"
                value={contactSearch}
                onChange={(e) => setContactSearch(e.target.value)}
                placeholder="Search contacts by name, email, company, or message"
                className="w-full rounded-3xl border border-[#24A8E0]/20 bg-[#0f1118] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-[#24A8E0] focus:outline-none"
              />
              <div className="flex flex-wrap gap-3">
                <select
                  value={contactStatusFilter}
                  onChange={(e) => setContactStatusFilter(e.target.value)}
                  className="rounded-3xl border border-[#24A8E0]/20 bg-[#0f1118] px-4 py-3 text-sm text-white focus:border-[#24A8E0] focus:outline-none"
                >
                  <option value="">All statuses</option>
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                </select>
                <button
                  type="button"
                  onClick={() => fetchContacts(contactSearch, contactStatusFilter)}
                  className="rounded-full bg-[#24A8E0] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#1bb4ff]"
                >
                  Filter
                </button>
              </div>
            </div>
            <div className="rounded-[28px] border border-[#24A8E0]/20 bg-[#111015]/90 overflow-auto shadow-lg shadow-black/20">
              <table className="min-w-full divide-y divide-[#24A8E0]/10 text-left text-sm text-gray-300">
                <thead className="bg-[#111015]">
                  <tr>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Company</th>
                    <th className="px-6 py-4">Message</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Received</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#24A8E0]/10 bg-[#0f1118]">
                  {contacts.map((contact) => (
                    <tr key={contact._id}>
                      <td className="px-6 py-4 font-medium text-white">{contact.fullName}</td>
                      <td className="px-6 py-4">{contact.email}</td>
                      <td className="px-6 py-4">{contact.company || "-"}</td>
                      <td className="px-6 py-4 max-w-xl truncate">{contact.message}</td>
                      <td className="px-6 py-4 capitalize">{contact.status}</td>
                      <td className="px-6 py-4">{new Date(contact.createdAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {['new', 'read', 'replied'].map((status) => (
                            <button
                              key={status}
                              type="button"
                              onClick={() => updateContactStatus(contact._id, status)}
                              className="rounded-full border border-[#24A8E0] px-3 py-2 text-sm text-[#24A8E0] hover:bg-[#24A8E0]/20"
                            >
                              {status}
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={() => replyToContact(contact._id)}
                            className="rounded-full border border-green-500 px-3 py-2 text-sm text-green-300 hover:bg-green-500/10"
                          >
                            Reply
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "Profile":
        return (
          <div className="rounded-[28px] border border-[#24A8E0]/20 bg-[#111015]/90 p-8 shadow-lg shadow-black/20">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-white">Profile</h2>
                <p className="mt-2 text-gray-400">Manage your admin profile and quick settings.</p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-[#0f1118] p-6">
                <p className="text-sm uppercase tracking-[4px] text-[#24A8E0]">Name</p>
                <p className="mt-3 text-xl text-white">{user.fullName}</p>
              </div>
              <div className="rounded-3xl bg-[#0f1118] p-6">
                <p className="text-sm uppercase tracking-[4px] text-[#24A8E0]">Email</p>
                <p className="mt-3 text-xl text-white">{user.email}</p>
              </div>
            </div>
          </div>
        );
      case "Products":
        return <Products />;
      case "Demo Requests":
        return <DemoRequests />;
      case "Notifications":
        return <NotificationsPage onUpdate={fetchSummary} />;
      case "Website CMS":
        return <WebsiteCMS />;
      case "Alerts":
        return <Alerts />;
      case "Analytics":
        return <Analytics />;
      default:
        return (
          <div className="rounded-[28px] border border-[#24A8E0]/20 bg-[#111015]/90 p-8 shadow-lg shadow-black/20">
            <h2 className="text-2xl font-semibold text-white">{activeSection}</h2>
            <p className="mt-3 text-gray-400">This section is coming soon. You can monitor and manage {activeSection.toLowerCase()} from here.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1018] text-white">
      <div className="flex min-h-screen">
        <aside className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col transform bg-[#0f1118] border-r border-[#24A8E0]/10 p-5 transition-transform duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[4px] text-[#24A8E0]">Honey Vision</p>
              <h1 className="mt-2 text-2xl font-bold text-white">Admin</h1>
            </div>
            <button type="button" className="lg:hidden rounded-full border border-[#24A8E0]/30 p-2 text-[#24A8E0]" onClick={() => setSidebarOpen(false)}>
              <ChevronLeft size={20} />
            </button>
          </div>

          <nav className="mt-8 flex flex-1 flex-col gap-2 overflow-y-auto pr-1 pb-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.label}
                  type="button"
                  onClick={() => {
                    navigateToSection(section.label);
                    setSidebarOpen(false);
                  }}
                  className={sidebarItemClass(section.label)}
                >
                  <Icon size={18} />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={logout}
            className="mt-6 flex w-full items-center justify-start gap-3 rounded-3xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-200 transition hover:bg-red-500/20"
          >
            <LogOut size={18} />
            Logout
          </button>
        </aside>

        <main className="flex-1 lg:ml-7 pt-20">
          <header className="sticky top-0 z-20 border-b border-[#24A8E0]/10 bg-[#0d1018]/90 px-4 py-4 backdrop-blur-sm lg:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-1 min-w-0 items-center gap-3">
                <button
                  type="button"
                  className="lg:hidden rounded-full border border-[#24A8E0]/30 bg-[#111015] p-2 text-[#24A8E0]"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu size={20} />
                </button>
                <div className="relative hidden sm:flex sm:items-center sm:gap-2 sm:flex-1 min-w-0">
                  <div className="relative flex-1">
                    <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      value={headerSearch}
                      onChange={(e) => setHeaderSearch(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleHeaderSearch();
                        }
                      }}
                      placeholder={
                        activeSection === "Contact Messages"
                          ? "Search contacts..."
                          : activeSection === "Users"
                          ? "Search users..."
                          : "Search across all admin resources"
                      }
                      className="w-full rounded-3xl border border-[#24A8E0]/20 bg-[#111015] py-3 pl-11 pr-24 text-sm text-white placeholder:text-gray-500 focus:border-[#24A8E0] focus:outline-none focus:ring-2 focus:ring-[#24A8E0]/20"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleHeaderSearch}
                    className="rounded-full bg-[#24A8E0] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#1bb4ff]"
                  >
                    Search
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => navigateToSection("Notifications")}
                  className={`relative rounded-3xl px-4 py-3 text-sm transition ${summary?.notificationCount > 0 ? "border border-red-500/30 bg-[#370a0f] text-white hover:bg-red-500/10" : "border border-[#24A8E0]/20 bg-[#111015] text-white hover:bg-[#24A8E0]/10"}`}
                >
                  <Bell size={18} className="inline-block" />
                  <span className="ml-2 hidden sm:inline">Notifications</span>
                  {summary?.notificationCount > 0 ? (
                    <div className="ml-3 inline-flex flex-col items-start gap-1 text-left">
                      <span className="inline-flex rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                        {summary.notificationCount} new
                      </span>
                      <span className="hidden sm:inline-block text-[11px] text-gray-300 max-w-[220px] truncate">
                        {summary?.latestNotificationSnippet || "Latest notification preview."}
                      </span>
                    </div>
                  ) : (
                    <span className="ml-3 hidden sm:inline text-gray-400">No new alerts</span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => navigateToSection("Profile")}
                  className="flex items-center gap-3 rounded-3xl border border-[#24A8E0]/20 bg-[#111015] px-4 py-3 text-left transition hover:bg-[#16202f]"
                >
                  <User size={18} />
                  <div className="text-sm">
                    <p className="font-semibold text-white">{user.fullName}</p>
                    <p className="text-gray-400">Administrator</p>
                  </div>
                </button>
              </div>
            </div>
          </header>

          <section className="px-4 py-6 sm:px-6 lg:px-8">
            {error && (
              <div className="mb-6 rounded-3xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">
                {error}
              </div>
            )}

            {globalSearchResults ? (
              <div className="space-y-6">
                {renderGlobalSearchResults()}
              </div>
            ) : (
              <div className="space-y-6">
                {renderSectionContent()}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
