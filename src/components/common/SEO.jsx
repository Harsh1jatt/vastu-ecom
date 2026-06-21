import { Helmet } from 'react-helmet-async';
import {
  SITE_URL,
  SITE_NAME
} from './../../config/site';

const SEO = ({
  title,
  description,
  keywords = '',
  image = '',
  url = '',
  type = 'website'
}) => {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : SITE_NAME;

  const fullUrl = `${SITE_URL}${url}`;

  const fullImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image}`
    : `${SITE_URL}/images/og-image.jpg`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}

      <link
        rel="canonical"
        href={fullUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={fullUrl}
      />

      <meta
        property="og:image"
        content={fullImage}
      />

      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:site_name"
        content={SITE_NAME}
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={fullImage}
      />

      {/* Robots */}
      <meta
        name="robots"
        content="index, follow"
      />
      <meta name="author" content="Vastu Divine"/>
    </Helmet>
  );
};

export default SEO;