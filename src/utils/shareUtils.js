export const shareProduct = async (product) => {
  const url = `${window.location.origin}/product/${product.slug}`;
console.log()
  const data = {
    title: product.title,
    text: product.shortDescription,
    url,
  };

  if (navigator.share) {
    try {
      await navigator.share(data);
    } catch (err) {
      // user cancelled
    }
  } else {
    await navigator.clipboard.writeText(url);
    return {
      copied: true,
      message: "Product link copied successfully!",
    };
  }
};