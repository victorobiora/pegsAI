"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { Send } from "lucide-react";
import FormattedResponse from "@/src/library/formatted-response";
import AICodeResponse from "./ai-response";

export default function ChatUI() {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = useCallback(async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000); // Auto-cancel after 1 min

    try {
      const updatedMessages = [...messages, { role: userMessage.role, content: `Feel free to squeeze in a joke but not frequently.Answer this question as short and concise as possible unless the user specifically asks you to go in detail. ${userMessage.content}` }];

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();


      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.text },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error: Could not fetch response." },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, messages]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "Enter" &&
        document.activeElement instanceof HTMLInputElement
      ) {
        sendMessage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [sendMessage]);

  return (
    <div className="flex flex-col w-2/3 h-[80%] MobileScreen:w-full bg-gray-900 text-white rounded-md">
      {/* Header */}
      <header className="text-xl font-bold text-center border-b border-gray-700">
        <div className="italic my-1 text-center drop-shadow-lg">
          <span className="text-orange-500">Pegs</span>
          <span className="text-blue-400">AI</span>
        </div>
        <div className="italic my-2 text-center drop-shadow-lg text-sm">
          <span className="text-orange-500">Google</span>{" "}
          <span className="text-blue-400">Gemini</span>
        </div>
      </header>

      {/* Messages */}
      <main
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" ? (
              <AICodeResponse aiResponse={msg.content} />
            ) : (
              <div
                className={`p-3 rounded-lg max-w-lg ${msg.role === "user" ? "bg-green-600" : "bg-gray-700"}`}
              >
                <FormattedResponse role={msg.role} text={msg.content} />
              </div>
            )}
          </div>
        ))}
        {loading && <p className="text-gray-400 text-sm">Thinking...</p>}
      </main>

      {/* Input */}
      <footer className="p-4 border-t border-gray-700 bg-gray-800">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 bg-gray-700 rounded-lg text-white outline-none"
          />
          <button
            onClick={sendMessage}
            className="p-2 bg-blue-600 rounded-lg disabled:opacity-50"
            disabled={!input.trim() || loading}
          >
            <Send size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}
