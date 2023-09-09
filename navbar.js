class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <nav class="navbar">
    <a href= 'https://celebrare.in' aria-label='Go to Homepage of Celebrare'><div class="logo"></div></a>
    <div class="nav-items">
        <div class="nav-btns"><a href="/index.html"><span class="wedding-invitation">Wedding invitation</span><i class="fa fa-caret-down" aria-hidden="true"></i></a>
            <div class="wedding-card-type-dropdown">
                <div class="triangle"></div>
                <div class="dropdown-section">
                    <div><a href="/index.html"><img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/assets/img/card-category-icons/all.webp" alt="all-icon">
                            <p class="all">All</p>
                        </a></div>

                    <div><a href="/index.html"><img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/assets/img/card-category-icons/other-icon.webp" alt="general-icon">
                            <p class="other">General</p>
                        </a></div>

                    <div><a href="/index.html"><img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/assets/img/card-category-icons/hindu-icon.webp" alt="hindu-icon">
                            <p class="hindu">Hindu</p>
                        </a></div>
                    <div><a href="/index.html"><img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/assets/img/card-category-icons/south-indian-icon.webp"
                                alt="south indian-icon">
                            <p class="south-indian">South Indian</p>
                        </a></div>
                    <div><a href="/wedding-card/bengali"><img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/assets/img/card-category-icons/bengali-icon.webp" alt="bengali-icon">
                            <p class="bengali">Bengali</p>
                        </a></div>
                    <div><a href="/wedding-card/marathi"><img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/assets/img/card-category-icons/marathi-icon.webp" alt="marathi-icon">
                            <p class="marathi">Marathi</p>
                        </a></div>
                </div>
                <div class="dropdown-section">
                    <div><a href="/wedding-card/buddha"><img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/assets/img/card-category-icons/buddha-icon.webp" alt="buddha-icon">
                            <p class="buddha ">Buddha</p>
                        </a></div>
                    <div><a href="/wedding-card/muslim"><img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/assets/img/card-category-icons/muslim-icon.webp" alt="muslim-icon">
                            <p class="muslim">Muslim</p>
                        </a></div>
                    <div><a href="/wedding-card/punjabi"><img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/assets/img/card-category-icons/sikh-icon.webp" alt="sikh-icon">
                            <p class="sikh">Punjabi</p>
                        </a></div>
                    <div><a href="/wedding-card/christian"><img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/assets/img/card-category-icons/christian-icon.webp"
                                alt="christian-icon">
                            <p class="christian">Christian</p>
                        </a></div>
                    <div><a href="/wedding-card/engagement"><img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/assets/img/card-category-icons/engagement-icon.webp"
                                alt="engagement-icon">
                            <p class="engagement">Engagement</p>
                        </a></div>
                    <div><a href="/wedding-card/other"><img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/assets/img/card-category-icons/other.webp" alt="other-icon">
                            <p class="other">Other</p>
                        </a></div>
                </div>
            </div>
        </div>
        <div class="nav-btns">
            <a href='/index.html'><p class="video-invitation">Video invitation</p><span class="video-launch-offer-tag">Launch offer</span></a>
        </div>

        <div class="greeting-nav-btns"><a href='/index.html'><p class="greeting-invitation">Greeting Cards</p><i class="fa fa-caret-down" aria-hidden="true"></i></a>
                <div class="greeting-card-type-dropdown">
                    <div class="triangle"></div>
                    <div class="dropdown-section-greeting">
                            <div class="birthday-cards"><p class="BirthdayCards" style="font-weight: 600;"><a href="/greeting-card/#Birthday">Birthday Cards</a></p>
                             <div>
                              <a href="/greeting-card/birthday/kids">
                                <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/birthday-kids-svg.svg " alt="all-icon">
                                <p class="kids">Kids</p>
                              </a>
                             </div>
                             <div>
                                <a href="/greeting-card/birthday/friends">
                                  <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/birthday-friends-svg.svg" alt="all-icon">
                                  <p class="Friends">Friends</p>
                                </a>
                               </div>
                               <div>
                                <a href="/greeting-card/birthday/dad">
                                  <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/birthday-dad-svg.svg" alt="all-icon">
                                  <p class="Dad">Dad</p>
                                </a>
                               </div>
                               <div>
                                <a href="/greeting-card/birthday/mom">
                                  <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/birthday-mom-svg.svg" alt="all-icon">
                                  <p class="Mom">Mom</p>
                                </a>
                               </div>
                               <div>
                                <a href="/greeting-card/birthday/boy">
                                  <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/birthday-forhim-svg.svg" alt="all-icon">
                                  <p class="For-him">For Him</p>
                                </a>
                               </div>
                               <div>
                                <a href="/greeting-card/birthday/girl">
                                  <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/birthday-forher-svg.svg " alt="all-icon">
                                  <p class="for-her">For Her</p>
                                </a>
                               </div>
                               <div>
                                <a href="/greeting-card/birthday/funny">
                                  <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/birthday-funnycards-svg.svg" alt="all-icon">
                                  <p class="funny-cards">Funny Cards</p>
                                </a>
                               </div>
                               <div>
                                <a href="/greeting-card/birthday/general">
                                  <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/birthday-general-svg.svg" alt="all-icon">
                                  <p class="general-cards">General Cards</p>
                                </a>
                               </div>
                            </div>
                            <div class="anniversary-cards"><p class="anniversary-card" style="font-weight: 600;"><a href="/greeting-card/#Anniversary">Anniversary Cards</a></p>
                            <div>
                                <a href="/greeting-card/anniversary/husband">
                                    <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/anniversary-forhusband-svg.svg" alt="all-icon">
                                    <p class="for-husband">For Husband</p>
                                </a>
                            </div>
                            <div>
                                <a href="/greeting-card/anniversary/wife">
                                    <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/anniversary-forwife-svg.svg" alt="all-icon">
                                    <p class="for-wife">For Wife</p>
                                </a>
                            </div>
                            <div>
                                <a href="/greeting-card/anniversary/parent">
                                    <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/anniversary-forparents-svg.svg" alt="all-icon">
                                    <p class="for-parents">For Parents</p>
                                </a>
                            </div>
                            <div>
                                <a href="/greeting-card/anniversary/general">
                                    <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/anniversary-general-svg.svg" alt="all-icon">
                                    <p class="general-cards">General Cards</p>
                                </a>
                            </div>
                            </div>
                            <div class="feeling-cards"> <p class="feeling-card" style="font-weight: 600;"><a href="/greeting-card/#Feelings">Feeling Cards</a></p>
                                <div>
                                    <a href="/greeting-card/feelings/love-cards">
                                        <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/feelings-love-svg.svg" alt="all-icon">
                                        <p class="love-cards">Love Cards</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="/greeting-card/feelings/thank-you-cards">
                                        <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/feelings-thankyou-svg.svg" alt="all-icon">
                                        <p class="thankyou">Thank you Cards</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="/greeting-card/feelings/sorry-cards">
                                        <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/feelings-sorry-svg.svg" alt="all-icon">
                                        <p class="sorry-card">Sorry Cards</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="/greeting-card/feelings/congrats-cards">
                                        <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/feelings-congrats-svg.svg" alt="all-icon">
                                        <p class="congrats">Congrats Cards</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="/greeting-card/feelings/wedding-congrats">
                                        <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/feelings-weddingwishes-svg.svg" alt="all-icon">
                                        <p class="wedding">Wedding Greetings</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="/greeting-card/feelings/miss-you-cards">
                                        <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/feelings-missyou-svg.svg" alt="all-icon">
                                        <p class="missYou">Miss you Cards</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="/greeting-card/feelings/get-well-soon">
                                        <img class="lazy" src="/assets/img/skeleton-image.webp" data-src="/greeting-card/assets/img/greeting-category-icons/feelings-getwellsoon-svg.svg" alt="all-icon">
                                        <p class="getWell">Get Well Soon</p>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
       
        
    </div>

    <div class="nav-btns">
        
        <div class="dropdown"> 
            <button class="login-btn login">Login</button>
            <div class="dropdown-content">
                <div class="sign-up"> <p class="new-user">New User?</p> <p class="sign-up-text">Sign Up</p></div>
                <hr>
                <a href="/my-order"><img class="icon" src="/assets/img/navbar/my-order-icon.svg" alt="My Order"><p class="my order">My Order</p> </a>
                <a href="/draft"><img class="icon" src="/assets/img/navbar/my-draft-icon.svg" alt="My Draft"> <p class="My Draft">My Draft</p></a>
                <a href="/my-wishlist"><img class="icon" src="/assets/img/navbar/my-wishlist-icon.svg" alt="My Wishlist"><p class="My Wishlist">My Wishlist</p></a>
            </div>
        </div>
        <div class="profile-img-div"></div>
        <span class="material-symbols-outlined menu-icon"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></span>
        <select id="language-selector">
            <option class="english" value="en">English</option>
            <option class="hindi" value="hi">Hindi</option>
        </select>
    </div>
    <div class="login-modal">
        <div class="login-container">
            <div class="content-section">
                <div class="inner-section">
                    <div class="back-image-logo"><img src="/assets/img/bird.svg" alt=""></div>
                    <img class="login-content-logo" src="/assets/img/logo.webp" alt="logo">
                    <p class="login-msg">Make wedding invitations online, fast, easy and affordable! You don't need any design experience.
                    </p>
                    <div>
                        <p class="alumni">- an initiative by Alumni of IIT Hyderabad.</p>
                    </div>
                </div>
                <div class="back-btn">
                    <span class="material-symbols-outlined"><svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.26368 0.357965L0.363592 8.1358C-0.121197 8.61308 -0.121197 9.38692 0.363592 9.8642L8.26368 17.642C8.74847 18.1193 9.53447 18.1193 10.0193 17.642C10.504 17.1647 10.504 16.3909 10.0193 15.9136L4.23833 10.2222L22.7586 10.2222C23.4442 10.2222 24 9.67498 24 9C24 8.32502 23.4442 7.77783 22.7586 7.77783L4.23833 7.77783L10.0193 2.08637C10.504 1.60909 10.504 0.835252 10.0193 0.357965C9.53447 -0.119322 8.74847 -0.119322 8.26368 0.357965Z" fill="#007663"/></svg></span>
                </div>
            </div>
            <div class="action-btn-section">
                <div class="outer-container">
                    <div class="inner-section">
                        <p class="hello">Hello :)</p>
                        <button class="google-sign-in-btn"><img src="/assets/img/navbar/google-icon.webp" alt="google-icon" /><span class="continue-with-google">Continue with Google</span></button>
                        <div>
                            <hr>
                            <p class="or">Or</p>
                            <hr>
                        </div>
                        <p class="enter-mob-no">Enter Mobile No</p>
                        <div class="input-for-mobile-no">
                            <input class="input" type="number" placeholder="Enter your mobile number" ></input>
                            <p class="error-text valid-num-error">Please Enter a Valid Mobile Number</p>
                        </div>
                        <div id="sendingOtpText" style="display: none;">Sending OTP...</div>
                        <button class="send-otp-btn" id="send-otp-btn"><span class="send-otp">Send OTP</span><span class="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m480 896-42-43 247-247H160v-60h525L438 299l42-43 320 320-320 320Z"/></svg></span></button>
                        <div class="close-btn">
                        +
                    </div>
                    </div>
                    <div class="confirm-otp-container">
                        <p class="just-one-last">Just One Last Step!!</p>
                        <input type="number" placeholder="Confirm OTP"></input>
                        <p class="error-text incorrect-otp-error">Incorrect OTP</p>
                        <button id="resendOtpBtn" onclick="resendOtp()" disabled>Resend OTP</button>
                        <button class="confirm-otp-btn confirm-otp-msg">Confirm OTP</button>
                        <div class="back-btn">
                            <span class="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z"/></svg></span><span class="back">Back</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="dashboard"></div>
    <div class="mobile-navbar" id="mobile-navbar">
    <div class="sidebar-content">
        <div class="user-details">
            <p><span class="hi">Hi!</span> &nbsp; <span class="user-name"></span></p>
            <p class="user-email"></p>
            <hr>
        </div>
        <a href="/index.html"><img class="nav-link-img " src="/assets/img/navbar/wedding-invitation-icon.svg" alt="wedding-invitation-icon"><span class="wedding-invitation">Wedding
                Invitation</span></a>
        <a href="\video-invitationindex"><img class="nav-link-img " src="/assets/img/navbar/video-editing-icon.svg" alt="wedding-invitation-icon"><span class="video-invitation">Video
                Invitation</span><span class="new-tag"></span></a>
        <a href="/greeting-card"><img class="nav-link-img" src="/assets/img/navbar/video-editing-icon.svg" alt="wedding-invitation-icon"><span class="video-invitation">Greeting
                    cards</span></a>
        <a href="/my-order"> <img class="nav-link-img " src="/assets/img/navbar/my-order-icon.svg"
                alt="my-order-icon"><span class="My-Order">My Order</span></a>
        <a href="/draft"> <img class="nav-link-img " src="/assets/img/navbar/my-draft-icon.svg"
                alt="my-draft-icon"><span class="My-Draft">My Draft</span></a>
        <a href="/my-wishlist"> <img class="nav-link-img " src="/assets/img/navbar/my-wishlist-icon.svg"
                alt="my-wishlist-icon"><span class="My-Wishlist">My Wishlist</span></a>
    </div>
    <button id="sign-btn"><span class="login">Login</span><span class="material-symbols-outlined"> <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m480 896-42-43 247-247H160v-60h525L438 299l42-43 320 320-320 320Z"/></svg></span>
    </button>
