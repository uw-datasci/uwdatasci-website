import { useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ThemeContext from '../../store/theme-context';

export default function SEO({ title, description, keywords }) {
  const themeContext = useContext(ThemeContext);

  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@uwaterloodsc" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@uwaterloodsc" />
      <meta
        name="twitter:image:src"
        content="https://www.uwdatascience.ca/img/favicons/twitter-image.png"
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta
        property="og:url"
        content={`https://www.uwdatascience.ca${router.pathname}`}
      />
      <meta
        property="og:image"
        content="https://www.uwdatascience.ca/img/favicons/og-image.png"
      />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="UWaterloo Data Science Club" />

      {/* App Icons */}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/img/favicons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/img/favicons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/img/favicons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/img/favicons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/img/favicons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/img/favicons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/img/favicons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/img/favicons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/favicons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/img/favicons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/img/favicons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/img/favicons/manifest.json" />
      <meta
        name="msapplication-TileColor"
        content={themeContext.theme === 'light' ? '#FFFFFF' : '#13111B'}
      />
      <meta
        name="msapplication-TileImage"
        content="/img/favicons/ms-icon-144x144.png"
      />
      <meta
        name="theme-color"
        content={themeContext.theme === 'light' ? '#FFFFFF' : '#13111B'}
      />
    </Head>
  );
}
