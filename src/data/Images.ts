import Message from '../../public/images/company/message.jpg';
import Outline from '../../public/images/company/outline.jpg';
import Company from '../../public/images/company/top.jpg';
import Logo from '../../public/images/logo.png';
import WhiteLogo from '../../public/images/logo_white.png';
import Facebook from '../../public/images/sns/facebook.png';
import Note from '../../public/images/sns/note.png';
import Twitter from '../../public/images/sns/twitter.png';
import { ImageDetail, ImageSns } from 'types';

// Home Top Page
const NavImages: ImageDetail[] = [
  {
    src: Logo.src,
    alt: 'onewalk logo',
    className: '',
  },
];

const whiteLogo: ImageDetail[] = [
  {
    src: WhiteLogo.src,
    alt: 'onewalk logo',
    className: '',
  },
];

const snsImages: ImageSns[] = [
  {
    src: Note.src,
    alt: 'note',
    path: '/note',
    className: '',
  },
  {
    src: Twitter.src,
    alt: 'twitter',
    path: '/twitter',
    className: '',
  },
  {
    src: Facebook.src,
    alt: 'facebook',
    path: '/facebook',
    className: '',
  },
];

// Company Top Page
const CompanyTop: ImageDetail = {
  src: Company.src,
  alt: 'Company_Top',
  className: 'rounded-tl-144',
};

// Message Top Page
export const MessageTop: ImageDetail = {
  src: Message.src,
  alt: 'Message_Top',
  className: 'rounded-tr-144',
};

// Outline Top Page
export const OutlineTop: ImageDetail = {
  src: Outline.src,
  alt: 'Outline_Top',
  className: 'rounded-tr-144',
};

// export
const ImageObject = {
  whiteLogo,
  NavImages,
  snsImages,
  CompanyTop,
};

export default ImageObject;
