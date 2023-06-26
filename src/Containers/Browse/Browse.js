import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "../AnimatedPage/AnimatedPage";

import { ReactComponent as Grids } from "../../Resources/images/grid.svg";
import { ReactComponent as Columns } from "../../Resources/images/columns.svg";

import Filters from "../../Components/Filters/Filters";
import Grid from "../../Components/Grid/Grid";
import games from "../../utils/games";
import styles from "./Browse.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import Cart from "../../Components/Cart/Cart";
import Footer from "../../Components/Footer/Footer";

const Browse = (props) => {
  const {
    handleHover,
    handleSelect,
    hoverState,
    currentFilter,
    shownGames,
    setShownGames,
    clearFilter,
    setReviewDisplay,
    reviewDisplay,
    allGames,
    setAllGames,
    handleLike,
    handleHoverGame,
    cart,
    cartAmount,
    handleAddToCart,
    handleSelectGame,
    handleSearch,
    handleSearchSubmit,
    search,
    searching,
    browsing,
    handleBrowse,
    handleHome,
    handleOpenCart,
    cartDisplayed,
    clearCart,
    handleRemoveFromCart,
    setHoverState,
    openGamePage,
  } = props;

  const navigate = useNavigate();
  const [landingPage, setLandingPage] = useState(false);
  const [grid, setGrid] = useState(true);

  const handleLayoutSwitch = (e) => {
    if (e.target.id == "grid") {
      setGrid(true);
    } else {
      setGrid(false);
    }
  };

  useEffect(() => {
    if (currentFilter === "none") {
      setShownGames(allGames);
    } else if (
      currentFilter != "Ratings" &&
      currentFilter != "Reviews" &&
      currentFilter != "Wishlist"
    ) {
      let filteredShownGames = allGames.filter(
        (game) => game.genre === currentFilter
      );
      setShownGames(filteredShownGames);
    } else if (currentFilter === "Ratings") {
      let filteredShownGames = allGames.slice(0);
      filteredShownGames = filteredShownGames.sort(function (a, b) {
        return b.rating - a.rating;
      });
    } else if (currentFilter === "Reviews") {
      setReviewDisplay(true);
    } else if (currentFilter === "Wishlist") {
      let filteredShownGames = allGames.filter((game) => game.isLiked === true);
      setShownGames(filteredShownGames);
    }
  }, [currentFilter]);

  return <div>browse</div>;
};

export default Browse;
