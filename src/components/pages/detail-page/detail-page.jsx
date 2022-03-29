import React, { useEffect } from "react";
import { useParams } from "react-router";
import BodyDetail from "../../body-detail/body-detail";
import HeaderDetail from "../../header-detail/header-detail";
import Spinner from "../../spinner/spinner";
import Error from "../../error/error";
import { useDispatch, useSelector } from "react-redux";
import { getDetailData } from "./detailPageSlice";
import Bookmark from "../../bookmark/bookmark";
import "./detail-page.scss";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.detail.status);
  const cocktail = useSelector((state) => state.detail.cocktail);

  useEffect(() => {
    dispatch(getDetailData({ id }));
  }, [dispatch, id]);

  return (
    <div className="detail-page">
      {status === "loading" && <Spinner />}
      {status === "error" && <Error />}
      {status === "done" && (
        <>
          <Bookmark className="detail-page__bookmark" id={id} />
          <HeaderDetail imgUrl={cocktail.imgURL}></HeaderDetail>
          <BodyDetail
            key={cocktail.name}
            name={cocktail.name}
            comment={cocktail.comment}
            recipe={cocktail.recipe}
            ingredients={cocktail.ingredients}
          ></BodyDetail>
        </>
      )}
    </div>
  );
};

export default DetailPage;
