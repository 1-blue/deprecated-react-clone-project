import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

interface IHeadInfoProps {
  title?: string;
  description?: string;
  image?: string;
}

const HeadInfo = ({ title, description, image }: IHeadInfoProps) => {
  const { pathname } = useLocation();

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="keyword" content="blecoin, React.js, 코인클론사이트" />
      <meta name="description" content={description} />
      <meta name="author" content="1-blue" />

      <meta property="og:url" content={`https://1-blue.github.io/react-clone-project${pathname}`} />
      <meta property="og:title" content="blecoin" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="blecoin" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image:width" content="486" />
      <meta property="og:image:height" content="600" />
    </Helmet>
  );
};

HeadInfo.defaultProps = {
  title: "Blecoin",
  description: "코인클론사이트 by 노마드코더, React.js",
  image: "https://cryptoicon-api.vercel.app/api/icon/btc",
};

export default HeadInfo;
