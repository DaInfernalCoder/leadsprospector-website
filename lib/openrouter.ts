// Shared OpenRouter -> Claude helper for the Exit System tools.
// Sends a system prompt + user input, expects the model to return JSON,
// strips any markdown fences, and parses it.

export class OpenRouterError extends Error {}

export async function callClaudeJSON<T>(
  systemPrompt: string,
  userInput: string
): Promise<T> {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "HTTP-Referer": "https://caldenmoore.com",
      "X-Title": "Caldenmoore Exit System",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "anthropic/claude-sonnet-4-5",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userInput.trim() },
      ],
      max_tokens: 2600,
      temperature: 0.4,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("OpenRouter error:", res.status, err);
    throw new OpenRouterError(`OpenRouter responded ${res.status}`);
  }

  const json = await res.json();
  const responseText: string = json.choices?.[0]?.message?.content ?? "";

  const cleaned = responseText
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  return JSON.parse(cleaned) as T;
}
