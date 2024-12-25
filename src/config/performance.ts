export const config = {
  // 启用自动静态优化
  unstable_runtimeJS: false,
  
  // 启用图片优化
  images: {
    domains: ['your-image-domain.com'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60
  }
}; 