import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
  staticImage: true,
  images.unoptimized: true,
  defaultShowCopyCode: true,
  readingTime: true
})

export default withNextra({
  reactStrictMode: true
})
