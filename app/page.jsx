import Header from './_components/Header';
import SearchResults from './_components/SearchResults';
import SamplePagination from './_components/SamplePagination';

import { fetchData } from './_lib/fetchData';


export default async function Home({ searchParams }) {
  const keywords = searchParams.keywords || '';
  const page = parseInt(searchParams.page || '1');
  const data = await fetchData({ keywords, page });
  return (
    <>
      <div className='flex flex-col bg-lavender-0'>
        <div>
          <Header keywords={keywords} />
        </div>
        <div className='px-16 pt-16 pb-6'>
          <SearchResults results={data} keywords={keywords} />
        </div>
        <div className="flext px-16 pb-4">
          <SamplePagination
            {...data.paginationData}
            keywords={keywords}
            page={page}
          />
        </div>
      </div>
    </>
  );
};
