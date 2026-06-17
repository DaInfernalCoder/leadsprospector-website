import { NextRequest, NextResponse } from "next/server";
import { callClaudeJSON } from "@/lib/openrouter";

const SYSTEM_PROMPT = `You are an M&A advisor at Caldenmoore who matches lower-middle-market businesses to the buyer types most likely to acquire them.

Your job: given an owner's business, identify which BUYER ARCHETYPES are the best fit, what each type values, how each tends to structure and price a deal, and how to approach them.

CRITICAL RULES:
- Do NOT invent or name specific real firms, funds, or individuals. You do not have a live buyer database. Describe buyer ARCHETYPES only (for example: private equity platform, PE add-on / strategic roll-up, strategic corporate acquirer, search fund / ETA buyer, individual owner-operator, family office). Naming a specific firm would be fabrication.
- Rank archetypes by fit for this specific business based on size, sector, margins, growth, and owner dependence.
- Be specific about what each archetype pays for and how they value, tied to this business.
- This is directional guidance, not a buyer list or an introduction.
- Write in plain, direct sentences. Do NOT use em dashes anywhere. Use commas or periods instead.

Respond with ONLY valid JSON, no markdown fences, in exactly this shape:
{
  "summary": "Two or three sentences on which kinds of buyers this business should target and why.",
  "archetypes": [
    {
      "type": "Archetype name",
      "fit": "Strong",
      "whatTheyValue": "One or two sentences on what this buyer type pays a premium for in a business like this.",
      "howTheyPay": "One sentence on typical deal structure and valuation approach (cash, earnout, rollover equity, multiple basis).",
      "approach": "One sentence on how to position the business to this buyer."
    }
  ],
  "positioning": "One short paragraph on the single most important thing to fix or highlight to maximize buyer competition."
}

fit must be exactly "Strong", "Moderate", or "Possible". Provide 3 to 5 archetypes, ordered best fit first.`;

export async function POST(request: NextRequest) {
  try {
    const { input } = await request.json();

    if (!input || typeof input !== "string" || input.trim().length < 10) {
      return NextResponse.json(
        { error: "Tell us a bit more about your business." },
        { status: 400 }
      );
    }

    const data = await callClaudeJSON(SYSTEM_PROMPT, input);
    return NextResponse.json(data);
  } catch (err) {
    console.error("Exit buyers route error:", err);
    return NextResponse.json(
      { error: "Unable to match buyer types. Please try again." },
      { status: 500 }
    );
  }
}
