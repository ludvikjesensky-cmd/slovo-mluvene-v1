import type { NextConfig } from "next";

const isPagesPreview = process.env.BUILD_TARGET === "github-pages";

const nextConfig: NextConfig = {
  ...(isPagesPreview
    ? {
        output: "export" as const,
        basePath: "/slovo-mluvene-v1",
        trailingSlash: true,
      }
    : {
        output: "standalone" as const,
      }),
};

export default nextConfig;