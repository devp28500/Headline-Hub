import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Card from "../components/card";
import ButtonLink from "../components/button-link";
import AutoComplete from "../components/autocomplete";
import Loading from "../components/loading";
import NoNewsPage from "../news/no-news-page";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { convertDate } from "../utils/commonUtils";
import { countryRoles } from "../constants/common-constants";
import AppContext from "../AppContext";
import classes from "./News.module.css";

const News = (props) => {
  const { newsData = [] } = props;
  const [_newsData, _setNewsData] = useState();

  const { getCountry, updateCountry, getLoading } = useContext(AppContext);

  const navigate = useNavigate();

  const openNewsDetails = useCallback((news) => {
    // eslint-disable-next-line no-restricted-globals
    open(news.url);
  }, []);

  useEffect(() => {
    _setNewsData(newsData);
  }, [newsData]);

  return (
    <div className={classes["news-conatiner"]}>
      <div className={classes["header"]}>
        <Header headerTitle="Headline Hub">
          <div className={classes["header-right-conatiner"]}>
            <AutoComplete
              options={countryRoles}
              disableClearable={false}
              isOptionEqualToValue={(option, value) => {
                return option.code === value.code;
              }}
              getOptionLabel={(option) => option.name}
              value={getCountry}
              onChange={(e, value) => {
                updateCountry(value);
              }}
              textFieldProps={{ placeholder: "Select a country." }}
            />
            <ButtonLink
              label="All"
              variant="h6"
              onClick={() => {
                navigate("/");
              }}
            />
            <ButtonLink
              label="Technology"
              variant="h6"
              onClick={() => {
                navigate("/technology");
              }}
            />
            <ButtonLink
              label="Science"
              variant="h6"
              onClick={() => {
                navigate("/science");
              }}
            />
            <ButtonLink
              label="Business"
              variant="h6"
              onClick={() => {
                navigate("/business");
              }}
            />
            <ButtonLink
              label="Entertainment"
              variant="h6"
              onClick={() => {
                navigate("/entertainment");
              }}
            />
            <ButtonLink
              label="Health"
              variant="h6"
              onClick={() => {
                navigate("/health");
              }}
            />
            <ButtonLink
              label="Sports"
              variant="h6"
              onClick={() => {
                navigate("/sports");
              }}
            />
          </div>
        </Header>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}
        className={classes["news-body"]}
      >
        {getLoading && <Loading />}
        {newsData?.length === 0 && !getLoading && <NoNewsPage />}
        {_newsData?.length > 0 &&
          !getLoading &&
          _newsData.map((news, index) => {
            return (
              <Card
                key={index}
                title={news.title}
                description={news.description}
                image={news.urlToImage}
                imageHeight={245}
                buttonText="Read More"
                buttonEndIcon={<ArrowForwardIcon />}
                source={news.source?.name}
                publishedDate={convertDate(news.publishedAt)}
                onButtonClick={() => {
                  openNewsDetails(news);
                }}
                onDoubleClick={() => {
                  openNewsDetails(news);
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default News;
