import { Helmet } from "react-helmet-async";
import {
  SITE_URL,
  SITE_NAME,
} from "../../config/site";

const SEO = ({
  title,
  description,
  keywords = "",
  image = "",
  url = "",
  type = "website",
}) => {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : SITE_NAME;

  const fullUrl = `${SITE_URL}${url}`;

  const fullImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : `${SITE_URL}/images/og-image.jpg`;

  return (
    <Helmet>
      {/* =========================
          BASIC SEO
      ========================== */}

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

      <meta
        name="robots"
        content="index, follow"
      />

      <meta
        name="author"
        content="Vastu Divine"
      />

      <link
        rel="canonical"
        href={fullUrl}
      />

      {/* =========================
          OPEN GRAPH
      ========================== */}

      <meta property="og:type" content={type} />

      <meta
        property="og:site_name"
        content={SITE_NAME}
      />

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
        property="og:image:secure_url"
        content={fullImage}
      />

      <meta
        property="og:image:width"
        content="1200"
      />

      <meta
        property="og:image:height"
        content="630"
      />

      <meta
        property="og:image:alt"
        content={title || SITE_NAME}
      />

      <meta
        property="og:locale"
        content="en_IN"
      />

      {/* =========================
          TWITTER
      ========================== */}

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

      <meta
        name="twitter:image:alt"
        content={title || SITE_NAME}
      />

      {/* =========================
          EXTRA
      ========================== */}

      <meta
        name="theme-color"
        content="#C08457"
      />
    </Helmet>
  );
};

export default SEO;