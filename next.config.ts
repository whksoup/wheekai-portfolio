const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.68.73"],

  async headers() {
    return [
      {
        source: "/api/log-error",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },

  devIndicators: false,
};
