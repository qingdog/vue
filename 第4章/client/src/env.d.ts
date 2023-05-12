/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_API_BASE_URL: string
  readonly ABC: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}