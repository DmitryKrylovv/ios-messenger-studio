import { MessageCircle } from "lucide-react";

interface AppHeaderProps {
  title?: string;
  rightAction?: React.ReactNode;
  leftAction?: React.ReactNode;
}

const AppHeader = ({ title, rightAction, leftAction }: AppHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 pt-12 pb-2 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="w-16 flex justify-start">
        {leftAction}
      </div>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
          <MessageCircle size={16} className="text-primary-foreground" />
        </div>
        <span className="text-[17px] font-bold tracking-tight text-foreground">
          {title || "Mono"}
        </span>
      </div>
      <div className="w-16 flex justify-end">
        {rightAction}
      </div>
    </div>
  );
};

export default AppHeader;
