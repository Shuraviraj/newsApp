import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, url, author, publishedAt: date, sourceName } = props;

  return (
    <div className="my-3">
      <div className="card w-90 shadow p-2 mb-5 bg-body-tertiary rounded">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          <span className="badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>
            {sourceName}
          </span>
        </div>
        <img
          src={imageUrl !== null ? imageUrl : "https://th.bing.com/th/id/OIP.fP7V-1Axp2WxCdYOxOrZsQHaEc?pid=ImgDet&rs=1"}
          className="card-img-top"
          alt="..."
          onError={(e) => (e.target.src = "https://th.bing.com/th/id/OIP.fP7V-1Axp2WxCdYOxOrZsQHaEc?pid=ImgDet&rs=1")}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By author: <strong>{author === null ? "Unknown" : author}</strong> <br />
              published on <b>{new Date(date).toUTCString()}</b>
            </small>
          </p>
          <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-info shadow-sm p-3 mb-5 rounded">
            Read Full News
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
