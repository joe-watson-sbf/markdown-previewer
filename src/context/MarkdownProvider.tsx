import DOMPurify from 'dompurify';
import React from 'react';
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs';

type ThemeType = typeof themes.a11yDark

type MarkDownContextType = {
  content: string
  handleOnChangeContent: (content: string) => void
  editorFontSize: number
  setEditorFontSize: (fontSize: number) => void
  themeList: string[]
  theme: ThemeType
  defaultTheme: string
  handleChangeTheme: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const MarkDownContext = React.createContext<MarkDownContextType | null>(null);

type MarkDownProviderProps = {
  children: React.ReactNode
}


export const MarkDownProvider = ({ children }: MarkDownProviderProps) => {

  const [content, setContent] = React.useState<string>('# Hello, from Markdown!');
  const [editorFontSize, setEditorFontSize] = React.useState<number>(16);
  const [theme, setTheme] = React.useState<ThemeType>(themes.a11yLight);
  const [defaultTheme, setDefaultTheme] = React.useState<string>('a11yLight');


  /**
   * This function is used to sanitize the content before rendering it as HTML
   * @param content - the content to be sanitized
   * @returns void
   */
  const handleOnChangeContent = (newContent: string) => {
    const cleanHtml = DOMPurify.sanitize(newContent, { USE_PROFILES: { html: true } });
    setContent(cleanHtml);
  }


  /**
   * This function is used to change the theme of the code preview
   * @param e - the event object
   * @returns void
   */
  const handleChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDefaultTheme(e.target.value as string);
    const value = e.target.value as keyof typeof themes;
    const theme = themes[value]
    setTheme(theme);
  }

  const value = React.useMemo(() => ({
    content,
    handleOnChangeContent,
    editorFontSize,
    setEditorFontSize,
    themeList: Object.keys(themes),
    theme,
    defaultTheme,
    handleChangeTheme
  }), [content,editorFontSize, theme, defaultTheme]);

  return (
    <MarkDownContext.Provider value={value}>
      {children}
    </MarkDownContext.Provider>
  );
};


// Best Practice: create this function in a separate file and import it where needed
// eslint-disable-next-line react-refresh/only-export-components
export const useMarkDown = () => {
  const context = React.useContext(MarkDownContext);
  if (!context) {
    throw new Error('useMarkDown must be used within a MarkDownProvider');
  }
  return context;
}