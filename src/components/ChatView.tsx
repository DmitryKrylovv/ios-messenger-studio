import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Chat, Message } from "@/data/chats";
import { ArrowLeft, Send } from "lucide-react";

interface ChatViewProps {
  chat: Chat;
  onBack: () => void;
}

const ChatView = ({ chat, onBack }: ChatViewProps) => {
  const [messages, setMessages] = useState<Message[]>(chat.messages);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      sent: true,
      time: new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className="absolute inset-0 flex flex-col bg-background z-10"
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-2 pt-14 pb-2 border-b border-border bg-background/80 backdrop-blur-xl">
        <button onClick={onBack} className="p-2 -ml-1 active:opacity-50 transition-opacity">
          <ArrowLeft size={24} className="text-foreground" />
        </button>
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
            {chat.avatar}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-[15px] text-foreground truncate">{chat.name}</p>
            <p className="text-[11px] text-muted-foreground">
              {chat.online ? "в сети" : "был(а) недавно"}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5">
        {messages.map((msg, i) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.03 }}
            className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-3.5 py-2 ${
                msg.sent
                  ? "bg-bubble-sent text-bubble-sent-foreground rounded-2xl rounded-br-md"
                  : "bg-bubble-received text-bubble-received-foreground rounded-2xl rounded-bl-md"
              }`}
            >
              <p className="text-[15px] leading-snug">{msg.text}</p>
              <p
                className={`text-[10px] mt-0.5 text-right ${
                  msg.sent ? "text-bubble-sent-foreground/50" : "text-muted-foreground"
                }`}
              >
                {msg.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input bar */}
      <div className="border-t border-border bg-background px-3 py-2 pb-8">
        <div className="flex items-end gap-2">
          <div className="flex-1 bg-muted rounded-2xl px-4 py-2.5">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Сообщение"
              className="w-full bg-transparent text-[15px] text-foreground placeholder:text-muted-foreground outline-none"
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-2.5 rounded-full bg-primary text-primary-foreground disabled:opacity-30 transition-opacity active:scale-95"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatView;
