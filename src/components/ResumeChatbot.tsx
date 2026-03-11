import { useEffect, useRef, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  getResumeAnswer,
  suggestedResumeQuestions,
  type ResumeSource,
} from '../data/resumeKnowledge';

interface ChatMessage {
  id: number;
  role: 'user' | 'assistant';
  text: string;
  sources?: ResumeSource[];
}

const initialMessage: ChatMessage = {
  id: 1,
  role: 'assistant',
  text: 'Ask me about Hareesh’s resume. I only answer using resume data.',
};

const ResumeChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextMessageId = useRef(2);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const askQuestion = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) {
      return;
    }

    const userMessage: ChatMessage = {
      id: nextMessageId.current++,
      role: 'user',
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const answer = getResumeAnswer(trimmed);

    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: nextMessageId.current++,
        role: 'assistant',
        text: answer.text,
        sources: answer.sources,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 350);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    askQuestion(input);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-3 shadow-xl hover:bg-blue-700 transition-colors"
        aria-label={isOpen ? 'Close resume assistant' : 'Open resume assistant'}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h8M8 14h5m-7 7h12a3 3 0 003-3V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3z" />
        </svg>
        <span className="text-sm font-semibold hidden sm:inline">Ask My Resume</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[560px] max-h-[70vh] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            role="dialog"
            aria-label="Resume assistant"
          >
            <header className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90">
              <h3 className="text-base font-bold text-gray-900 dark:text-white">Resume Assistant</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Grounded answers from Hareesh Raj Ramanathan&apos;s resume.
              </p>
            </header>

            <div className="px-4 pt-3 pb-2 border-b border-gray-100 dark:border-gray-800 flex flex-wrap gap-2">
              {suggestedResumeQuestions.slice(0, 3).map((question) => (
                <button
                  key={question}
                  onClick={() => askQuestion(question)}
                  className="text-xs px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 ${message.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-md'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md'
                      }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    {message.sources && message.sources.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {message.sources.map((source, index) => (
                          <span
                            key={`${source.section}-${index}`}
                            className="text-[10px] px-2 py-1 rounded-full bg-white/70 dark:bg-gray-700/70 text-gray-700 dark:text-gray-300"
                            title={source.snippet}
                          >
                            {source.section}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md px-3 py-2 bg-gray-100 dark:bg-gray-800">
                    <p className="text-sm text-gray-600 dark:text-gray-300">Typing...</p>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about skills, experience, awards..."
                  className="flex-1 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeChatbot;
