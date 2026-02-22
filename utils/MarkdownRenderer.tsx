
import React from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className }) => {
  const renderContent = (text: string) => {
    // Handle code blocks (multi-line)
    const codeBlockRegex = /```(\w+)?\n([\s\S]+?)\n```/g;
    let parts: (string | React.ReactNode)[] = []; // Fix: Changed JSX.Element to React.ReactNode
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      const beforeCode = text.substring(lastIndex, match.index);
      if (beforeCode) {
        parts.push(renderInlineMarkdown(beforeCode));
      }

      const lang = match[1] || 'plaintext';
      const code = match[2];
      parts.push(
        <pre key={`code-${match.index}`} className="my-4 p-4 rounded-lg bg-gray-900 overflow-x-auto text-sm">
          <code className={`language-${lang}`}>{code}</code>
        </pre>
      );
      lastIndex = codeBlockRegex.lastIndex;
    }

    const remainingText = text.substring(lastIndex);
    if (remainingText) {
      parts.push(renderInlineMarkdown(remainingText));
    }

    return parts;
  };

  const renderInlineMarkdown = (text: string) => {
    // Replace newlines with <br />
    let html = text.replace(/\n/g, '<br />');

    // Basic inline code (backticks)
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-700 px-1 py-0.5 rounded text-sm text-red-100">$1</code>');

    // Bold (**text** or __text__)
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');

    // Italic (*text* or _text_)
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.*?)_/g, '<em>$1</em>');
    
    // Lists (simple conversion for * or - at start of line)
    html = html.replace(/<br \/>\*\s(.*?)/g, '<li>$1</li>');
    html = html.replace(/<br \/>-\s(.*?)/g, '<li>$1</li>');
    if (html.includes('<li>')) {
      html = `<ul>${html}</ul>`;
      html = html.replace(/<\/li><ul>/g, '</li><li>'); // Fixes nested list rendering issues with simple br replacement
    }


    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <div className={`prose prose-invert max-w-none text-gray-300 ${className}`}>
      {renderContent(content)}
    </div>
  );
};

export default MarkdownRenderer;