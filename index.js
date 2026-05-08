import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "calculator",
  version: "1.0.0",
});

server.tool(
  "add",
  "Add two numbers",
  { a: z.number().describe("First number"), b: z.number().describe("Second number") },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }],
  })
);

server.tool(
  "subtract",
  "Subtract b from a",
  { a: z.number().describe("First number"), b: z.number().describe("Second number") },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a - b) }],
  })
);

server.tool(
  "multiply",
  "Multiply two numbers",
  { a: z.number().describe("First number"), b: z.number().describe("Second number") },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a * b) }],
  })
);

server.tool(
  "divide",
  "Divide a by b",
  { a: z.number().describe("Dividend"), b: z.number().describe("Divisor") },
  async ({ a, b }) => {
    if (b === 0) {
      return { content: [{ type: "text", text: "Error: Division by zero" }], isError: true };
    }
    return { content: [{ type: "text", text: String(a / b) }] };
  }
);

server.tool(
  "power",
  "Raise a to the power of b",
  { a: z.number().describe("Base"), b: z.number().describe("Exponent") },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(Math.pow(a, b)) }],
  })
);

server.tool(
  "sqrt",
  "Square root of a number",
  { a: z.number().describe("Number to take square root of") },
  async ({ a }) => {
    if (a < 0) {
      return { content: [{ type: "text", text: "Error: Cannot take square root of negative number" }], isError: true };
    }
    return { content: [{ type: "text", text: String(Math.sqrt(a)) }] };
  }
);

server.tool(
  "modulo",
  "Remainder of a divided by b",
  { a: z.number().describe("Dividend"), b: z.number().describe("Divisor") },
  async ({ a, b }) => {
    if (b === 0) {
      return { content: [{ type: "text", text: "Error: Division by zero" }], isError: true };
    }
    return { content: [{ type: "text", text: String(a % b) }] };
  }
);

const transport = new StdioServerTransport();
server.connect(transport);

