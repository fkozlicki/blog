import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import * as S from './Markdown.styled';

type MarkdownProps = {
  text: string;
};

const Markdown: FC<MarkdownProps> = ({ text }) => {
  return (
    <S.Markdown>
      <ReactMarkdown
        children={text}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                showLineNumbers
                children={String(children).replace(/\n$/, '')}
                style={atomDark}
                language={match[1]}
                wrapLongLines
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </S.Markdown>
  );
};

export default Markdown;
