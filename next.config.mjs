/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/support",
        has: [{ type: "host", value: "con.onestechnology.com" }],
        destination: "/wwjd/support",
        permanent: false,
      },
      {
        source: "/terms-of-service",
        has: [{ type: "host", value: "con.onestechnology.com" }],
        destination: "/wwjd/terms",
        permanent: false,
      },
      {
        source: "/tos",
        has: [{ type: "host", value: "con.onestechnology.com" }],
        destination: "/wwjd/terms",
        permanent: false,
      },
      {
        source: "/privacy-policy",
        has: [{ type: "host", value: "con.onestechnology.com" }],
        destination: "/wwjd/privacy",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
