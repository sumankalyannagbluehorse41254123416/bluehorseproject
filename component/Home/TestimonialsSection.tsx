"use client";

import React from "react";

const TestimonialsSection = () => {
  const handleExpandVideo = (url: string, title: string) => {
    if (typeof window !== "undefined" && (window as any).expandVideo) {
      (window as any).expandVideo(url, title);
    }
  };

  return (
    <section className="bh_testimonials">
      <div className="container">
        
    
    <h2 className="text-[40px] font-semibold uppercase text-gray-700 mb-6">
      Trusted by the experts globally
    </h2>

    <p className="text-lg text-gray-500  max-w-2xl">
      We have a healthy mix of clients who rely on us for their web and mobile
      app development needs. Our Clients have loved our one-point-contact
      systems for addressing their concerns.
    </p>

  

        <div className="flex gap-10">
          {/* LEFT SECTION */}
          <div className="left_expert_portfolio">
            <div className="expert_box red_gradient">
              <img
                className="bg_img"
                src="https://www.bluehorse.in/testimonial-new/img/expert_img1.png"
                alt=""
              />

              <div className="expert_text_section">
                <div className="client_details">
                  <div className="logo_dection">
                    <img src="https://www.bluehorse.in/testimonial-new/img/kisah_logo 1.png" />
                    <p>
                      <span>Nilesh Mitesh,</span> Founder &amp; designer of{" "}
                      <span className="second_line">KORA</span>
                    </p>
                  </div>
                  <div className="linkdin">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/nileshchhadva/">
                      <img src="https://www.bluehorse.in/testimonial-new/img/devicon_linkedin.png" />
                    </a>
                  </div>
                </div>

                <div className="expert_details">
                  <p>
                    “Great working with your team! We truly value your
                    partnership, and prompt website support.”
                  </p>

                  <a
                    target="_blank"
                    href="https://www.bluehorse.in/work/kora-ecommerce-solutions-for-ethnic-brand"
                    className="view_case-btn">
                    View Casestudy <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="expert_box purple_gradient">
              <img
                className="bg_img"
                src="https://www.bluehorse.in/testimonial-new/img/left4.png"
                alt=""
              />

              <div className="expert_text_section">
                <div className="client_details">
                  <div className="logo_dection">
                    <p>
                      <span>Sandeep Amar,</span> Founder of{" "}
                      <span className="second_line">PDlab.me</span>
                    </p>
                  </div>
                  <div className="linkdin">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/sandeepamar/">
                      <img src="https://www.bluehorse.in/testimonial-new/img/devicon_linkedin.png" />
                    </a>
                  </div>
                </div>

                <div className="testimonial expert_details">
                  <p className="reviewText">
                    “BlueHorse delivers expert tech solutions with solid
                    engineering, complex coding, and 24/7 support.”
                  </p>
                </div>
              </div>
            </div>

            <div className="expert_box big_img purple_gradient">
              <img
                className="bg_img"
                src="https://www.bluehorse.in/testimonial-new/img/expert3.jpg"
                alt=""
              />

              <div className="expert_text_section">
                <div className="client_details">
                  <div className="logo_dection">
                    <img src="https://www.bluehorse.in/testimonial-new/img/creeo.png" />
                    <p>
                      <span>Ayesha R Goyal, </span>
                      <span className="second_line">Founder of Creoo</span>
                    </p>
                  </div>
                  <div className="linkdin">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/ayeshagoyal/">
                      <img src="https://www.bluehorse.in/testimonial-new/img/devicon_linkedin.png" />
                    </a>
                  </div>
                </div>

                <div className="expert_details">
                  <p>
                    "Loved BlueHorse’s can-do attitude—proactive, collaborative,
                    and truly committed to building the right product."
                  </p>

                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      handleExpandVideo(
                        "https://www.youtube.com/embed/SN43mMBNQPE?si=1sUeMJFdecJU7IhG",
                        "Creating Impact: Ayesha R Goyal Sharing his experiences Working with BlueHorse Software",
                      )
                    }>
                    View on YouTube <i className="fas fa-arrow-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="right_expert_portfolio">
            <div className="expert_box big_img purple_gradient">
              <img
                className="bg_img"
                src="https://www.bluehorse.in/testimonial-new/img/right_expert.jpg"
                alt=""
              />

              <div className="expert_text_section">
                <div className="client_details">
                  <div className="logo_dection">
                    <img src="https://www.bluehorse.in/testimonial-new/img/eazydiner_logo.png" />
                    <p>
                      <span>Kapil Chopra,</span> Founder of{" "}
                      <span className="second_line">
                        EazyDiner and The Postcard Hotel
                      </span>
                    </p>
                  </div>
                  <div className="linkdin">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/kapil-chopra-454849117/">
                      <img src="https://www.bluehorse.in/testimonial-new/img/devicon_linkedin.png" />
                    </a>
                  </div>
                </div>

                <div className="expert_details">
                  <p>
                    "BlueHorse is a top IT company with a passionate, dedicated
                    team of tech professionals."
                  </p>
                  <a
                    target="_blank"
                    href="https://www.bluehorse.in/work/eazydiner-tech-solution-for-food-industry"
                    className="view_case-btn">
                    View Casestudy <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
