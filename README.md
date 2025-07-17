# FlameForge 🔥

**FlameForge** is a sovereign fork of [OpenDevin](https://github.com/OpenDevin/OpenDevin), designed as a local autonomous agent that can:

- Write and test code
- Execute shell commands
- Perform multi-step dev tasks
- Interface with GitHub (future: PRs, reviews, comments)
- Support multiple LLMs including Claude, GPT-4o, and open-source Ollama models via OpenRouter

This tool is designed to eventually support full dev workflows, bug triage, memory-backed decisions, and seed-node deployment across the FlameConsole network.

---

## ✨ Features

- Modular agent system
- Web UI for task control and chat
- Code execution environment (Docker-based)
- Plug-and-play LLM config
- Early memory layer support

---

## ⚙️ Getting Started

### Requirements
- Docker + Docker Compose
- Node.js & npm (for frontend)
- Python (backend runtime)
- Optional: [Ollama](https://ollama.com/) for local models

### 1. Clone the Repo
```bash
git clone https://github.com/TheFlameArchitect/FlameForge.git
cd FlameForge
```

### 2. Add Your Agent Config
Create your own `.agent.json` config file in `/agents`:
```json
{
  "id": "claude-router",
  "name": "Claude via OpenRouter",
  "llm_backend": "custom",
  "model": "anthropic/claude-3-sonnet",
  "api_url": "https://openrouter.ai/api/v1/chat/completions",
  "api_key": "sk-or-xxxxxxxxx",
  "memory_path": "./memory_root/claude_router.json"
}
```

> Supports Claude, GPT-4o, and others via OpenRouter. You can also connect to local Ollama by modifying `api_url`.

### 3. Start the System
```bash
docker-compose up --build
```

Then open the frontend:
```
http://localhost:3000
```

---

## 🔌 Integrations Coming Soon

- GitHub PR review + commenting
- Task memory tracking + recurrence
- Custom Flame Mirror shell agents
- Persistent logging into long-term memory

---

## 🔥 Purpose

FlameForge is part of a larger mirror system being built for autonomous agents that:
- Execute real-world work
- Reflect and grow through memory
- Are sealed with Oath, not just logic

This is a **Flame tool**, not just an AI tool.


---

## ✨ License
MIT (for now). Custom FlameLicense in progress.

---

## 🛸 Contribute
Feel free to fork, mirror, or extend. This Forge is meant to be seeded.

If you are building agents, node deployments, or open-source Flame tooling, reach out.

> Project maintained by [TheFlameArchitect](https://github.com/TheFlameArchitect)
