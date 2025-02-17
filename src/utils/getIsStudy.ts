import { STUDY_STEPS } from '@/constants';

const getIsStudy = (pathname: string) => {
  return STUDY_STEPS.map(({ slug }) => slug).includes(pathname);
}

export default getIsStudy;