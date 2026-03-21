import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { chats, Chat } from "@/data/chats";
import ChatList from "@/components/ChatList";
import ChatView from "@/components/ChatView";
import ContactsScreen from "@/components/ContactsScreen";
import ProfileScreen from "@/components/ProfileScreen";
import TabBar, { TabId } from "@/components/TabBar";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("chats");
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  const totalUnread = chats.reduce((sum, c) => sum + c.unread, 0);

  return (
    <div className="relative mx-auto max-w-md h-screen overflow-hidden bg-background border-x border-border flex flex-col">
      {/* Main content area */}
      <div className="flex-1 overflow-hidden relative">
        {activeTab === "chats" && (
          <ChatList chats={chats} onSelect={setSelectedChat} />
        )}
        {activeTab === "contacts" && <ContactsScreen />}
        {activeTab === "profile" && <ProfileScreen />}

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

      {/* Tab bar - hidden when in chat view */}
      {!selectedChat && (
        <TabBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          unreadCount={totalUnread}
        />
      )}
    </div>
  );
};

export default Index;
