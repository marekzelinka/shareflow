import {
  useTheme,
  Box,
  IconButton,
  Icon,
  useClipboard,
} from "@chakra-ui/react";
import { ClipboardIcon, ClipboardCheckIcon } from "@heroicons/react/solid";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import ruby from "react-syntax-highlighter/dist/cjs/languages/prism/ruby";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import java from "react-syntax-highlighter/dist/cjs/languages/prism/java";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/vs";

SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("ruby", ruby);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("css", css);

interface CopyButtonProps {
  text: string;
}

const CopyButton = ({ text }: CopyButtonProps) => {
  const { hasCopied, onCopy } = useClipboard(text);

  return (
    <IconButton
      colorScheme="blackAlpha"
      variant="ghost"
      size="xs"
      rounded="md"
      icon={
        <Icon
          as={hasCopied ? ClipboardCheckIcon : ClipboardIcon}
          width={4}
          height={4}
          flexShrink={0}
          aria-hidden="true"
        />
      }
      aria-label={hasCopied ? "Copied" : "Copy"}
      onClick={onCopy}
    />
  );
};

export const CodeBlock = ({
  language,
  codeString,
}: {
  language: string;
  codeString: string;
}) => {
  const theme = useTheme();

  return (
    <Box position="relative">
      <SyntaxHighlighter
        language={language}
        style={style}
        customStyle={{
          marginTop: theme.space[0],
          marginBottom: theme.space[0],
          borderRadius: theme.radii.md,
          padding: `${theme.space[3]} ${theme.space[4]}`,
        }}
      >
        {codeString}
      </SyntaxHighlighter>
      <Box position="absolute" top={2} right={4}>
        <CopyButton text={codeString} />
      </Box>
    </Box>
  );
};
