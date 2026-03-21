import { ChevronRight, Bell, Lock, Palette, HelpCircle, LogOut } from "lucide-react";
import AppHeader from "@/components/AppHeader";

const menuItems = [
  { icon: Bell, label: "Уведомления", subtitle: "Звук, вибрация" },
  { icon: Lock, label: "Конфиденциальность", subtitle: "Последняя активность, блокировка" },
  { icon: Palette, label: "Оформление", subtitle: "Тема, шрифт, фон чата" },
  { icon: HelpCircle, label: "Помощь", subtitle: "FAQ, поддержка" },
];

const ProfileScreen = () => {
  return (
    <div className="flex flex-col h-full bg-background">
      <AppHeader title="Mono" />

      <div className="flex-1 overflow-y-auto">
        {/* User card */}
        <div className="flex items-center gap-4 px-4 py-5">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl">
            И
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-lg font-semibold text-foreground">Иван Петров</p>
            <p className="text-sm text-muted-foreground">+7 999 000-00-00</p>
            <p className="text-[13px] text-muted-foreground mt-0.5">@ivanpetrov</p>
          </div>
          <button className="text-sm font-medium text-muted-foreground active:opacity-50">
            Изм.
          </button>
        </div>

        {/* Bio */}
        <div className="mx-4 p-3 bg-secondary rounded-xl mb-4">
          <p className="text-sm text-foreground">Люблю кофе и код ☕️</p>
        </div>

        {/* Menu items */}
        <div className="mx-4 bg-secondary rounded-xl overflow-hidden">
          {menuItems.map((item, i) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 active:bg-muted transition-colors text-left ${
                i < menuItems.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <item.icon size={20} className="text-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-medium text-foreground">{item.label}</p>
                <p className="text-[12px] text-muted-foreground">{item.subtitle}</p>
              </div>
              <ChevronRight size={18} className="text-muted-foreground flex-shrink-0" />
            </button>
          ))}
        </div>

        {/* Logout */}
        <div className="mx-4 mt-4 mb-8">
          <button className="w-full flex items-center justify-center gap-2 py-3 bg-secondary rounded-xl active:bg-muted transition-colors">
            <LogOut size={18} className="text-destructive" />
            <span className="text-[15px] font-medium text-destructive">Выйти</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
