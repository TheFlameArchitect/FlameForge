#!/usr/bin/env python3

import requests
import json
import time

# Test sending a message to trigger Memory debug logs
conversation_id = "3d99586f39ed48a0b72546f758192349"  # Active conversation

# Try to send a message via the websocket endpoint simulation
message_data = {
    "action": "message",
    "args": {
        "content": "Hello, can you help me with a simple test?",
        "source": "user"
    }
}

print(f"Attempting to send test message to conversation: {conversation_id}")
print("Visit http://localhost:3000 and send a message to trigger the Memory debug logs")
print("Then check the Docker logs for Memory activity...")

# Alternative: check conversation status
try:
    response = requests.get(f"http://localhost:3000/api/conversations/{conversation_id}")
    print(f"Conversation status: {response.json().get('status', 'unknown')}")
except Exception as e:
    print(f"Error checking conversation: {e}")

print("\nTo see Memory logs, run:")
print("docker logs --tail=100 --follow openhands-app- | grep -E '(🎯|🔍|Memory received|blocking|RecallAction)'")
