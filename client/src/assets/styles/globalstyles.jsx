import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  // Inter fonts
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  :root {
  /* font family */
  --app-global-fontFamily-inter:                          'Inter', sans-serif;
  --app-global-fontFamily-arial:                           Arial, Helvetica, sans-serif;

  /* font weight */
  --app-global-font-extraLight:                     200;
  --app-global-font-light:                          300;
  --app-global-font-regular:                        400;
  --app-global-font-medium:                         500;
  --app-global-font-semibold:                       600;
  --app-global-font-bold:                           700;
  --app-global-font-extrabold:                      800;
  --app-global-font-black:                          900;
 

  /* font size */
  --app-global-text-x:                                     0.625rem; /* 10px */
  --app-global-text-xxs:                                   0.6875rem; /* 11px */
  --app-global-text-xs:                                    0.75rem; /* 12px */
  --app-global-text-sm:                                    0.875rem; /* 14px */
  --app-global-text-base:                                  1rem; /* 16px */
  --app-global-text-lg:                                    1.125rem; /* 18px */
  --app-global-text-xl:                                    1.25rem; /* 20px */
  --app-global-text-1xl:                                   1.375rem; /* 22px */
  --app-global-text-2xl:                                   1.5rem; /* 24px */
  --app-global-text-3xl:                                   1.625rem; /* 26px */
  --app-global-text-4xl:                                   1.75rem; /* 28px */
  --app-global-text-5xl:                                   1.875rem; /* 30px */
  --app-global-text-6xl:                                   2rem; /* 32px */
  --app-global-text-7xl:                                   2.125rem; /* 34px */
  --app-global-text-8xl:                                   2.25rem; /* 36px */
  --app-global-text-9xl:                                   2.375rem; /* 38px */
  --app-global-text-10xl:                                  2.5rem; /* 40px */
  --app-global-text-11xl:                                  2.625rem; /* 42px */
  --app-global-text-12xl:                                  2.75rem; /* 44px */
  --app-global-text-13xl:                                  2.875rem; /* 46px */
  --app-global-text-14xl:                                  3rem; /* 48px */
  --app-global-text-15xl:                                  3.125rem; /* 50px */

  /* color */
  --app-global-color-primary:                             003 046 105;
  --app-global-color-secondary:                           32 53 104;
  --app-global-color-white:                               255 255 255;
  --app-global-color-black:                               0 0 0;  
  --app-global-color-grey:                                115 115 115;
 

  // Neutral set
  --app-global-color-neutral-50:                          250 250 250;
  --app-global-color-neutral-100:                         245 245 245;
  --app-global-color-neutral-200:                         229 229 229;
  --app-global-color-neutral-300:                         212 212 212;
  --app-global-color-neutral-400:                         163 163 163;
  --app-global-color-neutral-500:                         115 115 115;
  --app-global-color-neutral-600:                         82 82 82;
  --app-global-color-neutral-700:                         64 64 64;
  --app-global-color-neutral-800:                         38 38 38;
  --app-global-color-neutral-900:                         23 23 23;
  
  //accent
  --app-global-color-accent-green-lighter:                59 170 51;
  --app-global-color-accent-green-darker:                 70 128 53;
  --app-global-color-accent-green-lighter-shade-1:        249 255 249;
  
  --app-global-color-accent-orange-lighter:                232 113 1;
  --app-global-color-accent-orange-darker:                 199 97 1;
  --app-global-color-accent-grey-lighter:                  242 242 242;

  --app-global-color-highlight-green:                      20 184 166;
  --app-global-color-highlight-green-lighter:              235 255 253;

  // backdrop color
  
  --app-global-backdrop-color:                             36 36 53;
 
  //button variables
  --app-global-color-border-shade-1:                         209 213 219;
  // primary v1
  --app-global-color-primaryV1-default:                      var(--app-global-color-accent-green-lighter);
  --app-global-color-primaryV1-hover:                        var(--app-global-color-accent-green-darker);
  --app-global-color-primaryV1-disabled:                     var(--app-global-color-white);
  --app-global-color-primaryV1-text-default:                 var(--app-global-color-white);
  --app-global-color-primaryV1-text-disabled:                28 25 23;

  // primary v2
  --app-global-color-primaryV2-default:                      var(--app-global-color-accent-orange-lighter);
  --app-global-color-primaryV2-hover:                        var(--app-global-color-accent-orange-darker);
  --app-global-color-primaryV2-disabled:                     var(--app-global-color-white);
  --app-global-color-primaryV2-text-default:                 var(--app-global-color-white);
  --app-global-color-primaryV2-text-disabled:                28 25 23;

  // primary v3
  --app-global-color-primaryV3-default:                      var(--app-global-color-black);
  --app-global-border-color-hover:                           var(--app-global-color-black);
  

  // secondary v1
  --app-global-color-secondaryV1-default:                      var(--app-global-color-white); 
  --app-global-color-secondaryV1-disabled:                     var(--app-global-color-white);
  --app-global-color-secondaryV1-text-default:                 var(--app-global-color-accent-green-lighter);
  --app-global-color-secondaryV1-text-disabled:                28 25 23;

  //other shades
  --app-global-color-green-shade-1:                            227 237 218;
  --app-global-color-green-shade-2:                            113 187 45;
  --app-global-color-green-shade-3:                            60 170 52;
  --app-global-color-pink-shade-1:                             255 80 96;
  --app-global-color-grey-shade-1:                             20 24 31;
  --app-global-color-grey-shade-2:                             217 217 217;
  --app-global-color-grey-shade-3:                             128 139 145;
  --app-global-color-grey-shade-4:                             93 93 93;
  --app-global-color-grey-shade-5:                             52 52 66;
  --app-global-color-purple-shade-1:                           160 0 146;
  --app-global-color-purple-shade-2:                           108 0 99;
  --app-global-color-blue-shade-1:                             0 109 194;
  --app-global-color-blue-shade-2:                             1 87 154;
  --app-global-color-brown-shade-1:                            44 36 34;
  --app-global-color-brown-shade-2:                            7 5 5;
  --app-global-color-error:                                    255 0 0;
  --app-global-color-body-light-1:                             241 241 241;
  --app-global-color-transparent-50:                           64, 64, 64, 0.55;

  // border colors
  --app-input-border-color:                                    229, 229, 229, 1;
  --app-input-border-color-shade-1:                            231, 228, 220;

  --app-global-color-brown-shade-3:                            43 43 57;
  --app-global-color-white-shade-1:                            246 246 246;
  --app-global-color-white-shade-2:                            231 231 231;


  /* spacing */
  --app-spacing-01:                                       0.063rem; /* 1px */
  --app-spacing-02:                                       0.125rem; /* 2px */
  --app-spacing-03:                                       0.188rem; /* 3px */
  --app-spacing-04:                                       0.25rem;  /* 4px */
  --app-spacing-05:                                       0.313rem; /* 5px */
  --app-spacing-06:                                       0.375rem; /* 6px */
  --app-spacing-07:                                       0.438rem; /* 7px */
  --app-spacing-08:                                       0.5rem;   /* 8px */
  --app-spacing-09:                                       0.563rem;  /* 9px */
  --app-spacing-10:                                       0.625rem;  /* 10px */
  --app-spacing-11:                                       0.6875rem; /* 11px */
  --app-spacing-12:                                       0.75rem; /* 12px */
  --app-spacing-13:                                       0.8125rem; /* 13px */
  --app-spacing-14:                                       0.875rem; /* 14px */
  --app-spacing-15:                                       0.9375rem; /* 15px */
  --app-spacing-16:                                      1rem; /* 16px */
  --app-spacing-17:                                      1.0625rem; /* 17px */
  --app-spacing-18:                                      1.125rem; /* 18px */
  --app-spacing-20:                                      1.25rem; /* 20px */
  --app-spacing-22:                                      1.375rem; /* 22px */
  --app-spacing-24:                                      1.5rem; /* 24px */
  --app-spacing-25:                                      1.5625rem; /* 25px */
  --app-spacing-26:                                      1.625rem; /* 26px */
  --app-spacing-28:                                      1.75rem; /* 28px */
  --app-spacing-30:                                      1.875rem; /* 30px */
  --app-spacing-32:                                      2rem; /* 32px */
  --app-spacing-34:                                      2.125rem; /* 34px */
  --app-spacing-36:                                      2.25rem; /* 36px */
  --app-spacing-38:                                      2.375rem; /* 38px */
  --app-spacing-40:                                     2.5rem; /* 40px */
  --app-spacing-44:                                     2.75rem; /* 44px */
  --app-spacing-47:                                     2.9375rem; /* 47px */
  --app-spacing-48:                                     3rem; /* 48px */
  --app-spacing-56:                                     3.5rem; /* 56px */
  --app-spacing-64:                                     4rem; /* 64px */
  --app-spacing-70:                                     4.375rem; /* 70px */
  --app-spacing-72:                                     4.5rem; /* 72px */
  --app-spacing-80:                                     5rem; /* 80px */


    /* dimensions */
    --app-dim-01:                                       0.063rem; /* 1px */
    --app-dim-02:                                       0.125rem; /* 2px */
    --app-dim-03:                                       0.188rem; /* 3px */
    --app-dim-04:                                       0.25rem;  /* 4px */
    --app-dim-05:                                       0.313rem; /* 5px */
    --app-dim-06:                                       0.375rem; /* 6px */
    --app-dim-07:                                       0.438rem; /* 7px */
    --app-dim-08:                                       0.5rem;   /* 8px */
    --app-dim-09:                                       0.563rem;  /* 9px */
    --app-dim-10:                                       0.625rem;  /* 10px */
    --app-dim-11:                                       0.6875rem; /* 11px */
    --app-dim-12:                                       0.75rem; /* 12px */
    --app-dim-13:                                       0.8125rem; /* 13px */
    --app-dim-14:                                       0.875rem; /* 14px */
    --app-dim-15:                                       0.9375rem; /* 15px */
    --app-dim-16:                                      1rem; /* 16px */
    --app-dim-17:                                      1.0625rem; /* 17px */
    --app-dim-18:                                      1.125rem; /* 18px */
    --app-dim-20:                                      1.25rem; /* 20px */

    --venia-global-maxWidth: 79rem;
    --venia-global-header-minHeight: 5rem;

    /* breakpoints */
    --app-xs:   0;
    --app-sm:   36rem; //576px
    --app-md:   48rem; //768px
    --app-lg:   62rem; //992px
    --app-xl:   75rem; //1,200px
    --app-xxl:   83.5rem; //1,336px
    --app-xxxl:  87.5rem; //1400px

    // checkbox

    --app-checkbox-size: 1.25rem; /* 20px */

    //Transition speeds
    --app-global-transition-speed-3: 0.3s;
    
  }



  
  html ,body{
    font-family: var(--app-global-fontFamily-inter);
    color:rgb(var(--app-global-color-black));
  }

  //typography

  h1,h2,h3,h4,h5,h6,p,div.ol,ul{
    margin:0;
    padding:0;
  }

  h1{
    font-size:var(--app-global-text-11xl);
    line-height:1.2;
    font-weight:var(--app-global-font-black);
  }

  h2{
    font-size:var(--app-global-text-10xl);
    line-height:1.2;
    font-weight:var(--app-global-font-bold);
  }

  h3{
    font-size:var(--app-global-text-3xl);
    line-height:1.2;
    font-weight:var(--app-global-font-extrabold);
  }

  h4{
    font-size:var(--app-global-text-2xl);
    line-height:1.2;
    font-weight:var(--app-global-font-extrabold);
  } 

  h5{
    font-size:var(--app-global-text-xl);
    line-height:1.2;
    font-weight:var(--app-global-font-extrabold);
  } 

  h6{
    font-size:var(--app-global-text-lg);
    line-height:1.2;
    font-weight:var(--app-global-font-extrabold);
  } 
  .para-title{
    font-size:var(--app-global-text-lg);
    line-height:1.2;
    font-weight:var(--app-global-font-semibold);
    color:rgb(var(--app-global-color-neutral-900));
  }

  .p-title-bold{
    font-size:var(--app-global-text-lg);
    line-height:1.4;
    font-weight:var(--app-global-font-bold);
    color:rgb(var(--app-global-color-neutral-900));
  }

  .body-p-regular-base{
    font-size:var(--app-global-text-base);
    line-height:1.625;
    font-weight:var(--app-global-font-regular);
    color:rgb(var(--app-global-color-neutral-900));
  }

  .body-p-regular-sm{
    font-size:var(--app-global-text-sm);
    line-height:1.571;
    font-weight:var(--app-global-font-regular);
    color:rgb(var(--app-global-color-neutral-900));
  }

  //typography

  //buttons

  .link-btn{
    padding: 0;
    text-decoration: underline;
    font-weight: var(--app-global-font-regular);
    &:hover{
      text-decoration: underline;
    }
    &.bold{
      font-weight: var(--app-global-font-semibold);
      text-decoration:none;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  .clear-btn{
    padding: 0;
    font-weight: var(--app-global-font-medium);
    color:rgb(var(--app-global-color-accent-orange-lighter));
    &:hover{
      color:rgb(var(--app-global-color-accent-orange-darker));
    }
  }
  
  .btn{ 
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: var(--app-dim-06);
    padding: var(--app-spacing-12) 1.59375rem;
    border:1px solid;
    font-weight:var(--app-global-font-semibold);
  }
  .btn.sm{
    font-size:var(--app-global-text-sm);
    padding: 0.875rem 0.875rem;
    @media (max-width:83.5rem){
      padding: 0.675rem 0.675rem;
    }
  }
  .btn.sm.full{
    width:100%;
  }
  .btn.w-100{
    width:100%;
    font-size:var(--app-global-text-xl);
  }
  .btn.btn-icon-only{
    border:0;
    padding: 2px;
  }
  .btn.btn-icon-only.io-md{ 
    border-radius:50%;
    width:2.25rem;
    height:2.25rem;
  }
  .btn.btn-icon-only.btn-plain{ 
    &:hover{
      background-color: rgb(var(--app-global-color-white));
    }
  }
  // button with icon
  .btn.is-icon{
    display:flex;
    align-items:center;
    gap:11.75px;
    

  }
  //primary v1 button
  .btn.button-primary{
    background-color:rgb(var(--app-global-color-primaryV1-default));
    color:rgb(var(--app-global-color-primaryV1-text-default));
    border-color:rgb(var(--app-global-color-primaryV1-default));
  }

  .btn.button-primary:disabled{
    background-color:rgb(var(--app-global-color-primaryV1-disabled));
    color:rgb(var(--app-global-color-primaryV1-text-disabled));
    border-color:rgb(var(--app-global-color-border-shade-1));
  }
  .btn.button-primary:hover{
    background-color:rgb(var(--app-global-color-primaryV1-hover)); 
    color:rgb(var(--app-global-color-primaryV1-text-default));
    border-color:rgb(var(--app-global-color-primaryV1-hover)); 
  }

  :not(.btn-check)+.btn.button-primary:active{
    background-color:rgb(var(--app-global-color-primaryV1-hover)); 
  }
  //primary v2 button 
  .btn.button-primary-v2{
    background-color:rgb(var(--app-global-color-primaryV2-default));
    color:rgb(var(--app-global-color-primaryV2-text-default));
    border-color:rgb(var(--app-global-color-primaryV2-default));
  }

  .btn.button-primary-v2:disabled{
    background-color:rgb(var(--app-global-color-primaryV2-disabled));
    color:rgb(var(--app-global-color-primaryV2-text-disabled));
    border-color:rgb(var(--app-global-color-border-shade-1));
  }
  .btn.button-primary-v2:hover{
    background-color:rgb(var(--app-global-color-primaryV2-hover)); 
    color:rgb(var(--app-global-color-primaryV2-text-default));
    background-color:rgb(var(--app-global-color-primaryV2-hover)); 
  }

  :not(.btn-check)+.btn.button-primary-v2:active{
    background-color:rgb(var(--app-global-color-primaryV2-hover)); 
  }

  //primary v3 button 
  .btn.button-primary-v3{
    background: rgba(var(--app-global-color-white));
    color:rgb(var(--app-global-color-primaryV3-default));
    border-color:rgb(var(--app-global-color-border-shade-1));
    font-weight:var(--app-global-font-medium);
  }
  .btn.button-primary-v3:hover{
    background: rgba(var(--app-global-color-white));
    color:rgb(var(--app-global-color-black));
    border-color:rgb(var(--app-global-border-color-hover));
  }

  //secondary  button 
  .btn.button-secondary{
    background-color:rgb(var(--app-global-color-secondaryV1-default));
    color:rgb(var(--app-global-color-primaryV1-default));
    border-color:var(--app-global-color-accent-green-lighter);
  }

  .btn.button-secondary:disabled{
    background-color:rgb(var(--app-global-color-secondaryV1-disabled));
    color:rgb(var(--app-global-color-secondaryV1-text-disabled));
    border-color:rgb(var(--app-global-color-border-shade-1));
  }
  .btn.button-secondary:hover{
    background-color:rgb(var(--app-global-color-secondaryV1-default));
    border-color:rgb(var(--app-global-color-border-shade-1)); 
    color:rgb(var(--app-global-color-primaryV1-default)); 
  }
  
  :not(.btn-check)+.btn.button-secondary:active{
    background-color:rgb(var(--app-global-color-secondaryV1-default)); 
  }
  //plain  button 
  .btn.button-plain{
    background-color:rgb(var(--app-global-color-white));
    color:rgb(var(--app-global-color-neutral-900));
    border-color:transparent;
    box-shadow:none;
  }

  .btn.button-plain:disabled{
    background-color:rgb(var(--app-global-color-secondaryV1-disabled));
    color:rgb(var(--app-global-color-secondaryV1-text-disabled));
    border-color:rgb(var(--app-global-color-border-shade-1));
  }
  .btn.button-plain:hover{
    background-color:rgb(var(--app-global-color-secondaryV1-default));
    border-color:rgb(var(--app-global-color-border-shade-1));  
  }
  //Teritary Button
  .btn.button-teritary{
    background-color:rgb(var(--app-global-color-white));
    color:rgb(var(--app-global-color-neutral-900));
    border-color:rgb(var(--app-global-color-neutral-900));
    box-shadow:none;
  }
  .btn.button-teritary:disabled{
    background-color:rgb(var(--app-global-color-secondaryV1-disabled));
    color:rgb(var(--app-global-color-secondaryV1-text-disabled));
    border-color:rgb(var(--app-global-color-neutral-900));
  }
  .btn.button-teritary:hover{
    background-color:rgb(var(--app-global-color-secondaryV1-default));
    border-color:rgb(var(--app-global-color-border-shade-1));
  }

  //green link  button 
  .btn.button-link-green{
    background-color:rgb(var(--app-global-color-white));
    color:rgb(var(--app-global-color-accent-green-lighter));
    border-color:transparent;
    box-shadow:none;
    text-decoration:underline;
  }

  .btn.button-link-green:disabled{
    color:rgb(var(--app-global-color-secondaryV1-text-disabled));
    border-color:rgb(var(--app-global-color-border-shade-1));
  }
  .btn.button-link-green:hover{
    color:rgb(var(--app-global-color-accent-green-lighter));
    border-color:rgb(var(--app-global-color-border-shade-1));  
  }

 
  div{
    position:relative;
  } 
  button:focus,
  select:focus,
  input:focus{
    outline:none!important;
    box-shadow:none!important;
    --tw-shadow: 0;
  }  
  .container-fluid{
    --bs-gutter-x: 0;
    --bs-gutter-y: 0;
  } 
  .container{
    max-width: 90rem;
    padding: 0;
} 
  .max-w-site{
    max-width:100vw!important
  }

  // Checkbox style

  .checkboxLabel{    
    cursor:pointer;
    position:relative;
    &.md{
      font-size:var(--app-global-text-sm);
    }
  }


  //CMS Block
  //Why us section global styles
  .why-cms-block{
    background-color: rgb(var(--app-global-color-grey-shade-2));
    padding: var(--app-spacing-20) var(--app-spacing-20) 0;
    @media (max-width:62rem){ 
      padding: var(--app-spacing-20) 0 0;
    }
    > div[class*="cmsBlock-root"]{
      width: 100%;
      max-width: 83.4375rem;
      margin: 0 auto;
      background-color: rgb(var(--app-global-color-white));
      padding: 3.75rem 1.4375rem var(--app-spacing-20);
      border-radius: var(--app-dim-06) var(--app-dim-06) 0 0;
      @media (max-width:62rem){ 
        border-radius: 0;
        padding: var(--app-spacing-30) var(--app-spacing-18);
      }
    }
    .why-us-container{
      .why-us-heading-main{
        margin-bottom: var(--app-spacing-10);
        @media (max-width:62rem){ 
          margin-bottom: var(--app-spacing-08);
        }
        h2{ 
          color: rgb(var(--app-global-color-neutral-900));
          margin-bottom:0;
          text-transform: capitalize;
          @media (max-width:62rem){
            font-size: var(--app-global-text-3xl);
            line-height: 1.1; 
          }
          strong{
            color: rgb(var(--app-global-color-accent-green-lighter)); 
            font-weight: var(--app-global-font-bold);
          }
        }
      }
      .why-us-para{ 
        font-size: var(--app-global-text-base);
        line-height: 1.625;
        font-weight: var(--app-global-font-regular);
        color: rgb(var(--app-global-color-neutral-900));
        margin-bottom: var(--app-spacing-40);
        @media (max-width:62rem){
          font-size: var(--app-global-text-sm);
        }
        + div[class*="columnGroup-root"]{
          column-gap: var(--app-spacing-40);
          @media (max-width:62rem){   
            row-gap:1.25rem;
            flex-direction: column;
          }
          .why-us-item{
            @media (max-width:62rem){  
              flex-direction: row!important;//removal of inline css
              width: 100%!important;//removal of inline css 
              align-items: flex-start;
            }
              img{
                max-width:20.5rem;
                max-height:13rem;
                object-fit:cover;
                width:100%;
                height:100%;
                border-radius:var(--app-dim-06);
                @media (max-width:62rem){  
                  max-width:unset;
                  width: 7.8125rem;
                  height: 6.5rem;
                  max-height:unset;
                }
              }
          }
          .why-us-description{
            max-width:16.25rem;
            width:100%;
            min-height:10.9375rem;
            overflow:auto;
            padding:var(--app-spacing-16);
            background: rgb(var(--app-global-color-white));
            border-bottom: 6px solid rgb(var(--app-global-color-green-shade-3));
            box-shadow: 0px 40px 53px -30px rgb(var(--app-global-color-neutral-900) / 18%);
            border-radius: 0px 0px var(--app-dim-02) var(--app-dim-02);
            margin-top: -72px;
            @media (max-width:62rem){  
              margin-top: 0;
              max-width:100%;
              min-height:4.625rem;
              padding:var(--app-spacing-09);
              border-radius: 0px 0px 0.075rem 0.075rem;
              border-bottom-width:0.25rem;
              box-shadow: 0px 17px 60px -10px rgb(var(--app-global-color-neutral-900) / 18%);
              margin-left: -1.875rem;
            }
            h3{
              font-weight:var(--app-global-font-bold); 
              font-size:var(--app-global-text-lg); 
              margin-bottom:var(--app-spacing-10);
              color:rgb(var(--app-global-color-neutral-900));
              line-height:1.2;
              @media (max-width:62rem){   
                font-size:var(--app-global-text-sm); 
                margin-bottom:var(--app-spacing-03);
              }
            }
            p{
              font-weight:var(--app-global-font-regular); 
              font-size:var(--app-global-text-sm); 
              color:rgb(var(--app-global-color-neutral-900));
              line-height:1.57;
              //optional
              display: -webkit-box;
              -webkit-box-orient: vertical;
              overflow: hidden;
              -webkit-line-clamp: 4;
              @media (max-width:62rem){   
                font-size:var(--app-global-text-xs);  
                //optional
                -webkit-line-clamp: 2;
              }
            }
          }
        }
      }
    }
  }
  //footer accordion
  .accordionFooter {
    margin-left: auto;
    @media (max-width:62rem){
      margin-left:0;
    }
    .accordion {
      display:flex;
      column-gap:4rem;
      --bs-accordion-color:rgb(var(--app-global-color-white-shade-2));
      --bs-accordion-bg:transparent;
      --bs-accordion-border-color:transparent;
      --bs-accordion-border-width:0;
      --bs-accordion-border-radius:0;
      --bs-accordion-btn-color:rgb(var(--app-global-color-white));
      --bs-accordion-btn-icon:none;
      --bs-accordion-active-color:inherit;
      --bs-accordion-active-bg:inherit;
      --bs-accordion-border-width:0;
      --bs-accordion-btn-active-icon:none;
        @media (max-width:83.5rem){
          column-gap:2rem;
        }
        @media (max-width:62rem){
          flex-direction:column;
          row-gap:var(--app-spacing-02);  
          --bs-accordion-btn-icon-width:0.75rem;
          --bs-accordion-btn-icon-height:0.4375rem;
          --bs-accordion-btn-icon:url("data:image/svg+xml,%0A%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.96967 0.59467C0.676777 0.887563 0.676777 1.36244 0.96967 1.65533L5.46967 6.15533C5.76256 6.44822 6.23744 6.44822 6.53033 6.15533L11.0303 1.65533C11.3232 1.36244 11.3232 0.887563 11.0303 0.59467C10.7374 0.301777 10.2626 0.301777 9.96967 0.59467L6 4.56434L2.03033 0.59467C1.73744 0.301777 1.26256 0.301777 0.96967 0.59467Z' fill='white'/%3E%3C/svg%3E%0A");
          --bs-accordion-btn-active-icon:var(--bs-accordion-btn-icon);
    
        }
        .accordion-item {
          @media (max-width:62rem){
            padding:var(--app-spacing-16) 0;
            border-bottom: 1px solid rgb(var(--app-global-color-grey-shade-5));
            &:last-child{
              border-bottom:0;
            }
          }
            .accordion-header {
              margin-bottom:var(--app-spacing-20);
              @media (max-width:62rem){
                margin-bottom: 0;
              }
              .accordion-button{
                font-size:var(--app-global-text-xl);
                line-height:1;
                font-weight:var(--app-global-font-medium);
                --bs-accordion-btn-padding-y:var(--app-spacing-02);
                --bs-accordion-btn-padding-x:var(--app-spacing-03);
                @media (max-width:62rem){
                  font-size:var(--app-global-text-lg);
                  line-height:1.1;
                }
              }
            }
            .accordion-collapse {
                @media (min-width:62rem){
                  &.collapse,
                  &.collapsing {
                      display: flex;
                      height: 100% !important; //inline override
                  }
                }
                .accordion-body {
                  --bs-accordion-body-padding-y:var(--app-spacing-06);
                  --bs-accordion-body-padding-x:0;
                  display:flex;
                  flex-direction:column;
                  row-gap:var(--app-spacing-02);
                  align-items:flex-start;  
                   @media (max-width:62rem){
                    --bs-accordion-body-padding-y:var(--app-spacing-12);
                  }
                  a{
                    padding:var(--app-spacing-02);
                    transition:0.3s all;
                    font-weight:var(--app-global-font-regular);
                    letter-spacing:0.0125em;
                    line-height:2.25;
                    font-size:var(--app-global-text-base);
                    text-transform:capitalize;
                    @media (max-width:62rem){
                      font-size:var(--app-global-text-sm);
                   }
                    &:hover{
                      color:rgb(var(--app-global-color-white));
                    }
                  }
                }
            }
        }
    }

    
}
.form-floating{
  .form-control{
      height: 3.25rem;
      padding: 1rem;
      font-size: var(--app-global-text-base);
      color: rgb(var(--app-global-color-neutral-900));
      font-weight: var( --app-global-font-semibold);
      
      &:focus, &:not(:placeholder-shown){
        padding: 1rem;

          ~ label{
              opacity: 1;
              transform: translateY(-1.625rem);
          }
      }
  }
  label{
    background: rgb(var(--app-global-color-white));
    color: rgb(var(--app-global-color-grey));
    font-weight: var(--app-global-font-regular);
    font-size: var(--app-global-text-base);
    line-height: 1;
    width: auto;
    height: auto;
    padding: 0 var(--app-spacing-03);
    left: 0.625rem;
    top: 1rem;
    transition: transform ease 0.2s;
  }
  textarea.form-control{
    height: auto;
    
    &:focus{
      box-shadow: none;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
} 

// Filter Accordion Start 
.filterAccordion{
  ul{
    display: block;
    padding: 0;
    > li{
      position: relative;    
    }
    li{
      display: block;
      padding: 0.5rem 0 0.5rem 0; 
      @media (max-width:83.5rem){
        font-size:var(--app-global-text-sm);
      }
      ul{
        padding: 0 0 0 1.25rem;
        display: block;
        width: 100%;
        li{
          border: none;
          line-height: 1.21rem;
          padding: 0.438rem 0 0.438rem 0;
          display: block;
          &::after{
            display: none;
          }     
          
        }
      }
    }
    .btnRemoveFilter{
      width: 1.063rem;
      height: 1.063rem;
      background:rgb(var(--app-global-color-neutral-200));
      position: absolute;
      right: 1.438rem;
      top: 0.7rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width:83.5rem){
        top:0.5rem;
      }
      svg{
        width: 0.5rem;
        height: 0.5rem;
        path{
          stroke: rgb(var(--app-global-color-neutral-400));
        }
      }
    }
  }
  .accordion{
    border:none;
    >ul{
      border-bottom: 1px solid rgba(var(--app-input-border-color));
    }
  }
  .accordion-item{
    border-radius:0;
    background-color:transparent;
    border:none;
    &:first-of-type {
      .accordion-button{
        border-radius:0;
      }
    }
  }
  .accordion-header{
    border-bottom:none;

  }
  .accordion-button{
    padding:0;
    outline: none;
    background: none;
    width: 100%;
    border: none;
    text-align: left;
    font-weight: var(--app-global-font-semibold);
    color: rgb(var(--app-global-color-primaryV3-default));
    @media (max-width:83.5rem){
    font-size:var(--app-global-text-sm);
    }
    &:hover{
      color: rgb(var(--app-global-color-neutral-500));
    }
    &:after{
      position: absolute;
        width: 1.063rem;
        height: 1.063rem;
        content: '';
        display: block;
        right: 1.438rem;
        top: 0.25rem;
        background-image: url("data:image/svg+xml,%3Csvg width='8' height='13' viewBox='0 0 8 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.695735 12.3687C1.03744 12.7104 1.59146 12.7104 1.93317 12.3687L7.18317 7.11872C7.52488 6.77701 7.52488 6.22299 7.18317 5.88128L1.93317 0.631282C1.59146 0.289573 1.03744 0.289573 0.695735 0.631282C0.354026 0.97299 0.354026 1.52701 0.695735 1.86872L5.32702 6.5L0.695735 11.1313C0.354026 11.473 0.354026 12.027 0.695735 12.3687Z' fill='%23979797'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-size: 0.438rem 0.75rem;
        background-position: center center;
      transform: rotate3d(0, 0, 0, 90deg);
    }
    &:not(.collapsed) {
      background-color:transparent;
      color:rgb(var(--app-global-color-accent-green-lighter));
      box-shadow:none;
      &:after{
        transform: rotate3d(0, 0, 1, 90deg);
      }
    }
  }
  .accordion-body{
    padding:0;
  }
}

// Filter Accordion End

// Listing Card Styles START

[class*="listingWrapper-"]{
  .highlightedCard{
    border: var(--app-dim-01) solid rgb(var(--app-global-color-highlight-green));
    border-left: var(--app-dim-05) solid rgb(var(--app-global-color-highlight-green));
    background:rgb(var(--app-global-color-highlight-green-lighter));
    border-radius:0;
    padding-left:0.75rem;
   
  }
}
// Listing Card Styles END

// PAGINATION STYLES START
.paginationBlock{
    display: flex;
    justify-content: center;
    align-items: center;
    padding:1.375rem 1.125rem;
    .pagination{
      display: flex;
      justify-content: center;
      align-items: center;
      gap:0.375rem;
    }
    .page-link{
      width:2rem;
      height:1.875rem;
      border-radius:0.375rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size:var(--app-global-text-sm);
      color:rgb(var(--app-global-color-neutral-500));
      font-weight:var(--app-global-font-semibold);
      &.nav-btns{
        border:none;
      }
      &.active{
        background:rgb(var(--app-global-color-accent-green-lighter));
        border-color:rgb(var(--app-global-color-accent-green-lighter));
        color:rgb(var(--app-global-color-white));
      }
      svg{
        width:0.849rem;
        height:0.7rem;
        flex-shrink:0;
      }
    }
}
// PAGINATION STYLES END
`;

export default GlobalStyles;
