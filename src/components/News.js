import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const updateNews = async (pageNo) => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&country=${props.country}&page=${pageNo}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResult(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews(page);
  }, []);

  const fetchMoreData = async () => {
    // this.updateNews(this.state.page + 1);
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&country=${props.country}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResult(parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "90px" }}>
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResult} loader={<Spinner />}>
        <div className="container">
          <div className="row">
            {articles.map((e) => {
              let {
                url,
                title,
                description,
                urlToImage,
                author,
                publishedAt,
                source: { name },
              } = e;
              return (
                <div key={url} className="col-md-4">
                  <NewsItem title={title} description={description} imageUrl={urlToImage} url={url} author={author} publishedAt={publishedAt} sourceName={name} />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

//************************************BELOW IS CLASS BASED CODE******************** */
// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 9,
//     category: "general",
//   };
//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

//   capitalizeFirstLetter = (str) => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResult: 0,
//     };
//     document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;
//   }

//   async updateNews(pageNo) {
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&country=${props.country}&page=${pageNo}&pageSize=${props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     props.setProgress(70);
//     this.setState({
//       articles: parsedData.articles,
//       totalResult: parsedData.totalResults,
//       loading: false,
//     });
//     props.setProgress(100);
//   }

//   async componentDidMount() {
//     this.updateNews(this.state.page);
//   }

//   // handlePreClick = async () => {
//   //   this.setState({ page: this.state.page - 1 });
//   //   this.updateNews(this.state.page - 1);
//   // };

//   // handleNextClick = () => {
//   //   this.setState({ page: this.state.page + 1 });
//   //   this.updateNews(this.state.page + 1);
//   // };

//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 });
//     // this.updateNews(this.state.page + 1);
//     const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&country=${props.country}&page=${this.state.page + 1}&pageSize=${
//       props.pageSize
//     }`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       articles: this.state.articles.concat(parsedData.articles),
//       totalResult: parsedData.totalResults,
//       loading: false,
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1 className="text-center" style={{ margin: "35px 0px" }}>
//           NewsMonkey - Top {this.capitalizeFirstLetter(props.category)} Headlines
//         </h1>
//         {this.state.loading && <Spinner />}
//         <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResult} loader={<Spinner />}>
//           <div className="container">
//             <div className="row">
//               {this.state.articles.map((e) => {
//                 let {
//                   url,
//                   title,
//                   description,
//                   urlToImage,
//                   author,
//                   publishedAt,
//                   source: { name },
//                 } = e;
//                 return (
//                   <div key={url} className="col-md-4">
//                     <NewsItem title={title} description={description} imageUrl={urlToImage} url={url} author={author} publishedAt={publishedAt} sourceName={name} />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </InfiniteScroll>
//       </>
//     );
//   }
// }

// export default News;
