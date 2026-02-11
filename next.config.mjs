/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === "true"
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")?.[1] ?? ""
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const isUserOrOrgPagesRepo = repositoryName.endsWith(".github.io")

const basePath =
  configuredBasePath ||
  (isGitHubActions && repositoryName && !isUserOrOrgPagesRepo ? `/${repositoryName}` : "")

const nextConfig = {
  output: "export",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
