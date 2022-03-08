import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "react-query";

// fetcher
import { searchFetcher } from "@src/api";

// common-component
import Loader from "@src/components/common/Loader";
import HeadInfo from "@src/components/common/HeadInfo";

// component
import Benner from "@src/components/Benner";

// type
import { ISearchItems, ITEM_KINDS } from "@src/types";
import Carousel from "@src/components/Carousel";
import Modal from "@src/components/Modal";

const Search = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const { query } = useParams<{ query: string }>();
  const { data: items, isLoading } = useQuery<ISearchItems>(["search", query], () =>
    searchFetcher({ query: query + "" }),
  );
  const location = useLocation();
  const state = location.state as { media_type: ITEM_KINDS };

  if (!items || isLoading) return <Loader />;

  const filteredItems = items.results.filter(item => item.backdrop_path);
  const filteredMovies = filteredItems.filter(item => item.media_type === ITEM_KINDS.MOVIE);
  const filteredTv = filteredItems.filter(item => item.media_type === ITEM_KINDS.TV);

  return (
    <>
      <HeadInfo title="bleflix - search" image={filteredItems[0].backdrop_path} />

      <Benner item={filteredItems[0]} />

      {filteredMovies.length >= 1 && (
        <Carousel kinds={items.results[0].media_type} title="영화 검색 결과" items={filteredMovies} />
      )}

      {filteredTv.length >= 1 && (
        <Carousel kinds={items.results[0].media_type} title="TV 검색 결과" items={filteredTv} />
      )}

      {itemId ? <Modal kinds={state.media_type || ITEM_KINDS.MOVIE} itemId={itemId} /> : null}
    </>
  );
};

export default Search;
