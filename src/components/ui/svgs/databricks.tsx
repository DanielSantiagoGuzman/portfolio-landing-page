import type { SVGProps } from "react";

const Databricks = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path d="M3 8.4L12 13.2L21 8.4L12 3.6L3 8.4Z" fill="#FF3621" />
    <path d="M3 12L12 16.8L21 12L12 7.2L3 12Z" fill="#FF3621" opacity="0.7" />
    <path d="M3 15.6L12 20.4L21 15.6L12 10.8L3 15.6Z" fill="#FF3621" opacity="0.5" />
  </svg>
);

export { Databricks };
