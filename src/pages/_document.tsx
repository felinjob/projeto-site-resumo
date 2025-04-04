// src/pages/_document.tsx
import React from 'react';
import theme from '@/config/theme';
import { NextComponentType } from 'next';
import { AppInitialProps } from 'next/app';
import { EmotionCache } from '@emotion/cache';
import { createEmotionCache } from '@/utils';
import createEmotionServer from '@emotion/server/create-instance';
import { AppContextType, AppPropsType } from 'next/dist/shared/lib/utils';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

// Interface define 'emotionStylesTags' (com S)
interface DocumentProps extends DocumentInitialProps {
  emotionStylesTags: JSX.Element[];
}

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="msapplication-navbutton-color" content={theme.palette.primary.main} />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,700;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          {/* Aqui usa a prop com S */}
          {this.props.emotionStylesTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentProps> => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: NextComponentType<AppContextType, AppInitialProps, AppPropsType & { emotionCache?: EmotionCache }>) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);

  // Variável criada como 'emotionStyleTags' (sem S)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  // Retorna a propriedade 'emotionStylesTags' (com S) recebendo o valor da variável 'emotionStyleTags' (sem S)
  return {
    ...initialProps,
    emotionStylesTags: emotionStyleTags, // <-- GARANTIR QUE ESTÁ ASSIM: propriedade_com_s: variavel_sem_s
  };
};

export default MyDocument;