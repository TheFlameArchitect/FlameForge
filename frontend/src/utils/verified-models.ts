// Here are the list of verified models and providers that we know work well with OpenHands.
export const VERIFIED_PROVIDERS = [
  "openai",
  "azure",
  "anthropic",
  "openrouter",
  "deepseek",
];
export const VERIFIED_MODELS = [
  "o3-mini-2025-01-31",
  "o3-2025-04-16",
  "o4-mini-2025-04-16",
  "claude-3-5-sonnet-20241022",
  "claude-3-7-sonnet-20250219",
  "claude-sonnet-4-20250514",
  "claude-opus-4-20250514",
  "claude-3-sonnet",
  "claude-3-opus",
  "claude-3-haiku",
  "deepseek-chat",
];

// LiteLLM does not return OpenAI models with the provider, so we list them here to set them ourselves for consistency
// (e.g., they return `gpt-4o` instead of `openai/gpt-4o`)
export const VERIFIED_OPENAI_MODELS = [
  "gpt-4o",
  "gpt-4o-mini",
  "gpt-4-32k",
  "gpt-4.1",
  "gpt-4.1-2025-04-14",
  "o1-mini",
  "o3",
  "o3-2025-04-16",
  "o4-mini",
  "o4-mini-2025-04-16",
  "codex-mini-latest",
];

// OpenRouter models that don't need a provider prefix
export const VERIFIED_OPENROUTER_MODELS = [
  "anthropic/claude-3-sonnet",
  "anthropic/claude-3-opus",
  "anthropic/claude-3-haiku",
  "anthropic/claude-2.1",
  "google/gemini-pro",
  "meta/llama2-70b",
  "mistral/mistral-large",
];

// LiteLLM does not return the compatible Anthropic models with the provider, so we list them here to set them ourselves
// (e.g., they return `claude-3-5-sonnet-20241022` instead of `anthropic/claude-3-5-sonnet-20241022`)
export const VERIFIED_ANTHROPIC_MODELS = [
  "claude-2",
  "claude-2.1",
  "claude-3-5-sonnet-20240620",
  "claude-3-5-sonnet-20241022",
  "claude-3-5-haiku-20241022",
  "claude-3-haiku-20240307",
  "claude-3-opus-20240229",
  "claude-3-sonnet-20240229",
  "claude-3-7-sonnet-20250219",
  "claude-sonnet-4-20250514",
  "claude-opus-4-20250514",
];
