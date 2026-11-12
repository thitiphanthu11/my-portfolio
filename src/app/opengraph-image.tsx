import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";
export const alt = `${portfolio.name} | ${portfolio.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ background: "#ffffff", color: "#262626", width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "90px", justifyContent: "center", borderLeft: "12px solid #f97316" }}><div style={{ fontSize: 20, color: "#c2410c", letterSpacing: 6 }}>PERSONAL PORTFOLIO</div><div style={{ fontSize: 86, marginTop: 36 }}>{portfolio.name}</div><div style={{ fontSize: 36, marginTop: 20, color: "#525252" }}>{portfolio.role}</div></div>, size);
}
