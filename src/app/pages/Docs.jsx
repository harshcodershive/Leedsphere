import { useState } from 'react';
import {
  Plus,
  Smile,
  AtSign,
  Paperclip,
  Send,
  MoreHorizontal,
  MessageSquare,
  Bookmark,
  Share,
  Hash,
  ChevronDown,
  Bold,
  Italic,
  Strikethrough,
  Link,
  ListOrdered,
  List,
  Code,
  Video
} from 'lucide-react';
import { cn } from '../../shared/utils/cn';

const Docs = () => {
  const [message, setMessage] = useState('');
  const [showFormatting, setShowFormatting] = useState(false);

  const messages = [
    {
      id: 1,
      user: { name: 'Sarah Wilson', avatar: 'SW', color: 'from-pink-500 to-purple-500' },
      time: '9:32 AM',
      content: 'Hey team! 👋 Just pushed the new design system updates. Can everyone take a look and share feedback?',
      reactions: [
        { emoji: '👍', count: 5 },
        { emoji: '🎉', count: 3 },
      ],
      replies: 4,
    },
    {
      id: 2,
      user: { name: 'Mike Chen', avatar: 'MC', color: 'from-blue-500 to-cyan-500' },
      time: '9:45 AM',
      content: 'Looks great! I especially like the new color palette. The purple accents work really well with the overall theme.',
      reactions: [{ emoji: '💜', count: 2 }],
      replies: 0,
    },
    {
      id: 3,
      user: { name: 'Emily Davis', avatar: 'ED', color: 'from-green-500 to-teal-500' },
      time: '10:12 AM',
      content: `I've reviewed the components and here are my thoughts:

**Strengths:**
• Clean and consistent spacing
• Great typography hierarchy
• Smooth animations

**Suggestions:**
• Maybe add more hover states for interactive elements
• Consider adding dark mode variants

Overall, amazing work! 🚀`,
      reactions: [
        { emoji: '🙌', count: 4 },
        { emoji: '💡', count: 2 },
      ],
      replies: 7,
    },
    {
      id: 4,
      user: { name: 'Alex Johnson', avatar: 'AJ', color: 'from-orange-500 to-red-500' },
      time: '10:30 AM',
      content: 'Quick question - are we using CSS variables for the colors or Tailwind config?',
      reactions: [],
      replies: 2,
    },
    {
      id: 5,
      user: { name: 'Sarah Wilson', avatar: 'SW', color: 'from-pink-500 to-purple-500' },
      time: '10:35 AM',
      content: '@Alex Johnson Good question! We\'re using Tailwind config for consistency. All the custom colors are defined there. I\'ll share the documentation link shortly.',
      reactions: [{ emoji: '✅', count: 1 }],
      replies: 0,
    },
  ];

  const formatButtons = [
    { icon: Bold, label: 'Bold' },
    { icon: Italic, label: 'Italic' },
    { icon: Strikethrough, label: 'Strikethrough' },
    { icon: Link, label: 'Link' },
    { icon: ListOrdered, label: 'Ordered list' },
    { icon: List, label: 'Bullet list' },
    { icon: Code, label: 'Code' },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Channel Description Bar */}
      <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50">
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-600 transition-colors">
          <Hash className="w-4 h-4 text-purple-500" />
          <span className="font-medium">design</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-500">Design system discussions, component reviews, and UI/UX feedback</span>
          <ChevronDown className="w-4 h-4 ml-1" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
        {/* Date Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs font-medium text-gray-500 bg-white px-3 py-1 border border-gray-200 rounded-full">
            Today
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Messages */}
        {messages.map((msg) => (
          <div key={msg.id} className="group flex gap-3 hover:bg-gray-50/50 -mx-3 px-3 py-2 rounded-lg transition-colors">
            {/* Avatar */}
            <div className={cn(
              "w-9 h-9 rounded-lg bg-gradient-to-br flex-shrink-0 flex items-center justify-center text-white font-semibold text-sm",
              msg.user.color
            )}>
              {msg.user.avatar}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-gray-900 hover:underline cursor-pointer">
                  {msg.user.name}
                </span>
                <span className="text-xs text-gray-500">{msg.time}</span>

                {/* Hover Actions */}
                <div className="opacity-0 group-hover:opacity-100 ml-auto flex items-center gap-0.5 transition-opacity">
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Add reaction">
                    <Smile className="w-4 h-4 text-gray-500" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Reply in thread">
                    <MessageSquare className="w-4 h-4 text-gray-500" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Save">
                    <Bookmark className="w-4 h-4 text-gray-500" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="Share">
                    <Share className="w-4 h-4 text-gray-500" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-200 rounded transition-colors" title="More actions">
                    <MoreHorizontal className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Message Text */}
              <div className="mt-1 text-gray-800 text-[15px] leading-relaxed whitespace-pre-wrap">
                {msg.content}
              </div>

              {/* Reactions */}
              {msg.reactions.length > 0 && (
                <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                  {msg.reactions.map((reaction, idx) => (
                    <button
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-full text-sm transition-colors"
                    >
                      <span>{reaction.emoji}</span>
                      <span className="text-purple-700 font-medium">{reaction.count}</span>
                    </button>
                  ))}
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <Plus className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              )}

              {/* Thread Preview */}
              {msg.replies > 0 && (
                <button className="mt-2 flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 hover:underline font-medium">
                  <MessageSquare className="w-4 h-4" />
                  {msg.replies} {msg.replies === 1 ? 'reply' : 'replies'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Message Composer */}
      <div className="px-5 pb-5">
        <div className="border border-gray-300 rounded-xl overflow-hidden focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-all bg-white shadow-sm">
          {/* Formatting Toolbar */}
          {showFormatting && (
            <div className="flex items-center gap-0.5 px-3 py-2 border-b border-gray-200 bg-gray-50">
              {formatButtons.map((btn, idx) => (
                <button
                  key={idx}
                  className="p-1.5 hover:bg-gray-200 rounded transition-colors"
                  title={btn.label}
                >
                  <btn.icon className="w-4 h-4 text-gray-600" />
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="px-4 py-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message #design"
              rows={1}
              className="w-full resize-none text-[15px] text-gray-900 placeholder-gray-400 focus:outline-none bg-transparent"
              style={{ minHeight: '24px', maxHeight: '200px' }}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
            />
          </div>

          {/* Bottom Toolbar */}
          <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border-t border-gray-100">
            <div className="flex items-center gap-0.5">
              <button
                onClick={() => setShowFormatting(!showFormatting)}
                className={cn(
                  "p-2 rounded transition-colors",
                  showFormatting ? "bg-purple-100 text-purple-600" : "hover:bg-gray-200 text-gray-500"
                )}
                title="Formatting"
              >
                <Bold className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded transition-colors" title="Attach file">
                <Paperclip className="w-4 h-4 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded transition-colors" title="Add emoji">
                <Smile className="w-4 h-4 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded transition-colors" title="Mention someone">
                <AtSign className="w-4 h-4 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded transition-colors" title="Record video">
                <Video className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            <button
              disabled={!message.trim()}
              className={cn(
                "p-2 rounded-lg transition-all",
                message.trim()
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 shadow-sm"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              )}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Typing Indicator */}
        <p className="mt-2 text-xs text-gray-500 h-4">
          <span className="text-purple-600 font-medium">Mike Chen</span> is typing...
        </p>
      </div>
    </div>
  );
};

export default Docs;
