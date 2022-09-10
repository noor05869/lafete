import React, { useEffect } from "react";
import * as api from "../api/api";
import useApi from "../Hooks/useApi";
import { useParams } from "react-router-dom";
function VenueList() {
  let { slug } = useParams();
  console.log(slug);
  const serviceData = useApi(api.getservicesData);
  const fetchData = async () => {
    try {
      const data = await serviceData.request(slug);
    } catch {}
  };
  useEffect(() => {
    fetchData();
  }, [slug]);
  // console.log("-------------->", serviceData?.data?.response.data.images);

  return (
    <div>
      <div>
        <div className="container">
          <div className="details mt-5">
            <h3 className="para ">Decor Shops</h3>
          </div>
          <div className="row mt-5">
            {serviceData?.data?.response.map((data, index) => (
              <>
                <div className="preview-card">
                  <div className="preview-card__wrp">
                    <div className="preview-card__item">
                      <div className="preview-card__img">
                        {slug === "Catering" ? (
                          <img
                            src={data?.services[0].images}
                            // src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                            alt=""
                          />
                        ) : (
                          <img
                            src={data?.images[0]}
                            // src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                            alt=""
                          />
                        )}
                      </div>
                      <div className="preview-card__content">
                        <span className="preview-card__code">
                          26 December 2019
                        </span>
                        <div className="preview-card__title">{data.name}</div>
                        <div className="preview-card__text ">
                          {data.location}
                        </div>
                        <div className="preview-card__text">
                          <strong>seating Capcity : </strong> {data.max_seating}
                        </div>
                        <a
                          href="/VenueDetials
                    
                    "
                          className="preview-card__button"
                        >
                          READ MORE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenueList;
