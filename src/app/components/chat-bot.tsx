'use client'

export function ChatBot() {
  return (
    <iframe
      id="chatbot"
      src={`https://futiba.ai/chat-iframe/${process.env.NEXT_PUBLIC_KEY_CHAT_BOT}`}
      title="Chatbot"
      width="100%"
      className="h-[30rem] rounded-lg border-8 border-green-700 opacity-90 xl:h-2/3 xl:w-[35rem]"
    ></iframe>
  )
}
