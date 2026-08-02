import React, { useEffect, useMemo, useState } from "react";
import { authApi, ApiError } from "../../services/api";

const formatKeyLabel = (key) => {
  if (!key) return "Unknown metric";
  if (/visitor_count|visitor|traffic|session/i.test(key)) return "Visitor trends";
  if (/active|device|devices/i.test(key)) return "Device activity";
  if (/conversion/i.test(key)) return "Conversion trend";
  return key.replace(/[_-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const buildLinePath = (points, width, height, padding) => {
  if (!points.length) return "";
  return points
    .map((point, index) => {
      const x = padding + (index * (width - padding * 2)) / Math.max(points.length - 1, 1);
      const valueRange = Math.max(...points.map((p) => p.value)) - Math.min(...points.map((p) => p.value));
      const yValue = valueRange === 0 ? 0.5 : (point.value - Math.min(...points.map((p) => p.value))) / valueRange;
      const y = height - padding - yValue * (height - padding * 2);
      return `${index === 0 ? "M" : "L"}${x} ${y}`;
    })
    .join(" ");
};

const Analytics = () => {
  const [metrics, setMetrics] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMetricsAndSummary = async () => {
      setLoading(true);
      setError("");
      try {
        const [analyticsData, summaryData] = await Promise.all([
          authApi.request("/admin/analytics"),
          authApi.request("/admin/summary"),
        ]);

        setMetrics(Array.isArray(analyticsData) ? analyticsData : analyticsData.metrics ?? []);
        setSummary(summaryData.data ?? summaryData);
      } catch (err) {
        setError(err instanceof ApiError ? err.message : "Unable to load analytics data.");
      } finally {
        setLoading(false);
      }
    };

    void fetchMetricsAndSummary();
  }, []);

  const groupedMetrics = useMemo(() => {
    const groups = metrics.reduce((acc, metric) => {
      const key = metric.key || "unknown";
      if (!acc[key]) acc[key] = [];
      acc[key].push(metric);
      return acc;
    }, {});

    if (summary && groups && Object.keys(groups).length === 0) {
      groups.visitor_count = [
        {
          key: "visitor_count",
          value: summary.userCount ?? 0,
          timestamp: new Date().toISOString(),
          _id: `visitor_count_fallback_${Date.now()}`,
          _source: "summary_fallback",
        },
      ];
    }

    return groups;
  }, [metrics, summary]);

  const metricKeys = Object.keys(groupedMetrics);

  const renderChart = (data) => {
    const sorted = data.slice().sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    const values = sorted.map((item) => ({ value: Number(item.value), timestamp: new Date(item.timestamp) }));
    if (!values.length) {
      return <p className="text-sm text-gray-400">No data available for this metric.</p>;
    }

    const minValue = Math.min(...values.map((v) => v.value));
    const maxValue = Math.max(...values.map((v) => v.value));
    const latest = values[values.length - 1].value;
    const earliest = values[0].value;
    const delta = latest - earliest;
    const deltaLabel = earliest === 0 ? `${delta >= 0 ? "+" : ""}${delta}` : `${delta >= 0 ? "+" : ""}${((delta / earliest) * 100).toFixed(1)}%`;

    const width = 620;
    const height = 240;
    const padding = 28;
    const path = buildLinePath(values, width, height, padding);

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[3px] text-[#24A8E0]">Latest value</p>
            <p className="mt-2 text-3xl font-semibold text-white">{latest}</p>
          </div>
          <div className="rounded-full bg-[#24A8E0]/10 px-4 py-2 text-sm font-semibold text-[#24A8E0]">
            {delta >= 0 ? "+" : ""}{deltaLabel}
          </div>
        </div>

        <div className="overflow-x-auto rounded-4xl border border-[#24A8E0]/20 bg-[#111015]/90 p-4">
          <svg viewBox={`0 0 ${width} ${height}`} className="h-[240px] w-full">
            <defs>
              <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#24A8E0" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#24A8E0" stopOpacity="0.08" />
              </linearGradient>
            </defs>
            <path d={path} fill="none" stroke="#24A8E0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d={`${path} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`} fill="url(#trendGradient)" opacity="0.35" />
            {values.map((point, index) => {
              const x = padding + (index * (width - padding * 2)) / Math.max(values.length - 1, 1);
              const ratio = maxValue === minValue ? 0.5 : (point.value - minValue) / (maxValue - minValue);
              const y = height - padding - ratio * (height - padding * 2);
              return (
                <circle key={index} cx={x} cy={y} r="5" fill="#ffffff" stroke="#24A8E0" strokeWidth="2" />
              );
            })}
          </svg>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-3xl border border-[#24A8E0]/10 bg-[#0f1118] p-4">
            <p className="text-xs uppercase tracking-[3px] text-[#24A8E0]">Min</p>
            <p className="mt-2 text-lg font-semibold text-white">{minValue}</p>
          </div>
          <div className="rounded-3xl border border-[#24A8E0]/10 bg-[#0f1118] p-4">
            <p className="text-xs uppercase tracking-[3px] text-[#24A8E0]">Max</p>
            <p className="mt-2 text-lg font-semibold text-white">{maxValue}</p>
          </div>
          <div className="rounded-3xl border border-[#24A8E0]/10 bg-[#0f1118] p-4">
            <p className="text-xs uppercase tracking-[3px] text-[#24A8E0]">Samples</p>
            <p className="mt-2 text-lg font-semibold text-white">{values.length}</p>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="rounded-4xl border border-[#24A8E0]/20 bg-[#111015]/90 p-8 shadow-2xl shadow-black/20">
        <h3 className="text-xl font-semibold text-white">Visitor trends</h3>
        <p className="mt-4 text-gray-400">Loading analytics data...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-4xl border border-[#24A8E0]/20 bg-[#111015]/90 p-8 shadow-2xl shadow-black/20">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">Visitor trends</h3>
            <p className="mt-2 text-gray-400">Visualize your analytics metrics over time with real data from the admin analytics feed.</p>
          </div>
          <div className="rounded-full border border-[#24A8E0]/20 bg-[#0f1118] px-4 py-2 text-sm text-[#24A8E0]">
            {metrics.length > 0 ? metrics.length : summary ? 1 : 0} datapoints loaded
          </div>
        </div>
      </div>

      {error ? (
        <div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-6 text-red-200">
          {error}
        </div>
      ) : metricKeys.length === 0 ? (
        <div className="rounded-3xl border border-[#24A8E0]/20 bg-[#111015]/90 p-6 text-gray-300">
          No analytics metrics are available yet. Add metrics through the admin API to see real visitor and activity trends.
        </div>
      ) : (
        <div className="space-y-6">
          {metricKeys.map((key) => (
            <section key={key} className="rounded-4xl border border-[#24A8E0]/20 bg-[#111015]/90 p-6 shadow-lg shadow-black/20">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[3px] text-[#24A8E0]">{formatKeyLabel(key)}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <h4 className="text-xl font-semibold text-white">{key.replace(/_/g, " ")}</h4>
                    {groupedMetrics[key][0]?._source === "summary_fallback" ? (
                      <span className="rounded-full border border-[#24A8E0]/20 bg-[#24A8E0]/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-[2px] text-[#24A8E0]">
                        Fallback data
                      </span>
                    ) : null}
                  </div>
                </div>
                <p className="text-sm text-gray-400">{groupedMetrics[key].length} records</p>
              </div>
              {renderChart(groupedMetrics[key])}
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default Analytics;
