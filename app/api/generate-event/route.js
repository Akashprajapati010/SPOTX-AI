// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { NextResponse } from "next/server";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// export async function POST(req) {
//   try {
//     const { prompt } = await req.json();

//     if (!prompt) {
//       return NextResponse.json(
//         { error: "Prompt is required" },
//         { status: 400 }
//       );
//     }

//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

//     const systemPrompt = `You are an event planning assistant. Generate event details based on the user's description.

// CRITICAL: Return ONLY valid JSON with properly escaped strings. No newlines in string values - use spaces instead.

// Return this exact JSON structure:
// {
//   "title": "Event title (catchy and professional, single line)",
//   "description": "Detailed event description in a single paragraph. Use spaces instead of line breaks. Make it 2-3 sentences describing what attendees will learn and experience.",
//   "category": "One of: tech, music, sports, art, food, business, health, education, gaming, networking, outdoor, community",
//   "suggestedCapacity": 50,
//   "suggestedTicketType": "free"
// }

// User's event idea: ${prompt}

// Rules:
// - Return ONLY the JSON object, no markdown, no explanation
// - All string values must be on a single line with no line breaks
// - Use spaces instead of \\n or line breaks in description
// - Make title catchy and under 80 characters
// - Description should be 2-3 sentences, informative, single paragraph
// - suggestedTicketType should be either "free" or "paid"
// `;

//     const result = await model.generateContent(systemPrompt);

//     const response = await result.response;
//     const text = response.text();

//     // Clean the response (remove markdown code blocks if present)
//     let cleanedText = text.trim();
//     if (cleanedText.startsWith("```json")) {
//       cleanedText = cleanedText
//         .replace(/```json\n?/g, "")
//         .replace(/```\n?/g, "");
//     } else if (cleanedText.startsWith("```")) {
//       cleanedText = cleanedText.replace(/```\n?/g, "");
//     }

//     console.log(cleanedText);

//     const eventData = JSON.parse(cleanedText);

//     return NextResponse.json(eventData);
//   } catch (error) {
//     console.error("Error generating event:", error);
//     return NextResponse.json(
//       { error: "Failed to generate event" + error.message },
//       { status: 500 }
//     );
//   }
// }

// import Together from "together-ai";
// import { NextResponse } from "next/server";

// const together = new Together({
//   apiKey: process.env.TOGETHER_API_KEY,
// });

// export async function POST(req) {
//   try {
//     const { prompt } = await req.json();

//     if (!prompt) {
//       return NextResponse.json(
//         { error: "Prompt is required" },
//         { status: 400 }
//       );
//     }


//     // 🔥 SAME PROMPT (unchanged)
//     const systemPrompt = `You are an event planning assistant. Generate event details based on the user's description.

// CRITICAL: Return ONLY valid JSON with properly escaped strings. No newlines in string values - use spaces instead.

// Return this exact JSON structure:
// {
//   "title": "Event title (catchy and professional, single line)",
//   "description": "Detailed event description in a single paragraph. Use spaces instead of line breaks. Make it 2-3 sentences describing what attendees will learn and experience.",
//   "category": "One of: tech, music, sports, art, food, business, health, education, gaming, networking, outdoor, community",
//   "suggestedCapacity": 50,
//   "suggestedTicketType": "free"
// }

// User's event idea: ${prompt}

// Rules:
// - Return ONLY the JSON object, no markdown, no explanation
// - All string values must be on a single line with no line breaks
// - Make title catchy and under 80 characters
// - Description should be 2-3 sentences, informative, single paragraph
// - suggestedTicketType should be either "free" or "paid"
// `;

//    const response = await together.chat.completions.create({
//       model: "meta-llama/Llama-3-8b-chat-hf",
//       messages: [
//         { role: "system", content: systemPrompt },
//         { role: "user", content: prompt },
//       ],
//       temperature: 0.7,
//     });

//     let text = response?.choices?.[0]?.message?.content;

//     // ❌ If AI fails → fallback immediately
//     if (!text) {
//       throw new Error("AI returned empty");
//     }

//     text = text.trim();

//     // Clean markdown if exists
//     if (text.startsWith("```")) {
//       text = text.replace(/```json\n?/g, "").replace(/```\n?/g, "");
//     }

//     let eventData;

//     try {
//       eventData = JSON.parse(text);
//     } catch {
//       throw new Error("Invalid JSON from AI");
//     }

//     return NextResponse.json(eventData);

//   } catch (error) {
//     console.error("AI ERROR:", error);

//     // 🔥 ALWAYS RETURN SOMETHING (IMPORTANT)
//     return NextResponse.json({
//       title: "Sample Event",
//       description: "This is a fallback event generated due to AI failure. You can edit it manually.",
//       category: "tech",
//       suggestedCapacity: 50,
//       suggestedTicketType: "free",
//     });
//   }
// }

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // 🔥 Smart category detection
    const lower = prompt.toLowerCase();

    let category = "community";

    if (lower.includes("tech") || lower.includes("ai") || lower.includes("coding")) {
      category = "tech";
    } else if (lower.includes("music") || lower.includes("concert") || lower.includes("dj night")) {
      category = "music";
    } else if (lower.includes("sport") || lower.includes("cricket") || lower.includes("football") || lower.includes("boxing")) {
      category = "sports";
    } else if (lower.includes("business") || lower.includes("startup")) {
      category = "business";
    } else if (lower.includes("health") || lower.includes("fitness")) {
      category = "health";
    } else if (lower.includes("game") || lower.includes("esports")) {
      category = "gaming";
    } else if (lower.includes("food") || lower.includes("festival")) {
      category = "food";
    }

    // 🔥 Generate content
    const eventData = {
      title: `${prompt} Summit 2026`,
      description: `Join us for ${prompt}. This event will provide valuable insights, hands-on learning, and great networking opportunities for all participants.`,
      category,
      suggestedCapacity: 50,
      suggestedTicketType: "free",
    };

    return NextResponse.json(eventData);

  } catch (error) {
    console.error("Local AI Error:", error);

    return NextResponse.json({
      title: "Sample Event",
      description: "This is a fallback event. You can edit it manually.",
      category: "tech",
      suggestedCapacity: 50,
      suggestedTicketType: "free",
    });
  }
}