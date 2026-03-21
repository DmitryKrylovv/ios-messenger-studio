import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { chats, Chat } from "@/data/chats";
import ChatList from "@/components/ChatList";
import ChatView from "@/components/ChatView";

const Index = () => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  return (
    <div className="relative mx-auto max-w-md h-screen overflow-hidden bg-background border-x border-border">
      <ChatList chats={chats} onSelect={setSelectedChat} />
      <AnimatePresence>
        {selectedChat && (
          <ChatView
            key={selectedChat.id}
            chat={selectedChat}
            onBack={() => setSelectedChat(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
