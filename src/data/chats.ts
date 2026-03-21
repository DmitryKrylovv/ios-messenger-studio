export interface Message {
  id: string;
  text: string;
  sent: boolean;
  time: string;
}

export interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  messages: Message[];
}

export const chats: Chat[] = [
  {
    id: "1",
    name: "Алексей",
    avatar: "А",
    lastMessage: "Окей, до встречи!",
    time: "14:32",
    unread: 2,
    online: true,
    messages: [
      { id: "1", text: "Привет! Как дела?", sent: false, time: "14:20" },
      { id: "2", text: "Привет, всё отлично! Ты как?", sent: true, time: "14:21" },
      { id: "3", text: "Тоже хорошо. Встретимся сегодня?", sent: false, time: "14:25" },
      { id: "4", text: "Давай в 18:00 в кафе на углу", sent: true, time: "14:28" },
      { id: "5", text: "Отлично, договорились", sent: false, time: "14:30" },
      { id: "6", text: "Окей, до встречи!", sent: false, time: "14:32" },
    ],
  },
  {
    id: "2",
    name: "Мария",
    avatar: "М",
    lastMessage: "Отправила тебе файл",
    time: "13:10",
    unread: 0,
    online: false,
    messages: [
      { id: "1", text: "Можешь глянуть презентацию?", sent: false, time: "12:50" },
      { id: "2", text: "Да, скинь", sent: true, time: "12:55" },
      { id: "3", text: "Отправила тебе файл", sent: false, time: "13:10" },
    ],
  },
  {
    id: "3",
    name: "Команда проекта",
    avatar: "К",
    lastMessage: "Дедлайн перенесли на пятницу",
    time: "12:45",
    unread: 5,
    online: true,
    messages: [
      { id: "1", text: "Всем привет!", sent: false, time: "12:00" },
      { id: "2", text: "Есть новости по проекту?", sent: true, time: "12:10" },
      { id: "3", text: "Дедлайн перенесли на пятницу", sent: false, time: "12:45" },
    ],
  },
  {
    id: "4",
    name: "Дмитрий",
    avatar: "Д",
    lastMessage: "Спасибо за помощь 🙏",
    time: "Вчера",
    unread: 0,
    online: false,
    messages: [
      { id: "1", text: "Можешь помочь с задачей?", sent: false, time: "Вчера" },
      { id: "2", text: "Конечно, что нужно?", sent: true, time: "Вчера" },
      { id: "3", text: "Спасибо за помощь 🙏", sent: false, time: "Вчера" },
    ],
  },
  {
    id: "5",
    name: "Елена",
    avatar: "Е",
    lastMessage: "Увидимся на вечеринке!",
    time: "Вт",
    unread: 0,
    online: true,
    messages: [
      { id: "1", text: "Придёшь в субботу?", sent: false, time: "Вт" },
      { id: "2", text: "Да, буду!", sent: true, time: "Вт" },
      { id: "3", text: "Увидимся на вечеринке!", sent: false, time: "Вт" },
    ],
  },
];
