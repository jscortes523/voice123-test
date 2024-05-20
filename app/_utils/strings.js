const highlightKeyword = (keyword) => {
  return `<span class='bg-voice123-200 rounded-md'>${keyword}</span>`;
};
export const getFirstParagraphFirstWordMatches = 
  (text, keyword) => {
  if (!text || text === '') return '';
  const paragraphs = text.split('\n');
  const regex = new RegExp(keyword, 'gi');
  for (let i = 0; i < paragraphs.length; i++) {
    if(paragraphs[i].toLowerCase().includes(keyword.toLowerCase())) {
      const withHighlights = paragraphs[i].replace(
        regex, highlightKeyword(keyword)
      );
      return withHighlights;
    }
  }
};
