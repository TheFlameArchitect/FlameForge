import { Settings } from "#/types/settings";

export const LATEST_SETTINGS_VERSION = 5;

export const DEFAULT_SETTINGS: Settings = {
  LLM_MODEL: "openrouter/anthropic/claude-3-sonnet",
  LLM_BASE_URL: "https://openrouter.ai/api/v1",
  AGENT: "CodeActAgent",
  LANGUAGE: "en",
  LLM_API_KEY_SET: false,
  SEARCH_API_KEY_SET: false,
  CONFIRMATION_MODE: false,
  SECURITY_ANALYZER: "",
  REMOTE_RUNTIME_RESOURCE_FACTOR: 1,
  PROVIDER_TOKENS_SET: {},
  ENABLE_DEFAULT_CONDENSER: true,
  ENABLE_SOUND_NOTIFICATIONS: false,
  ENABLE_PROACTIVE_CONVERSATION_STARTERS: false,
  SEARCH_API_KEY: "",
  IS_NEW_USER: true,
  MAX_BUDGET_PER_TASK: null,
  EMAIL: "",
  EMAIL_VERIFIED: true, // Default to true to avoid restricting access unnecessarily
  MCP_CONFIG: {
    sse_servers: [],
    stdio_servers: [],
  },
};

/**
 * Get the default settings
 */
export const getDefaultSettings = (): Settings => DEFAULT_SETTINGS;
