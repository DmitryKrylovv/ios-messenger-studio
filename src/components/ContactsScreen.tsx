import { motion } from "framer-motion";
import AppHeader from "@/components/AppHeader";

interface Contact {
  id: string;
  name: string;
  avatar: string;
  phone: string;
  online: boolean;
}

const contacts: Contact[] = [
  { id: "1", name: "Алексей", avatar: "А", phone: "+7 999 123-45-67", online: true },
  { id: "2", name: "Дмитрий", avatar: "Д", phone: "+7 999 234-56-78", online: false },
  { id: "3", name: "Елена", avatar: "Е", phone: "+7 999 345-67-89", online: true },
  { id: "4", name: "Игорь", avatar: "И", phone: "+7 999 456-78-90", online: false },
  { id: "5", name: "Мария", avatar: "М", phone: "+7 999 567-89-01", online: false },
  { id: "6", name: "Наталья", avatar: "Н", phone: "+7 999 678-90-12", online: true },
  { id: "7", name: "Олег", avatar: "О", phone: "+7 999 789-01-23", online: false },
  { id: "8", name: "Светлана", avatar: "С", phone: "+7 999 890-12-34", online: true },
];

// Group by first letter
const grouped = contacts.reduce<Record<string, Contact[]>>((acc, c) => {
  const letter = c.name[0];
  if (!acc[letter]) acc[letter] = [];
  acc[letter].push(c);
  return acc;
}, {});

const sortedLetters = Object.keys(grouped).sort();

const ContactsScreen = () => {
  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-14 pb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Контакты</h1>
        <button className="text-sm font-medium text-muted-foreground active:opacity-50">
          Добавить
        </button>
      </div>

      {/* Search */}
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

      {/* Contact list */}
      <div className="flex-1 overflow-y-auto">
        {sortedLetters.map((letter) => (
          <div key={letter}>
            <div className="px-4 py-1.5 bg-secondary">
              <span className="text-xs font-semibold text-muted-foreground">{letter}</span>
            </div>
            {grouped[letter].map((contact, i) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-3 px-4 py-2.5 active:bg-muted transition-colors"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    {contact.avatar}
                  </div>
                  {contact.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-muted-foreground border-2 border-background" />
                  )}
                </div>
                <div className="flex-1 min-w-0 border-b border-border py-1">
                  <p className="font-medium text-[15px] text-foreground">{contact.name}</p>
                  <p className="text-[13px] text-muted-foreground">{contact.phone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsScreen;
