import { motion } from "framer-motion";
import { Chat } from "@/data/chats";

interface ChatListProps {
  chats: Chat[];
  onSelect: (chat: Chat) => void;
}

const ChatList = ({ chats, onSelect }: ChatListProps) => {
  return (
    <div className="flex flex-col h-full bg-background">
      {/* iOS-style header */}
      <div className="px-4 pt-14 pb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Чаты</h1>
      </div>

      {/* Search bar */}
      <div className="px-4 py-2">
        <div className="flex items-center gap-2 bg-muted rounded-xl px-3 py-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Поиск"
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1"
          />
        </div>
      </div>

      {/* Chat items */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat, i) => (
          <motion.button
            key={chat.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => onSelect(chat)}
            className="w-full flex items-center gap-3 px-4 py-3 active:bg-muted transition-colors text-left"
          >
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
                {chat.avatar}
              </div>
              {chat.online && (
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-muted-foreground border-2 border-background" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 border-b border-border py-1">
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-[15px] text-foreground truncate">{chat.name}</span>
                <span className="text-xs text-muted-foreground ml-2 flex-shrink-0">{chat.time}</span>
              </div>
              <div className="flex justify-between items-center mt-0.5">
                <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                {chat.unread > 0 && (
                  <span className="ml-2 flex-shrink-0 bg-primary text-primary-foreground text-[11px] font-semibold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
