'use client'

export function ChatBot() {
  return (
    <iframe
      src={`https://futiba.ai/chat-iframe/${process.env.NEXT_PUBLIC_KEY_CHAT_BOT}`}
      title="Chatbot"
      width="100%"
      className="h-full rounded-lg opacity-90 xl:w-[35rem]"
    ></iframe>
  )
}
