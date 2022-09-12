import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../Hooks/useApi";
import Navbar from "./Navbar";
import Slider from "./slider/Slider";
import * as api from "../api/api";
import imag1 from "../asset/img/about/1.jpg";
import imag2 from "../asset/img/about/2.jpg";
import imag3 from "../asset/img/about/3.jpg";
import imag4 from "../asset/img/about/4.jpg";
function VenueDetialsPage() {
  const id = useParams();
  const getSingleDetail = useApi(api.getSingleServices);
  console.log("useParams", id);
  const fetchData = async () => {
    try {
      const data = await getSingleDetail.request(id);
    } catch {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  const resData = getSingleDetail?.data?.response?.data;
  console.log("response", getSingleDetail?.data);
  return (
    <>
      {/* navbar */}
      {/* <Navbar /> */}
      <div class="container my-5">
        <div class="ombre-externe">
          <div class="ombre-interne">
            <div
              id="carouselExampleCaptions"
              class="carousel slide "
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                {getSingleDetail?.data?.response?.data?.images.map((data) => (
                  <div class="carousel-item active">
                    <img
                      // src="https://nsm09.casimages.com/img/2021/07/21//21072103063525998217500508.jpg"
                      src={data}
                      class="d-block w-100 peinture-ombre-interne-fine"
                      alt="..."
                    />
                    <div class="carousel-caption">
                      <p></p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* <!-- ombre-interne -->
	</div> */}
          {/* <!-- ombre-externe --> */}
        </div>
      </div>
      {/* Details */}

      <div class="  container bg-white pt-4  elementor-widget-wrap elementor-element-populated">
        <div
          class="elementor-element elementor-element-d2b1b77 elementor-widget elementor-widget-jet-breadcrumbs"
          data-id="d2b1b77"
          data-element_type="widget"
          data-widget_type="jet-breadcrumbs.default"
        >
          <div class="elementor-widget-container">
            <div class="elementor-jet-breadcrumbs jet-blocks">
              <div class="jet-breadcrumbs">
                <div class="jet-breadcrumbs__content">
                  <div class="jet-breadcrumbs__wrap">
                    <div class="jet-breadcrumbs__item">
                      <div class="jet-breadcrumbs__item-sep">
                        <span class="jet-blocks-icon">
                          <i aria-hidden="true" class="fas fa-angle-right"></i>
                        </span>
                      </div>
                    </div>{" "}
                    <div class="jet-breadcrumbs__item">
                      <div class="jet-breadcrumbs__item-sep">
                        <span class="jet-blocks-icon">
                          <i aria-hidden="true" class="fas fa-angle-right"></i>
                        </span>
                      </div>
                    </div>{" "}
                    <div class="jet-breadcrumbs__item">
                      <div class="jet-breadcrumbs__item-sep">
                        <span class="jet-blocks-icon">
                          <i aria-hidden="true" class="fas fa-angle-right"></i>
                        </span>
                      </div>
                    </div>{" "}
                    <div class="jet-breadcrumbs__item">
                      <span class="jet-breadcrumbs__item-target">
                        {resData?.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div
          class="elementor-element elementor-element-f731a95 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
          data-id="f731a95"
          data-element_type="widget"
          data-widget_type="theme-post-title.default"
        ></div>
        <div
          class="elementor-element elementor-element-651aba6 elementor-widget elementor-widget-jet-listing-dynamic-field"
          data-id="651aba6"
          data-element_type="widget"
          data-widget_type="jet-listing-dynamic-field.default"
        >
          <div class="elementor-widget-container">
            <div class="jet-listing jet-listing-dynamic-field display-inline">
              <div class="jet-listing-dynamic-field__inline-wrap">
                <i
                  class="jet-listing-dynamic-field__icon fas fa-map-marker-alt"
                  aria-hidden="true"
                ></i>
                <div class="jet-listing-dynamic-field__content">
                  {resData?.location}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div
          class="elementor-element elementor-element-5cf624f elementor-widget elementor-widget-jet-listing-dynamic-terms"
          data-id="5cf624f"
          data-element_type="widget"
          data-widget_type="jet-listing-dynamic-terms.default"
        >
          <div class="elementor-widget-container">
            <div class="jet-listing jet-listing-dynamic-terms">
              <span class="jet-listing-dynamic-terms__prefix ">Type: </span>
              <a
                href="https://venuehub.pk/venue-types/farm-houses/"
                class="jet-listing-dynamic-terms__link"
              >
                {resData?.Sk}
              </a>
            </div>{" "}
          </div>
        </div>
        <div
          class="elementor-element elementor-element-ce4887f elementor-widget elementor-widget-jet-listing-dynamic-terms"
          data-id="ce4887f"
          data-element_type="widget"
          data-widget_type="jet-listing-dynamic-terms.default"
        >
          <div class="elementor-widget-container">
            <div class="jet-listing jet-listing-dynamic-terms">
              <span class="jet-listing-dynamic-terms__prefix">Localities:</span>
              <a
                href="https://venuehub.pk/venue-location/barki-road/"
                class="jet-listing-dynamic-terms__link"
              >
                {resData?.state}
              </a>
              <span class="jet-listing-dynamic-terms__delimiter"> |</span>{" "}
              <a
                href="https://venuehub.pk/venue-location/lahore/"
                class="jet-listing-dynamic-terms__link"
              >
                {resData?.city}
              </a>
              <span class="jet-listing-dynamic-terms__delimiter"> |</span>{" "}
              <a
                href="https://venuehub.pk/venue-location/polo-club/"
                class="jet-listing-dynamic-terms__link"
              >
                Polo Club
              </a>
            </div>{" "}
            <div class="jet-listing jet-listing-dynamic-terms">
              <strong class="jet-listing-dynamic-terms__prefix">
                MAx Seating Capcity:
              </strong>
              <a
                href="https://venuehub.pk/venue-location/barki-road/"
                class="jet-listing-dynamic-terms__link"
              >
                {resData?.max_seating}
              </a>
            </div>{" "}
            <div class="jet-listing jet-listing-dynamic-terms">
              <strong class="jet-listing-dynamic-terms__prefix">
                Per Head :
              </strong>
              <a
                href="https://venuehub.pk/venue-location/barki-road/"
                class="jet-listing-dynamic-terms__link"
              >
                {resData?.per_head}
              </a>
            </div>{" "}
            <div class="jet-listing jet-listing-dynamic-terms">
              <strong class="jet-listing-dynamic-terms__prefix">Slots :</strong>
              {resData?.slot.map((data) => (
                <a
                  href="https://venuehub.pk/venue-location/barki-road/"
                  class="jet-listing-dynamic-terms__link"
                >
                  {data}
                </a>
              ))}
            </div>{" "}
            <div class="jet-listing jet-listing-dynamic-terms">
              <strong class="jet-listing-dynamic-terms__prefix">Menus :</strong>
              {resData?.menus.map((data) => (
                <a
                  href="https://venuehub.pk/venue-location/barki-road/"
                  class="jet-listing-dynamic-terms__link"
                >
                  {`${data.bread}|${data.curry}|${data.desserts}|${data.rice}`}
                </a>
              ))}
            </div>{" "}
          </div>
        </div>
        <section class="page-section" id="about">
          <div class="container">
            <div class="text-center">
              <h2 class="section-heading text-uppercase">About</h2>
              <h3 class="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <ul class="timeline">
              <li>
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src={imag1} alt="..." />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>2009-2011</h4>
                    <h4 class="subheading">Our Humble Beginnings</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ut voluptatum eius sapiente, totam reiciendis
                      temporibus qui quibusdam, recusandae sit vero unde, sed,
                      incidunt et ea quo dolore laudantium consectetur!
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src={imag2} alt="..." />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 class="subheading">An Agency is Born</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ut voluptatum eius sapiente, totam reiciendis
                      temporibus qui quibusdam, recusandae sit vero unde, sed,
                      incidunt et ea quo dolore laudantium consectetur!
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src={imag3} alt="..." />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>December 2015</h4>
                    <h4 class="subheading">Transition to Full Service</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ut voluptatum eius sapiente, totam reiciendis
                      temporibus qui quibusdam, recusandae sit vero unde, sed,
                      incidunt et ea quo dolore laudantium consectetur!
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <img class="rounded-circle img-fluid" src={imag4} alt="..." />
                </div>
                <div class="timeline-panel">
                  <div class="timeline-heading">
                    <h4>July 2020</h4>
                    <h4 class="subheading">Phase Two Expansion</h4>
                  </div>
                  <div class="timeline-body">
                    <p class="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ut voluptatum eius sapiente, totam reiciendis
                      temporibus qui quibusdam, recusandae sit vero unde, sed,
                      incidunt et ea quo dolore laudantium consectetur!
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-inverted">
                <div class="timeline-image">
                  <h4>
                    Be Part
                    <br />
                    Of Our
                    <br />
                    Story!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default VenueDetialsPage;
