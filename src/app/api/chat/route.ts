import { NextResponse } from "next/server";
import OpenAI from "openai";

const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY = process.env.OPENROUTER_API_KEY;

const detectCryptoQueryAI = async (message: string) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "HTTP-Referer": "localhost:3000", // Optional. Site URL for rankings on openrouter.ai.
      "X-Title": "PegsAI", // Optional. Site title for rankings on openrouter.ai.
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-2.0-flash-001",
      messages: [
        {
          role: "user",
          content: `Does this message ask for a cryptocurrency price? ${message}`,
        },
      ],
      context: {
        temperature: 1.5,
        repetition_penalty: 1,
      },
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content.includes("yes"); // Returns true if crypto-related
};

export async function POST(req: Request) {
  console.log("i am here");
  try {
    const { messages } = await req.json();

    // //this is to check if the message has anything to do with crypto prices. if so we make a different request to coingecko's API
    // const isItACryptoQuestion = detectCryptoQueryAI(messages).then(
    //   (response) => {
    //     console.log(response);
    //   }
    // );

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "HTTP-Referer": "pegs-ai.vercel.app", // Optional. Site URL for rankings on openrouter.ai.
        "X-Title": "PegsAI", // Optional. Site title for rankings on openrouter.ai.
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-001",
        messages: messages,

        max_tokens: 500,

        temperature: 1.5,
        repetition_penalty: 1,
      }),
    });

    const data = await response.json();

    console.log(data.choices);
    const aiMessage =
      data.choices?.[0]?.message?.content || "No response received.";

    return NextResponse.json({ text: aiMessage });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
