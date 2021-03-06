import React from "react";
import { Link } from "react-router-dom";

const MyContent5 = () => {
  return (
    <div className="mainCards">
      <div className="cards-list">
        <Link to="/products?type=кресло">
          <div className="card 1">
            <div className="card_image">
              {" "}
              <img
                src="https://secure.img1-fg.wfcdn.com/im/33104047/resize-h800-w800%5Ecompr-r85/1587/158787734/Lamson.jpg"
                alt=""
              />{" "}
            </div>

            <div className="card_title title-white">
              <p>arm chairs</p>
            </div>
          </div>
        </Link>

        <Link to="/products?type=диван">
          <div className="card 2">
            <div className="card_image">
              <img
                src="https://secure.img1-fg.wfcdn.com/im/04128922/resize-h800-w800%5Ecompr-r85/1445/144506171/Cleo+85%27%27+Genuine+Leather+Sofa.jpg"
                alt=""
              />
            </div>
            <div className="card_title title-white">
              <p>sofas</p>
            </div>
          </div>
        </Link>

        <Link to="/products?type=стол">
          <div className="card 3">
            <div className="card_image">
              <img
                src="https://secure.img1-fg.wfcdn.com/im/27568937/resize-h800-w800%5Ecompr-r85/1679/167943589/Sylva+Solid+Wood+Coffee+Table.jpg"
                alt=""
              />
            </div>
            <div className="card_title title-white">
              <p>tables</p>
            </div>
          </div>
        </Link>
        <Link to="/products?type=кровать">
          <div className="card 4">
            <div className="card_image">
              <img
                src="https://secure.img1-fg.wfcdn.com/im/35067901/resize-h800-w800%5Ecompr-r85/1608/160822430/Bennet+Solid+Wood+and+Upholstered+Bed.jpg"
                alt=""
              />
            </div>
            <div className="card_title title-white">
              <p>beds</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MyContent5;
