import { studySteps } from '@/constants';

const getIsStudy = (pathname: string) => {
  return studySteps.map(({ slug }) => slug).includes(pathname);
}

export default getIsStudy;