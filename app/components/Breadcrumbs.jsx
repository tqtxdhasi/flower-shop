import Script from "next/script";

const Breadcrumbs = ({ breadcrumbs }) => {
  // Create the JSON-LD schema for structured data (SEO)
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };

  return (
    <>
      {/* SEO Structured Data - JSON-LD */}
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbList),
        }}
      />

      {/* Visible Breadcrumbs for User Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="bg-rose-50 p-4 rounded-lg shadow-sm mb-6"
      >
        <ol className="flex space-x-2 text-rose-900">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.name} className="flex items-center">
              {/* Link for all items except the last one */}
              {index < breadcrumbs.length - 1 ? (
                <a
                  href={breadcrumb.url}
                  className="text-rose-600 hover:text-rose-800"
                >
                  {breadcrumb.name}
                </a>
              ) : (
                // Last breadcrumb, no link
                <span>{breadcrumb.name}</span>
              )}
              {/* Separator ( › ) */}
              {index < breadcrumbs.length - 1 && (
                <span className="mx-2 text-rose-600">›</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