</div>
</nav>`;
  }
}

customElements.define("custom-navbar", Navbar),
  window.addEventListener("load", () => {
    document
      .getElementsByClassName("wedding-invitation")[0]
      .addEventListener("click", (e) => {
        e.stopPropagation(),
          "hidden" ==
          getComputedStyle(
            document.querySelector(".wedding-card-type-dropdown")
          ).visibility
            ? ((document.querySelector(
                ".wedding-card-type-dropdown"
              ).style.scale = 1),
              (document.querySelector(
                ".wedding-card-type-dropdown"
              ).style.visibility = "visible"),
              document
                .querySelector(".nav-btns i")
                .setAttribute("class", "fa fa-caret-up"))
            : ((document.querySelector(
                ".wedding-card-type-dropdown"
              ).style.scale = 0.1),
              (document.querySelector(
                ".wedding-card-type-dropdown"
              ).style.visibility = "hidden"),
              document
                .querySelector(".nav-btns i")
                .setAttribute("class", "fa fa-caret-down"));
      }),
      document
        .getElementsByClassName("nav-btns")[0]
        .addEventListener("mouseenter", () => {
          (document.querySelector(
            ".wedding-card-type-dropdown"
          ).style.scale = 1),
            (document.querySelector(
              ".wedding-card-type-dropdown"
            ).style.visibility = "visible"),
            document
              .querySelector(".nav-btns i")
              .setAttribute("class", "fa fa-caret-up");
        }),
      document
        .getElementsByClassName("nav-btns")[0]
        .addEventListener("mouseleave", () => {
          (document.querySelector(
            ".wedding-card-type-dropdown"
          ).style.scale = 0.1),
            (document.querySelector(
              ".wedding-card-type-dropdown"
            ).style.visibility = "hidden"),
            document
              .querySelector(".nav-btns i")
              .setAttribute("class", "fa fa-caret-down");
        }),
      window.addEventListener("click", () => {
        (document.querySelector(
          ".wedding-card-type-dropdown"
        ).style.visibility = "hidden"),
          document
            .querySelector(".nav-btns i")
            .setAttribute("class", "fa fa-caret-down"),
          (document.querySelector(".mobile-navbar").style.display = "none");
      }),
      document
        .getElementsByClassName("greeting-invitation")[0]
        .addEventListener("click", (e) => {
          e.stopPropagation(),
            "hidden" ==
            getComputedStyle(
              document.querySelector(".greeting-card-type-dropdown")
            ).visibility
              ? ((document.querySelector(
                  ".greeting-card-type-dropdown"
                ).style.scale = 1),
                (document.querySelector(
                  ".greeting-card-type-dropdown"
                ).style.visibility = "visible"),
                document
                  .querySelector(".nav-btns i")
                  .setAttribute("class", "fa fa-caret-up"))
              : ((document.querySelector(
                  ".greeting-card-type-dropdown"
                ).style.scale = 0.1),
                (document.querySelector(
                  ".greeting-card-type-dropdown"
                ).style.visibility = "hidden"),
                document
                  .querySelector(".nav-btns i")
                  .setAttribute("class", "fa fa-caret-down"));
        }),
      document
        .getElementsByClassName("greeting-invitation")[0]
        .addEventListener("mouseenter", () => {
          (document.querySelector(
            ".greeting-card-type-dropdown"
          ).style.scale = 1),
            (document.querySelector(
              ".greeting-card-type-dropdown"
            ).style.visibility = "visible"),
            document
              .querySelector(".greeting-nav-btns i")
              .setAttribute("class", "fa fa-caret-up");
        }),
      document
        .getElementsByClassName("greeting-nav-btns")[0]
        .addEventListener("mouseleave", () => {
          (document.querySelector(
            ".greeting-card-type-dropdown"
          ).style.scale = 0.1),
            (document.querySelector(
              ".greeting-card-type-dropdown"
            ).style.visibility = "hidden"),
            document
              .querySelector(".greeting-nav-btns i")
              .setAttribute("class", "fa fa-caret-down");
        }),
      document
        .querySelector(".confirm-otp-container .back-btn")
        .addEventListener("click", () => {
          document.querySelector(
            ".action-btn-section .outer-container"
          ).style.transform = "translateX(0%)";
        }),
      document.querySelector(".send-otp-btn").addEventListener("click", () => {
        onSignInSubmit();
      }),
      document
        .querySelector(".content-section .back-btn")
        .addEventListener("click", () => {
          document.querySelector(".login-modal").style.display = "none";
        }),
      document.querySelector(".login-btn").addEventListener("click", () => {
        document.querySelectorAll(".input").forEach((e) => {
          e.intlTelInput && e.intlTelInput.destroy(),
            window.intlTelInput(e, {
              formatOnDisplay: !0,
              separateDialCode: !0,
              initialCountry: "in",
              autoHideDialCode: !0,
            });
        }),
          (document.querySelector(".login-modal").style.display = "flex"),
          document
            .querySelector(".iti__selected-flag")
            .addEventListener("click", (e) => {
              e.stopPropagation();
            });
      }),
      document.querySelector(".sign-up").addEventListener("click", () => {
        document.querySelectorAll(".input").forEach((e) => {
          e.intlTelInput && e.intlTelInput.destroy(),
            window.intlTelInput(e, {
              formatOnDisplay: !0,
              separateDialCode: !0,
              initialCountry: "in",
              autoHideDialCode: !0,
            });
        }),
          (document.querySelector(".login-modal").style.display = "flex"),
          document
            .querySelector(".iti__selected-flag")
            .addEventListener("click", (e) => {
              e.stopPropagation();
            });
      }),
      document
        .querySelector(".google-sign-in-btn")
        .addEventListener("click", GoogleLogin),
      document
        .querySelector(".nav-btns .material-symbols-outlined")
        .addEventListener("click", (e) => {
          e.stopPropagation(),
            (document.querySelector(".mobile-navbar").style.display =
              "none" ==
              getComputedStyle(document.querySelector(".mobile-navbar")).display
                ? "flex"
                : "none");
        }),
      document
        .querySelector(".login-container")
        .addEventListener("click", (e) => {
          e.stopPropagation(),
            document.querySelector(".iti__country-list") &&
              document
                .querySelector(".iti__country-list")
                .classList.add("iti__hide"),
            document.querySelector(".input-for-mobile-no .iti__arrow") &&
              document
                .querySelector(".input-for-mobile-no .iti__arrow")
                .classList.remove("iti__arrow--up");
        }),
      document
        .querySelector(".mobile-navbar")
        .addEventListener("click", (e) => {
          e.stopPropagation();
        }),
      document.querySelector(".login-modal").addEventListener("click", (e) => {
        document.querySelector(".login-modal").style.display = "none";
      }),
      document.querySelector("#sign-btn").addEventListener("click", (e) => {
        (document.querySelector(".mobile-navbar").style.display = "none"),
          (document.querySelector(".login-modal").style.display = "flex"),
          document.querySelectorAll(".input").forEach((e) => {
            window.intlTelInput(e, {
              formatOnDisplay: !0,
              separateDialCode: !0,
              initialCountry: "in",
              autoHideDialCode: !0,
            });
          }),
          document
            .querySelector(".iti__selected-flag")
            .addEventListener("click", (e) => {
              e.stopPropagation();
            });
      }),
      document
        .querySelector(".input-for-mobile-no input")
        .addEventListener("keypress", (e) => {
          ("Enter" == e.key || "enter" == e.key) && onSignInSubmit();
        }),
      document
        .querySelector(".login-container .action-btn-section .close-btn")
        .addEventListener("click", () => {
          document.querySelector(".login-modal").style.display = "none";
        }),
      document
        .querySelector(".confirm-otp-container input")
        .addEventListener("keypress", (e) => {
          ("Enter" == e.key || "enter" == e.key) && confirmOtp();
        });
  });
