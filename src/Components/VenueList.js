import React from "react";

function VenueList() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="details mt-5">
            <h3 className="para ">Decor Shops</h3>
          </div>
          <div className="row mt-5">
            <div className="preview-card">
              <div className="preview-card__wrp">
                <div className="preview-card__item">
                  <div className="preview-card__img">
                    <img
                      src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                      alt=""
                    />
                  </div>
                  <div className="preview-card__content">
                    <span className="preview-card__code">26 December 2019</span>
                    <div className="preview-card__title">Lorem Ipsum Dolor</div>
                    <div className="preview-card__text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Recusandae voluptate repellendus magni illo ea animi?{" "}
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
            </div>
            <div className="preview-card">
              <div className="preview-card__wrp">
                <div className="preview-card__item">
                  <div className="preview-card__img">
                    <img
                      src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                      alt=""
                    />
                  </div>
                  <div className="preview-card__content">
                    <span className="preview-card__code">26 December 2019</span>
                    <div className="preview-card__title">Lorem Ipsum Dolor</div>
                    <div className="preview-card__text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Recusandae voluptate repellendus magni illo ea animi?{" "}
                    </div>
                    <a href="#" className="preview-card__button">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenueList;
