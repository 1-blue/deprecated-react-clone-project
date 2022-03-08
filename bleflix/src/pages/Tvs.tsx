import React from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";

// components
import Benner from "@src/components/Benner";
import TvCarousels from "@src/components/TvCarousels";
import HeadInfo from "@src/components/common/HeadInfo";

// atom
import { mainTvState } from "@src/atoms";
import Modal from "@src/components/Modal";
import { ITEM_KINDS } from "@src/types";

const Tvs = () => {
  const { tvId } = useParams<{ tvId: string }>();
  const mainTv = useRecoilValue(mainTvState);

  return (
    <>
      <HeadInfo title="bleflix - tvs" image={mainTv?.backdrop_path || mainTv?.poster_path} />

      <Benner item={mainTv} />
      <TvCarousels />

      {/*  TV 상세 모달 */}
      {tvId ? <Modal kinds={ITEM_KINDS.TV} itemId={tvId} /> : null}
    </>
  );
};

export default Tvs;
