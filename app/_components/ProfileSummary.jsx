import Typography from '@mui/material/Typography';
import { getFirstParagraphFirstWordMatches } from '../_utils/strings';

const ProfileSummary = ({ additionalDetails, summary, keywords }) => {
    const firstSummaryParagraph = getFirstParagraphFirstWordMatches(summary, keywords);
    const firstAdditionalDetailsParagraph = getFirstParagraphFirstWordMatches(summary, keywords);
    return (
      <Typography
          className="text-gray-600 sm:text-ellipsis	 sm:text-wrap"
          dangerouslySetInnerHTML={{ __html: firstSummaryParagraph || firstAdditionalDetailsParagraph }}
      />
    );
};

export default ProfileSummary;