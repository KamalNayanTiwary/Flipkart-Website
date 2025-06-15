import React, { useEffect } from "react";

import { Box, styled } from "@mui/material";

import NavBar from "./Home/NarBar";
import Banner from "./Home/Banner";
import MidSlide from "./Home/MidSlide";
import MidSection from "./Home/MidSection";
import Slide from "./Home/Slide";

import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts as listProducts } from "../redux/actions/productActions";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const getProducts = useSelector((state) => state.getProducts || {});
  const { products } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Component>
        <h1>Homepage Working ✅</h1> {/* ← testing ke liye */}
        <Banner />
        {/* Baki Slide/MidSection bhi yahaan */}
      </Component>
    </>
  );
}; // ✅ Yeh closing curly bracket add karna tha

export default Home;
