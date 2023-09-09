class NewFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer-container">
    <div class="footer-content">
        <div class="about-company">
            <div class="footer-logo">
                <img class='lazy' src='/assets/img/skeleton-image.webp' data-src="/assets/img/logo.webp" alt="Company Logo">
                <p class="logo-tagline">Digital Invitations</p>
            </div>
            <div class="content">
                <p class="comp-para">Celebrare is a startup by Alumni of IIT Hyderabad working in the digital India sector to
                    transform wedding invitations market.</p>
            </div>
        </div>
        <hr>
        <div class="policy">
            <div class="title">
                <p class="Policy">Policy</p>
            </div>
            <div class="content">
                <a class="Privacy-Policy" href="/policy?policy=privacyPolicy">Privacy Policy</a>
                <a class="Terms-Of-Use" href="/policy?policy=termsofuse">Terms of Use</a>
                <a class="cancellation" href="/policy?policy=returnPolicy">Return, Shipping and Cancellation Policy</a>
            </div>
        </div>
        <hr>
        <div class="support">
            <div class="title">
                <p class="Support">Support</p>
            </div>
            <div class="content">
                <a class="faq" href="/#temp-faq">FAQ's</a>
                <a class="About-Us" href="/about-us">About Us</a>
            </div>
        </div>
        <hr>
        <div class="contact-us">
            <div class="title">
                <p class="Contact-Us">Contact Us</p>
            </div>
            <div class="content">
                <a href="tel:+918005993442"><span><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960"
                            width="48">
                            <path
                                d="M795 936q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19 13-32t32-13h140q14 0 24.5 9.5T343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15 3 25 15t10 28v135q0 19-13 32t-32 13Z" />
                        </svg></span><span>+91-8005993442</span></a>
                <a href="mailto:support@celebrare.in"><span><svg xmlns="http://www.w3.org/2000/svg" height="48"
                            viewBox="0 96 960 960" width="48">
                            <path
                                d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302 340-223v-55L480 534 140 316v55l340 223Z" />
                        </svg></span><span>support@celebrare.in</span></a>
                <a href="https://play.google.com/store/apps/details?id=com.enjoy.celebrare" target="_blank"><img src="/assets/img/footer/google-play-icon.webp" alt="Google Playstore Icon"></a>
            </div>
        </div>
        <hr>
        <div class="follow-us">
            <div class="title">
                <p class="Follow-Us">Follow Us on</p>
            </div>
            <div class="follow-us-links">
                <a href="https://in.pinterest.com/celebrare_in/" target="_blank" aria-label="pinterest page">
                    <img class='lazy' src='/assets/img/skeleton-image.webp' data-src="/assets/img/footer/pinterest-logo.webp" alt="pinterest logo">
                </a>
                <a href="https://www.facebook.com/celebrare.in" target="_blank" aria-label="facebook page">
                    <img class='lazy' src='/assets/img/skeleton-image.webp' data-src="/assets/img/footer/facebook-logo.webp" alt="facebook logo">
                </a>
                <a href="https://instagram.com/celebrare.in?igshid=MmJiY2I4NDBkZg==" target="_blank" aria-label="instagram page">
                    <img class='lazy' src='/assets/img/skeleton-image.webp' data-src="/assets/img/footer/instagram-logo.webp" alt="instagram logo">
                </a>
            </div>
            <hr class="hr-copyright">
            <div class="copyright">
                <span class="copyright-icon">\xa9 </span><span class="copyright-tag">Celebrare 2023, All rights reserved.</span>
            </div>
        </div>
    </div>
    <hr class="desktop-hr">
    <div class="footer-bottom">
        <hr class="mobile-hr">
        <div class="copyright">
            <span class="copyright-icon">\xa9 </span><span class="copyright-tag">Celebrare 2023, All rights reserved.</span>
        </div>
        <div class="follow-us">
            <p class="Follow-Us">Follow Us on</p>
            <a href="https://in.pinterest.com/celebrare_in/" target="_blank" aria-label="pinterest page">
                <img class='lazy' src='/assets/img/skeleton-image.webp' data-src="/assets/img/footer/pinterest-logo.webp" alt="pinterest logo"></a>
            <a href="https://www.facebook.com/celebrare.in" target="_blank" aria-label="facebook page">
                <img class='lazy' src='/assets/img/skeleton-image.webp' data-src="/assets/img/footer/facebook-logo.webp" alt="facebook logo"></a>
            <a href="https://instagram.com/celebrare.in?igshid=MmJiY2I4NDBkZg==" target="_blank" aria-label="instagram page">
                <img class='lazy' src='/assets/img/skeleton-image.webp' data-src="/assets/img/footer/instagram-logo.webp" alt="instagram logo"></a>
        </div>
    </div>
</footer>`;
  }
}
customElements.define("new-footer", NewFooter),
  document.addEventListener("DOMContentLoaded", function () {
    var a = [].slice.call(document.querySelectorAll("img.lazy"));
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      let e = new IntersectionObserver(function (a, s) {
        a.forEach(function (a) {
          if (a.isIntersecting) {
            let s = a.target;
            (s.src = s.dataset.src), s.classList.remove("lazy"), e.unobserve(s);
          }
        });
      });
      a.forEach(function (a) {
        e.observe(a);
      });
    }
  });
