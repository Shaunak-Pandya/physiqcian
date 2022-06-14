import React from "react";

function FAQs() {
  return (
    <div class="container">
      <div class="section-title">
        <h2>Frequently Asked Questions</h2>
        <p>
          We are fully aware of the sensitivity of your healthcare information
          and take data privacy extremely seriously. We go to great lengths to
          protect it and will never ever sell it to anyone.
        </p>
      </div>

      <div class="faq-list">
        <ul>
          <li data-aos="fade-up">
            <i class="bx bx-help-circle icon-help"></i>{" "}
            <a
              data-bs-toggle="collapse"
              class="collapse"
              data-bs-target="#faq-list-1"
            >
              What is Physiqcian's view on data security and Privacy?{" "}
              <i class="bx bx-chevron-down icon-show"></i>
              <i class="bx bx-chevron-up icon-close"></i>
            </a>
            <div
              id="faq-list-1"
              class="collapse show"
              data-bs-parent=".faq-list"
            >
              <p>
                At Physiqcian we take data security and privacy extremely
                seriously. It is one of the foundational pillars of our company
                and is implemented at the core of every product. We believe that
                healthcare data is the most sensitive information about you and
                must receive appropriate protection. Practo collects or uses any
                personal or sensitive personal information belonging to you only
                after receiving appropriate and clear consent from you. Further,
                we understand that people change their minds, so no consent is
                permanent and our systems are built with the flexibility so that
                any consent given can later be revoked. This is why all our
                products have features where patients and providers are in
                control and can decide what they want to share and what they
                prefer to keep private.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="100">
            <i class="bx bx-help-circle icon-help"></i>{" "}
            <a
              data-bs-toggle="collapse"
              data-bs-target="#faq-list-2"
              class="collapsed"
            >
              Have you ever faced a data breach?{" "}
              <i class="bx bx-chevron-down icon-show"></i>
              <i class="bx bx-chevron-up icon-close"></i>
            </a>
            <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
              <p>
                No we have not. We will continue to work very hard to make sure
                that data stored with Physiqcian remains secure.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="200">
            <i class="bx bx-help-circle icon-help"></i>{" "}
            <a
              data-bs-toggle="collapse"
              data-bs-target="#faq-list-3"
              class="collapsed"
            >
              Is App compliant with the data security and privacy laws in India?{" "}
              <i class="bx bx-chevron-down icon-show"></i>
              <i class="bx bx-chevron-up icon-close"></i>
            </a>
            <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
              <p>
                Of Course, Our App complies with all applicable laws in every
                country it operates in.
              </p>
            </div>
          </li>

          {/* <li data-aos="fade-up" data-aos-delay="300">
            <i class="bx bx-help-circle icon-help"></i>{" "}
            <a
              data-bs-toggle="collapse"
              data-bs-target="#faq-list-4"
              class="collapsed"
            >
              Tempus quam pellentesque nec nam aliquam sem et tortor consequat?{" "}
              <i class="bx bx-chevron-down icon-show"></i>
              <i class="bx bx-chevron-up icon-close"></i>
            </a>
            <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo.
                Dignissim suspendisse in est ante in. Nunc vel risus commodo
                viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                bibendum est. Purus gravida quis blandit turpis cursus in.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="400">
            <i class="bx bx-help-circle icon-help"></i>{" "}
            <a
              data-bs-toggle="collapse"
              data-bs-target="#faq-list-5"
              class="collapsed"
            >
              Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis
              nunc eget lorem dolor?{" "}
              <i class="bx bx-chevron-down icon-show"></i>
              <i class="bx bx-chevron-up icon-close"></i>
            </a>
            <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
              <p>
                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed.
                Ut venenatis tellus in metus vulputate eu scelerisque.
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default FAQs;
