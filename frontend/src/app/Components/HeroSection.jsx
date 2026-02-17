"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useRef, useEffect } from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DotIcon, MessageCircle, Send, X } from "lucide-react";

// Sample logged-in user — replace with your real auth data (e.g. from useSession / context)
const LOGGED_IN_USER = {
  name: "Alex Johnson",
  email: "alex.johnson@email.com",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  portfolio: "$12,430.50",
  joinedDate: "Jan 2024",
};

const QUICK_ACTIONS = [
  "📈 BTC price",
  "📊 My portfolio",
  "🔥 Top gainers",
  "💡 Market summary",
];

const getWelcomeMessages = (user) => [
  {
    role: "bot",
    text: `👋 Welcome back, **${user.name}**! Great to see you again.`,
  },
  {
    role: "bot",
    text: `Your portfolio is currently valued at **${user.portfolio}**. How can I help you today?`,
  },
];

function HeroSection() {
  const [category, setCategory] = useState("all");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState(getWelcomeMessages(LOGGED_IN_USER));
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleCategory = (value) => {
    setCategory(value);
  };

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    // Add user message
    const userMessage = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // TODO: Replace this with your actual API call
      // const res = await fetch("/api/chat", { method: "POST", body: JSON.stringify({ message: trimmed }) });
      // const data = await res.json();
      // const botReply = data.reply;

      // Placeholder simulated response (remove when API is ready)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const botReply = `You asked: "${trimmed}". (API not connected yet — replace this with your real response.)`;

      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              variant={category === "all" ? "default" : "outline"}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              onClick={() => handleCategory("top50")}
              variant={category === "top50" ? "default" : "outline"}
              className="rounded-full"
            >
              Top 50
            </Button>
            <Button
              onClick={() => handleCategory("topGainers")}
              variant={category === "topGainers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Gainers
            </Button>
            <Button
              onClick={() => handleCategory("topLosers")}
              variant={category === "topLosers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Losers
            </Button>
          </div>
          <AssetTable />
        </div>

        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>BTC</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">Bit Coin</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold">5464</p>
                <p className="text-red-600">
                  -1319049822.578<span>(-0.29803%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Section */}
      <section className="fixed bottom-5 right-5 z-50 flex flex-col justify-end items-end gap-2">
        {/* Chat Panel — only visible when open */}
        {isChatOpen && (
          <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900 border border-slate-700 shadow-xl flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-slate-700 px-4 h-[14%]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={LOGGED_IN_USER.avatarUrl} />
                    <AvatarFallback className="bg-slate-700 text-white text-xs">
                      {LOGGED_IN_USER.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  {/* Online dot */}
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border border-slate-900" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium leading-none">{LOGGED_IN_USER.name}</p>
                  <p className="text-green-400 text-xs mt-0.5">● Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsChatOpen(false)}
                className="text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X size={18} />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto text-sm flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold mr-2 shrink-0 mt-1">
                      AI
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-slate-700 text-slate-200 rounded-bl-none"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: msg.text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                    }}
                  />
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    AI
                  </div>
                  <div className="bg-slate-700 text-slate-400 px-4 py-2 rounded-lg rounded-bl-none text-sm flex items-center gap-1">
                    <span className="animate-bounce" style={{ animationDelay: "0ms" }}>•</span>
                    <span className="animate-bounce" style={{ animationDelay: "150ms" }}>•</span>
                    <span className="animate-bounce" style={{ animationDelay: "300ms" }}>•</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick action chips */}
            <div className="px-3 pb-2 flex flex-wrap gap-1.5">
              {QUICK_ACTIONS.map((action) => (
                <button
                  key={action}
                  onClick={() => setInput(action.replace(/^[^\s]+\s/, ""))}
                  className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-600 rounded-full px-3 py-1 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>

            {/* Input bar */}
            <div className="border-t border-slate-700 p-3 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 bg-slate-800 text-slate-200 placeholder-slate-500 text-sm rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-slate-500"
              />
              <Button
                size="icon"
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 hover:bg-blue-500 shrink-0 disabled:opacity-40"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <div className="relative w-[10rem] cursor-pointer group">
          <Button
            className="w-full h-[3rem] gap-2 items-center"
            onClick={() => setIsChatOpen((prev) => !prev)}
          >
            <MessageCircle
              size={30}
              className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]"
            />
            <span className="text-2xl">ChatBot</span>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;