'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import dynamic from 'next/dynamic';
import FormattedResponse from '@/src/library/formatted-response';



function detectLanguage(code: string): string {
  const indicators: Record<string, RegExp> = {
    javascript: /\b(function|const|let|React|console\.log|=>)\b/,
    python: /\b(def|import|print|class)\b/,
    rust: /\b(fn|let|struct|impl)\b/,
    html: /<!DOCTYPE html>/i,
    css: /\b(color|background|font-size)\b/,
  };

  for (const [language, regex] of Object.entries(indicators)) {
    if (regex.test(code)) return language;
  }
  return 'plaintext';
}

function extractCodeBlocksWithText(text: string) {
  const tripleBacktickRegex = /```([\s\S]*?)```/g;
  const blocks: Array<{ text?: string; code?: string }> = [];
  let lastIndex = 0;
  let match;

  while ((match = tripleBacktickRegex.exec(text)) !== null) {
    const [fullMatch, code] = match;
    if (lastIndex < match.index) {
      const textBefore = text.slice(lastIndex, match.index).trim();
      if (textBefore) blocks.push({ text: textBefore });
    }
    if (code) blocks.push({ code: code.trim() });
    lastIndex = match.index + fullMatch.length;
  }

  if (lastIndex < text.length) {
    const remainingText = text.slice(lastIndex).trim();
    if (remainingText) blocks.push({ text: remainingText });
  }
  return blocks;
}

const AICodeResponse: React.FC<{ aiResponse: string }> = ({ aiResponse }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [processedBlocks, setProcessedBlocks] = useState<
    Array<{ content: { text?: string; code?: string }; language: string }>
  >([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!aiResponse) return;

    const extractedBlocks = extractCodeBlocksWithText(aiResponse).map((content) => ({
      content,
      language: detectLanguage(content.code || ''),
    }));

    setProcessedBlocks(extractedBlocks);
  }, [aiResponse]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!containerRef.current || processedBlocks.length === 0) return;

    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const renderBlocksSequentially = async () => {
      if (!containerRef.current) return;
      containerRef.current.innerHTML = '';

      for (const block of processedBlocks) {
        if (!containerRef.current) return;

        if (block.content.text) {
          const textContainer = document.createElement('div');
          textContainer.style.marginBottom = '20px';
          containerRef.current.appendChild(textContainer);

          const root = createRoot(textContainer);
          root.render(<FormattedResponse text={block.content.text} role="assistant" />);
          await delay(500);
          continue;
        }

        if (block.content.code) {
          const editorWrapper = document.createElement('div');
          editorWrapper.style.position = 'relative';
          editorWrapper.style.marginBottom = '30px';
          containerRef.current.appendChild(editorWrapper);

          // Create a "Copy to Clipboard" button
          const copyButton = document.createElement('button');
          copyButton.textContent = 'Copy to Clipboard';
          copyButton.style.position = 'absolute';
          copyButton.style.top = '10px';
          copyButton.style.right = '10px';
          copyButton.style.zIndex = '10';
          copyButton.style.padding = '5px 10px';
          copyButton.style.backgroundColor = '#007acc';
          copyButton.style.color = 'white';
          copyButton.style.border = 'none';
          copyButton.style.borderRadius = '4px';
          copyButton.style.cursor = 'pointer';
          editorWrapper.appendChild(copyButton);

          const editorContainer = document.createElement('div');
          editorContainer.style.width = '100%';
          editorContainer.style.height = '300px';
          editorWrapper.appendChild(editorContainer);

          // Monaco editor setup
          let editorInstance: any;

          // Initialize Monaco only on the client-side
          if (typeof window !== 'undefined') {
            import('monaco-editor').then((monaco) => {
              editorInstance = monaco.editor.create(editorContainer, {
                value: '',
                language: block.language,
                theme: 'vs-dark',
                readOnly: true,
                wordWrap: 'on',
                minimap: { enabled: false },
                scrollbar: { vertical: 'hidden', horizontal: 'hidden' },
              });
            });
          }

          // Add functionality to copy the editor content to the clipboard
          copyButton.addEventListener('click', () => {
            const editorContent = editorInstance.getValue();
            navigator.clipboard.writeText(editorContent).then(() => {
              alert('Code copied to clipboard!');
            });
          });

          // Add words to Monaco editor one by one (simulating typing effect)
          const words = block.content.code.split(' ');
          let currentText = '';
          for (const word of words) {
            currentText += word + ' ';
            if (editorInstance) {
              editorInstance.setValue(currentText);
            }
            await delay(100);
          }

          await delay(500);
        }
      }
    };

    renderBlocksSequentially();
  }, [processedBlocks]);

  return (
    <div className="px-4 md:px-10 w-full flex justify-center">
      <div ref={containerRef} style={{ width: '100%' }} />
    </div>
  );
};

export default AICodeResponse;
