import { MessageCircle, Users, User } from "lucide-react";
import { motion } from "framer-motion";

export type TabId = "chats" | "contacts" | "profile";

interface TabBarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  unreadCount?: number;
}

const tabs: { id: TabId; label: string; icon: typeof MessageCircle }[] = [
  { id: "chats", label: "Чаты", icon: MessageCircle },
  { id: "contacts", label: "Контакты", icon: Users },
  { id: "profile", label: "Профиль", icon: User },
];

const TabBar = ({ activeTab, onTabChange, unreadCount = 0 }: TabBarProps) => {
  return (
    <div className="flex items-end justify-around border-t border-border bg-background/80 backdrop-blur-xl px-2 pb-6 pt-1.5">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex flex-col items-center gap-0.5 min-w-[64px] py-1 relative transition-colors"
          >
            <div className="relative">
              <Icon
                size={24}
                strokeWidth={isActive ? 2.2 : 1.5}
                className={isActive ? "text-foreground" : "text-muted-foreground"}
              />
              {tab.id === "chats" && unreadCount > 0 && (
                <span className="absolute -top-1.5 -right-2.5 bg-foreground text-background text-[10px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-1">
                  {unreadCount}
                </span>
              )}
            </div>
            <span
              className={`text-[10px] font-medium ${
                isActive ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {tab.label}
            </span>
            {isActive && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-foreground"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default TabBar;
