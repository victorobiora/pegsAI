// This function uses openrouter's api. openrouter is a unified interface that has access to multiple llms at different pricing.
// This function should take an argument of the  array of messages in a particular type, the LLM model to be used and the api key.
// This function aims to send a request to an ai api, get a response and updates the messages array with the response
// This function returns the new array of responses and also the most recent response
//however, i cant get environmental variables or access it from the frontend so i cannot use this function 

const API_KEY = 'api_key' as string; 

const sendRequestToOpenRouter = async (
  messagesArray: { role: "user" | "assistant"; content: string }[],
  model: string,
  key: string,
) => {
  let newMessagesArray;
  const apiUrl = "https://openrouter.ai/api/v1/chat/completions";
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 60000); // Auto-cancel after 1 min


  try {
    const req = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        messages: messagesArray,
        context: {
          temperature: 1.5,
          repetition_penalty: 1,
        },
      }),
      signal: controller.signal,
    });

    if (!req.ok) throw new Error("Server error");

    const data = await req.json();

    const aiMessage =
      data.choices?.[0]?.message?.content || "No response received.";

    clearTimeout(timeoutId);
    messagesArray.push({ role: "assistant", content: aiMessage });
    newMessagesArray = messagesArray;
  } catch (error) {
    messagesArray.push({
      role: "assistant",
      content: "Error: Could not fetch response for some reason.",
    });
    newMessagesArray = messagesArray;
  } finally {
    return {
      newMessagesArray,
      latestResponse: newMessagesArray ? newMessagesArray[newMessagesArray.length - 1] : null,
    };
  }
};


export default sendRequestToOpenRouter;