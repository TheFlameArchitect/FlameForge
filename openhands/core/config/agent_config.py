from __future__ import annotations

from typing import Any

from pydantic import BaseModel, ConfigDict, Field, ValidationError

from openhands.core.config.condenser_config import CondenserConfig
from openhands.core.logger import openhands_logger as logger


class AgentConfig(BaseModel):
    """Configuration for an agent.

    Attributes:
        name: The name of the agent.
        classpath: The classpath for custom agent registration.
        llm_config: The name of the LLM configuration to use for this agent.
        system_prompt_filename: The filename of the system prompt.
        enable_condensation_request: Whether to enable condensation requests.
        enable_history_truncation: Whether to enable history truncation.
        enable_som_visual_browsing: Whether to enable visual browsing for the SOM model.
        enable_default_condenser: Whether to enable the default condenser.
        enable_prompt_extensions: Whether to enable prompt extensions.
        enable_cmd: Whether to enable command execution tools.
        enable_think: Whether to enable thinking tools.
        enable_finish: Whether to enable finish tools.
        enable_browsing: Whether to enable web browsing tools.
        enable_jupyter: Whether to enable Jupyter notebook tools.
        enable_llm_editor: Whether to enable LLM-based editor tools.
        enable_editor: Whether to enable regular editor tools.
        enable_mcp: Whether to enable MCP.
        disabled_microagents: List of disabled microagents.
        condenser_config: Configuration for the condenser.
        condenser: Alias for condenser_config for backward compatibility.
        max_consecutive_auto_rejects: Maximum number of consecutive auto-rejects before stopping.
        max_consecutive_errors: Maximum number of consecutive errors before stopping.
        max_steps_per_task: Maximum number of steps per task before stopping.
        max_tool_calls_per_step: Maximum number of tool calls per step.
        max_tool_errors_per_step: Maximum number of tool errors per step.
    """

    name: str = ""
    classpath: str | None = None
    llm_config: str | None = None
    system_prompt_filename: str = "system_prompt.j2"
    enable_condensation_request: bool = False  # Disable by default to prevent loops
    enable_history_truncation: bool = True
    enable_som_visual_browsing: bool = False
    enable_default_condenser: bool = True
    enable_prompt_extensions: bool = True
    enable_cmd: bool = True
    enable_think: bool = True
    enable_finish: bool = True
    enable_browsing: bool = True
    enable_jupyter: bool = True
    enable_llm_editor: bool = False
    enable_editor: bool = True
    enable_mcp: bool = True
    disabled_microagents: list[str] = Field(default_factory=list)
    condenser_config: CondenserConfig | None = None
    condenser: CondenserConfig | None = None  # Alias for backward compatibility
    max_consecutive_auto_rejects: int = 3
    max_consecutive_errors: int = 3
    max_steps_per_task: int = 50
    max_tool_calls_per_step: int = 10
    max_tool_errors_per_step: int = 3

    model_config = ConfigDict(extra='forbid')

    @classmethod
    def from_toml_section(cls, data: dict) -> dict[str, 'AgentConfig']:
        """
        Create a mapping of AgentConfig instances from a toml dictionary representing the [agent] section.

        The default configuration is built from all non-dict keys in data.
        Then, each key with a dict value (e.g. [agent.CustomAgent]) is treated as a custom agent configuration,
        and its values override the default configuration.

        Returns:
            dict[str, AgentConfig]: A mapping where the key "agent" corresponds to the default configuration
            and additional keys represent custom configurations.
        """
        # Initialize the result mapping
        agent_mapping: dict[str, AgentConfig] = {}

        # Extract base config data (non-dict values)
        base_data = {}
        custom_sections: dict[str, dict] = {}
        for key, value in data.items():
            if isinstance(value, dict):
                custom_sections[key] = value
            else:
                base_data[key] = value

        # Try to create the base config
        try:
            base_config = cls.model_validate(base_data)
            agent_mapping['agent'] = base_config
        except ValidationError:
            logger.warning(
                'Cannot parse [agent] config from toml. Continuing with defaults.'
            )
            # If base config fails, create a default one
            base_config = cls()
            # Still add it to the mapping
            agent_mapping['agent'] = base_config

        # Process each custom section independently
        for name, overrides in custom_sections.items():
            try:
                # Merge base config with overrides
                merged = {**base_config.model_dump(), **overrides}
                custom_config = cls.model_validate(merged)
                agent_mapping[name] = custom_config
            except ValidationError:
                logger.warning(
                    f'Cannot parse [agent.{name}] config from toml. This section will be skipped.'
                )
                # Skip this custom section but continue with others
                continue

        return agent_mapping
