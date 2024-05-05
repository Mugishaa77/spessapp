import React, { useState } from 'react';

export default function SideNav () {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

    return (
        <div className="sidenav inter-text">
             <div class="col-auto sidebar">
  
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="/">
            
 <svg width="20" height="20" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 29.25V9.75L13 0L26 9.75V29.25H16.25V17.875H9.75V29.25H0Z" fill="#006766"/>
</svg>  Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={toggleSubmenu}>
            <svg width="22" height="22" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7917 13.4267L16.3123 10.8712L13.7917 8.3125L11.3003 10.8712L13.7917 13.4267ZM10.1163 21.8025C9.40614 21.8025 8.81363 21.5581 8.33879 21.0694C7.86396 20.5807 7.62603 19.9722 7.625 19.2438V6.94133C7.625 6.213 7.86293 5.605 8.33879 5.11733C8.81465 4.62966 9.40665 4.3853 10.1148 4.38425H32.8852C33.5944 4.38425 34.1864 4.62861 34.6612 5.11733C35.136 5.60605 35.374 6.21405 35.375 6.94133V19.2438C35.375 19.9722 35.1371 20.5807 34.6612 21.0694C34.1853 21.5581 33.5928 21.802 32.8837 21.8009H28.1507C28.198 21.537 28.2294 21.2731 28.2448 21.0092C28.2602 20.7454 28.2623 20.4815 28.251 20.2176H32.8837C33.1211 20.2176 33.339 20.1162 33.5373 19.9136C33.7357 19.7109 33.8344 19.4877 33.8333 19.2438V6.94133C33.8333 6.69855 33.7347 6.4753 33.5373 6.27158C33.34 6.06786 33.1221 5.96652 32.8837 5.96758H10.1163C9.87892 5.96758 9.66103 6.06891 9.46267 6.27158C9.26431 6.47425 9.16564 6.69802 9.16667 6.94291V19.2438C9.16667 19.4866 9.26533 19.7099 9.46267 19.9136C9.66 20.1173 9.87737 20.2186 10.1148 20.2176H14.749C14.7367 20.4815 14.7388 20.7454 14.7552 21.0092C14.7717 21.2731 14.8035 21.537 14.8508 21.8009L10.1163 21.8025ZM28.4344 11.5108C28.8609 11.5108 29.2253 11.3567 29.5275 11.0485C29.8296 10.7403 29.9802 10.3677 29.9792 9.93066C29.9781 9.49366 29.8286 9.11894 29.5305 8.8065C29.2325 8.49405 28.8692 8.33941 28.4406 8.34258C28.012 8.34575 27.6477 8.49933 27.3475 8.80333C27.0474 9.10733 26.8969 9.48047 26.8958 9.92275C26.8948 10.365 27.0443 10.7392 27.3445 11.0453C27.6446 11.3514 28.0079 11.5077 28.4344 11.5108ZM12.25 33.6158V31.3864C12.25 30.7679 12.4165 30.1894 12.7495 29.6511C13.0825 29.1127 13.5316 28.7169 14.0969 28.4636C15.2768 27.9179 16.4834 27.503 17.7167 27.2191C18.9501 26.9351 20.2112 26.7937 21.5 26.7947C22.7888 26.7958 24.0499 26.9372 25.2833 27.2191C26.5166 27.5009 27.7232 27.9157 28.9031 28.4636C29.4684 28.7169 29.9175 29.1101 30.2505 29.6432C30.5835 30.1773 30.75 30.7552 30.75 31.3769V33.6158H12.25ZM13.7917 32.0324H29.2083V31.3864C29.2083 31.0697 29.1184 30.7795 28.9385 30.5156C28.7587 30.2517 28.5274 30.0538 28.2448 29.9218C27.1656 29.4204 26.0608 29.0378 24.9302 28.7739C23.7997 28.51 22.6562 28.3781 21.5 28.3781C20.3438 28.3781 19.2003 28.51 18.0698 28.7739C16.9392 29.0378 15.8344 29.4204 14.7552 29.9218C14.4726 30.0538 14.2413 30.2517 14.0615 30.5156C13.8816 30.7795 13.7917 31.0697 13.7917 31.3864V32.0324ZM21.5 24.6018C20.4249 24.6018 19.5138 24.2181 18.7666 23.4507C18.0194 22.6844 17.6458 21.7487 17.6458 20.6435C17.6458 19.5383 18.0194 18.6026 18.7666 17.8362C19.5138 17.0699 20.4249 16.6862 21.5 16.6852C22.5751 16.6841 23.4862 17.0678 24.2334 17.8362C24.9806 18.6047 25.3542 19.5404 25.3542 20.6435C25.3542 21.7466 24.9806 22.6823 24.2334 23.4507C23.4862 24.2192 22.5751 24.6029 21.5 24.6018ZM21.5 23.0185C22.1424 23.0185 22.6886 22.7879 23.1388 22.3266C23.589 21.8653 23.8135 21.3043 23.8125 20.6435C23.8115 19.9827 23.5869 19.4222 23.1388 18.962C22.6907 18.5018 22.1444 18.2706 21.5 18.2685C20.8556 18.2664 20.3098 18.4976 19.8627 18.962C19.4157 19.4264 19.1906 19.9869 19.1875 20.6435C19.1844 21.3001 19.4095 21.8611 19.8627 22.3266C20.316 22.7921 20.8617 23.0227 21.5 23.0185Z" fill="#686868"/>
</svg>  Post Space <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg></a>
{submenuOpen && (
            <ul className="submenu">
              <li><a href="/mobile">Mobile</a></li>
              <li><a href="#">Stationary</a></li>
            </ul>
          )}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <svg width="22" height="22" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.11633 21.8025C6.40614 21.8025 5.81363 21.5581 5.33879 21.0694C4.86396 20.5807 4.62603 19.9722 4.625 19.2438V6.94133C4.625 6.213 4.86293 5.605 5.33879 5.11733C5.81465 4.62966 6.40665 4.3853 7.11479 4.38425H29.8852C30.5944 4.38425 31.1864 4.62861 31.6612 5.11733C32.136 5.60605 32.374 6.21405 32.375 6.94133V19.2438C32.375 19.9722 32.1371 20.5807 31.6612 21.0694C31.1853 21.5581 30.5928 21.802 29.8837 21.8009H25.1507C25.2052 21.537 25.2386 21.2731 25.251 21.0092C25.2623 20.7454 25.2623 20.4815 25.251 20.2176C25.1441 18.3946 24.4436 16.853 23.1497 15.5927C21.8557 14.3323 20.3058 13.7022 18.5 13.7022C16.6942 13.7022 15.1443 14.3323 13.8503 15.5927C12.5564 16.853 11.8554 18.3946 11.7475 20.2176C11.7362 20.4815 11.7362 20.7454 11.7475 21.0092C11.7598 21.2731 11.7937 21.537 11.8492 21.8009L7.11633 21.8025ZM10.7917 13.4267L13.3123 10.8712L10.7917 8.3125L8.30033 10.8712L10.7917 13.4267ZM25.4375 11.5108C25.863 11.5108 26.2263 11.3557 26.5275 11.0453C26.8286 10.735 26.9792 10.3619 26.9792 9.92591C26.9792 9.48997 26.8286 9.11736 26.5275 8.80808C26.2263 8.4988 25.863 8.34364 25.4375 8.34258C25.012 8.34152 24.6487 8.49669 24.3475 8.80808C24.0464 9.11947 23.8958 9.49208 23.8958 9.92591C23.8958 10.3597 24.0464 10.7329 24.3475 11.0453C24.6487 11.3578 25.012 11.514 25.4375 11.5108ZM9.25 33.6158V31.3864C9.25 30.7679 9.4165 30.1894 9.7495 29.6511C10.0825 29.1127 10.5316 28.7169 11.0969 28.4636C12.2768 27.9179 13.4834 27.503 14.7167 27.2191C15.9501 26.9351 17.2112 26.7937 18.5 26.7947C19.7888 26.7958 21.0499 26.9372 22.2833 27.2191C23.5166 27.5009 24.7232 27.9157 25.9031 28.4636C26.4684 28.7169 26.9175 29.1127 27.2505 29.6511C27.5835 30.1894 27.75 30.7679 27.75 31.3864V33.6158H9.25ZM18.5 24.6018C17.4249 24.6018 16.5138 24.2181 15.7666 23.4507C15.0194 22.6844 14.6458 21.7487 14.6458 20.6435C14.6458 19.5383 15.0194 18.6026 15.7666 17.8362C16.5138 17.0699 17.4249 16.6862 18.5 16.6852C19.5751 16.6841 20.4862 17.0678 21.2334 17.8362C21.9806 18.6047 22.3542 19.5404 22.3542 20.6435C22.3542 21.7466 21.9806 22.6823 21.2334 23.4507C20.4862 24.2192 19.5751 24.6029 18.5 24.6018Z" fill="#686868"/>
</svg>  My Space</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/messages">
            <svg width="22" height="22" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.98012 9.30841C4.625 10.6986 4.625 12.939 4.625 17.4167V20.5833C4.625 25.061 4.625 27.3014 5.98012 28.6916C7.33371 30.0833 9.51517 30.0833 13.875 30.0833H23.125C27.4848 30.0833 29.6663 30.0833 31.0199 28.6916C32.375 27.3014 32.375 25.061 32.375 20.5833V17.4167C32.375 12.939 32.375 10.6986 31.0199 9.30841C29.6663 7.91666 27.4848 7.91666 23.125 7.91666H13.875C9.51517 7.91666 7.33371 7.91666 5.98012 9.30841ZM10.1056 12.9327C9.76544 12.6996 9.34904 12.6149 8.94804 12.6971C8.54703 12.7794 8.19426 13.0219 7.96733 13.3712C7.74041 13.7206 7.65791 14.1483 7.738 14.5601C7.81808 14.972 8.05419 15.3343 8.39438 15.5673L16.7903 21.3148C17.2967 21.6613 17.8915 21.8462 18.5 21.8462C19.1085 21.8462 19.7033 21.6613 20.2097 21.3148L28.6056 15.5673C28.9458 15.3343 29.1819 14.972 29.262 14.5601C29.3421 14.1483 29.2596 13.7206 29.0327 13.3712C28.8057 13.0219 28.453 12.7794 28.052 12.6971C27.651 12.6149 27.2346 12.6996 26.8944 12.9327L18.5 18.6802L10.1056 12.9327Z" fill="#686868"/>
</svg>  Messages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <svg width="22" height="22" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8925 2.94667C18.0845 2.87106 18.2911 2.83208 18.5 2.83208C18.7088 2.83208 18.9154 2.87106 19.1074 2.94667L28.9648 6.82975C29.5196 7.04828 29.9923 7.41163 30.3245 7.87474C30.6566 8.33785 30.8335 8.88036 30.8333 9.435V19.1533C30.8331 20.9014 30.3301 22.6183 29.3752 24.1302C28.4203 25.6421 27.0475 26.8951 25.3958 27.7624L19.2646 30.9811C19.0317 31.1033 18.7682 31.1676 18.5 31.1676C18.2318 31.1676 17.9682 31.1033 17.7353 30.9811L11.6041 27.7624C9.95198 26.8949 8.57887 25.6414 7.62395 24.129C6.66903 22.6166 6.16627 20.899 6.16663 19.1505V9.435C6.16669 8.8806 6.34376 8.3384 6.67589 7.87557C7.00801 7.41273 7.48061 7.0496 8.03513 6.83117L17.8925 2.94667ZM24.2149 15.1683C24.4957 14.9011 24.6511 14.5432 24.6476 14.1718C24.6441 13.8003 24.482 13.445 24.1961 13.1823C23.9103 12.9197 23.5236 12.7707 23.1194 12.7675C22.7152 12.7642 22.3258 12.907 22.035 13.1651L16.9583 17.8302L14.9649 15.9984C14.6742 15.7404 14.2847 15.5976 13.8805 15.6008C13.4763 15.604 13.0896 15.753 12.8038 16.0157C12.5179 16.2783 12.3558 16.6337 12.3523 17.0051C12.3488 17.3765 12.5042 17.7344 12.785 18.0016L15.8683 20.8349C16.1574 21.1005 16.5495 21.2497 16.9583 21.2497C17.3671 21.2497 17.7591 21.1005 18.0483 20.8349L24.2149 15.1683Z" fill="#686868"/>
</svg>  Permissions</a>
        </li>
      </ul>
      <h4>General</h4>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-wide-connected" viewBox="0 0 16 16">
  <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z"/>
</svg>  Settings</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">
<svg width="22" height="22" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7442 3.179C18.4523 2.58683 20.4167 4.84783 20.4167 7.08333V26.9167C20.4167 29.1522 18.4523 31.4132 15.7442 30.821C9.23708 29.3987 4.375 23.7518 4.375 17C4.375 10.2482 9.23708 4.60133 15.7442 3.179ZM23.7606 11.7484C24.0341 11.4828 24.405 11.3336 24.7917 11.3336C25.1784 11.3336 25.5492 11.4828 25.8227 11.7484L30.1977 15.9984C30.4711 16.2641 30.6247 16.6243 30.6247 17C30.6247 17.3756 30.4711 17.7359 30.1977 18.0016L25.8227 22.2516C25.5477 22.5096 25.1793 22.6524 24.7969 22.6492C24.4145 22.646 24.0488 22.497 23.7784 22.2343C23.508 21.9717 23.3546 21.6163 23.3513 21.2449C23.348 20.8735 23.495 20.5156 23.7606 20.2484L25.6462 18.4167H13.125C12.7382 18.4167 12.3673 18.2674 12.0938 18.0017C11.8203 17.7361 11.6667 17.3757 11.6667 17C11.6667 16.6243 11.8203 16.2639 12.0938 15.9983C12.3673 15.7326 12.7382 15.5833 13.125 15.5833H25.6462L23.7606 13.7516C23.4872 13.4859 23.3336 13.1256 23.3336 12.75C23.3336 12.3743 23.4872 12.0141 23.7606 11.7484Z" fill="black"/>
</svg>  Log Out</a>
        </li>
        </ul>
    </div>
    </div>
    );
}