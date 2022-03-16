import React from "react";
import { useParams } from "react-router";
import BodyDetail from "../../body-detail/body-detail";
import HeaderDetail from "../../header-detail/header-detail";
import { useEffect } from "react";
import Spinner from "../../spinner/spinner";
import Error from "../../error/error";
import { useDispatch } from "react-redux";
import { getDetailData } from "./detailPageSlice";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.cards.status);
  const cocktail = useSelector((state) => state.cards.cocktail);

  useEffect(() => {
    dispatch(getDetailData({ id }));
  }, []);

  return (
    <>
      {status === "loading" && <Spinner />}
      {status === "error" && <Error />}
      {status === "done" && (
        <>
          <HeaderDetail imgUrl={cocktail.imgURL}></HeaderDetail>
          <BodyDetail
            name={cocktail.name}
            comment={cocktail.comment}
            recipe={cocktail.recipe}
            ingredients={cocktail.ingredients}
          ></BodyDetail>
        </>
      )}
    </>
  );
};

export default DetailPage;
