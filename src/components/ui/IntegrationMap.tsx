"use client";

import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  Sphere,
  Graticule
} from "react-simple-maps";
import { motion } from "framer-motion";

// Kazakhstan coordinates as the central hub
const KAZAKHSTAN_CORDS: [number, number] = [66.9237, 48.0196]; // Center approx

// Custom colors for integration countries
const COUNTRY_COLORS: Record<string, string> = {
  "China": "#EF4444",      // Red
  "South Korea": "#3B82F6", // Blue
  "Vietnam": "#F59E0B",     // Yellow/Gold
  "Thailand": "#A855F7",    // Purple
  "Kyrgyzstan": "#10B981",  // Emerald
  "Uzbekistan": "#06B6D4",  // Cyan
  "Kazakhstan": "#3B82F6",  // Blue (Hub)
  "Russia": "#6366F1",      // Indigo
};

const INTEGRATION_NODES = [
  { id: "CHN", name: "Китай", color: "#EF4444", coordinates: [104.1954, 35.8617] as [number, number] },
  { id: "KOR", name: "Южная Корея", color: "#3B82F6", coordinates: [127.7669, 35.9078] as [number, number] },
  { id: "VNM", name: "Вьетнам", color: "#F59E0B", coordinates: [108.2772, 14.0583] as [number, number] },
  { id: "THA", name: "Таиланд", color: "#A855F7", coordinates: [100.9925, 15.8700] as [number, number] },
  { id: "KGZ", name: "Кыргызстан", color: "#10B981", coordinates: [74.7661, 41.2044] as [number, number] },
  { id: "UZB", name: "Узбекистан", color: "#06B6D4", coordinates: [64.5853, 41.3775] as [number, number] },
  { id: "RUS", name: "Россия", color: "#6366F1", coordinates: [105.3188, 61.5240] as [number, number] },
];

const geoUrl = "/topology/world.json";

const MapChart = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[400px] lg:h-[500px] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative flex items-center justify-center min-h-[400px]">
      {/* Background glow behind the map */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />

      <ComposableMap
        projectionConfig={{
          scale: 200,
          center: [105, 30], // Shift landmass to the left
        }}
        className="w-full h-full drop-shadow-[0_0_30px_rgba(30,58,95,0.3)]"
      >
        <Sphere id="rsm-sphere" stroke="#274060" strokeWidth={0.5} fill="transparent" />
        
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name;
              const countryColor = COUNTRY_COLORS[name];

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={countryColor ? `${countryColor}99` : "#17263A"} // Add 99 for ~60% opacity
                  stroke="#274060"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none", transition: "all 0.3s" },
                    hover: { fill: "#2D5E99", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Connection lines from Kazakhstan */}
        {INTEGRATION_NODES.map((node, idx) => (
          <Line
            key={`line-${idx}`}
            from={KAZAKHSTAN_CORDS}
            to={node.coordinates}
            stroke={node.color}
            strokeWidth={1}
            strokeLinecap="round"
            className="opacity-30 translate-y-[-1px]"
            style={{ strokeDasharray: "3 3" }}
          />
        ))}

        {/* Global Hub: Kazakhstan */}
        <Marker coordinates={KAZAKHSTAN_CORDS}>
          <circle r={4} fill="#3B82F6" />
          <circle r={10} fill="rgba(59, 130, 246, 0.2)" className="animate-pulse" />
        </Marker>

        {/* Partner Nodes */}
        {INTEGRATION_NODES.map((node, idx) => (
          <Marker key={`marker-${idx}`} coordinates={node.coordinates}>
            <g className="group cursor-pointer">
              {/* Pulsing effect */}
              <motion.circle
                r={10}
                fill={node.color}
                initial={{ scale: 0.5, opacity: 0.8 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: idx * 0.3,
                }}
              />
              {/* Base dot */}
              <circle r={3} fill={node.color} className="group-hover:fill-white transition-colors" />

              {/* Tooltip emulation with SVG text */}
              <text
                textAnchor="middle"
                y={-12}
                className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none fill-white font-medium text-[10px]"
              >
                {node.name}
              </text>
            </g>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export const IntegrationMap = memo(MapChart);
