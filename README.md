# calculator-mcp

A calculator MCP server with 7 tools: add, subtract, multiply, divide, power, sqrt, modulo.

## Usage with Claude Code

```bash
claude mcp add calculator npx calculator-mcp
```

Or add manually to `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "calculator": {
      "command": "npx",
      "args": ["calculator-mcp"]
    }
  }
}
```

## Tools

| Tool | Description | Parameters |
|------|-------------|------------|
| `add` | a + b | `a`, `b` |
| `subtract` | a - b | `a`, `b` |
| `multiply` | a × b | `a`, `b` |
| `divide` | a / b | `a`, `b` |
| `power` | a ^ b | `a`, `b` |
| `sqrt` | √a | `a` |
| `modulo` | a % b | `a`, `b` |

## Remote Deployment

Start in HTTP mode:

```bash
TRANSPORT=http PORT=3000 node index.js
```

Then connect via SSE:

```json
{
  "mcpServers": {
    "calculator": {
      "command": "npx",
      "args": ["calculator-mcp"],
      "transport": "sse",
      "url": "http://your-server:3000/sse"
    }
  }
}
```

## License

MIT
