// [
//   {
//     title: 'Save the Children',
//     url:
//       'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
//     img: null,
//   },
//   {
//     title: 'Project HOPE',
//     url: 'https://www.projecthope.org/country/ukraine/',
//     img: null,
//   },
//   {
//     title: 'UNITED24',
//     url: 'https://u24.gov.ua/uk',
//     img: null,
//   },
//   {
//     title: 'International Medical Corps',
//     url: 'https://internationalmedicalcorps.org/country/ukraine/',
//     img: null,
//   },
//   {
//     title: 'Medicins Sans Frontieres',
//         url: 'https://www.msf.org/ukraine',
//     img: null,
//   },
//   {
//     title: 'RAZOM',
//     url: 'https://www.razomforukraine.org/',
//     img: null,
//   },
//   {
//     title: 'Action against hunger',
//     url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
//     img: null,
//   },
//   {
//     title: 'World vision',
//     url: 'https://www.wvi.org/emergencies/ukraine',
//     img: null,
//   },
//   {
//     title: 'Serhiy Prytula Charity Foundation',
//     url: 'https://prytulafoundation.org/en',
//     img: null,
//   },
// ]
import $ from 'jquery';
import 'slick-carousel';
    $('.single-item').slick({
      infinite: true,
      dots: false,
      slidesToShow: 6,
      slidesToScroll: 3,
      vertical: true,
      prevArrow: '<div></div>',
      nextArrow: `<button type="button" class="support-btn" aria-label="Next">
        <svg class="support-svg" width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.34876 5.28346C6.43397 5.36937 6.53536 5.43757 6.64706 5.48411C6.75877 5.53065 6.87858 5.5546 6.99959 5.5546C7.1206 5.5546 7.24042 5.53065 7.35212 5.48411C7.46382 5.43757 7.56521 5.36937 7.65042 5.28346L11.8488 1.07596C11.934 0.990038 12.0354 0.921843 12.1471 0.875305C12.2588 0.828767 12.3786 0.804808 12.4996 0.804808C12.6206 0.804808 12.7404 0.828767 12.8521 0.875305C12.9638 0.921843 13.0652 0.990038 13.1504 1.07596C13.3212 1.24771 13.417 1.48004 13.417 1.72221C13.417 1.96438 13.3212 2.19671 13.1504 2.36846L8.94293 6.57596C8.4273 7.09094 7.72834 7.3802 6.99959 7.3802C6.27084 7.3802 5.57188 7.09094 5.05625 6.57596L0.84875 2.36846C0.679401 2.19772 0.583928 1.96727 0.582915 1.72679C0.582218 1.60615 0.605341 1.48656 0.650958 1.37487C0.696576 1.26319 0.763792 1.16161 0.84875 1.07596C0.933966 0.990038 1.03535 0.921843 1.14705 0.875305C1.25876 0.828767 1.37857 0.804808 1.49958 0.804808C1.62059 0.804808 1.74041 0.828767 1.85211 0.875305C1.96382 0.921843 2.0652 0.990038 2.15042 1.07596L6.34876 5.28346Z"
                fill="#4F2EE8" />
        </svg>
    </button>`,
      
      responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        }]
    });
