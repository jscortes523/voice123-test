export const fetchData = async ({ keywords, page }) => {
  const url = new URL(process.env.NEXT_PUBLIC_API_BASE_URL);
  url.searchParams.append('service', 'voice_over');
  url.searchParams.append('keywords', keywords);
  url.searchParams.append('page', page);
  const response = await fetch(url);
  const paginationData = {
    totalPages: response.headers.get('x-list-total-pages'),
    totalRows: response.headers.get('x-list-total-rows'),
  };
  const data = await response.json();
  return { ...data, paginationData };
};
