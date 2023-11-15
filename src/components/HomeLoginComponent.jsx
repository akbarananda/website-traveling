import React from "react";
import SearchComponent from "./SearchComponent";
import PromoComponent from "./PromoComponent";
import PopularComponent from "./PopularComponent";
import RecomendComponent from "./RecomendComponent";
import AdventureComponent from "./AdventureComponent";
import PopularContent from "./PopularContent";
import FooterComponent from "./FooterComponent";
import Footer2Component from "./Footer2Component";
import NavbarLoginComponet from "./NavbarLoginComponet";

const HomeLoginComponent = () => {
  return (
    <div>
      <NavbarLoginComponet/>
      <SearchComponent />
      <PromoComponent />
      <PopularComponent />
      <RecomendComponent />
      <AdventureComponent />
      <PopularContent />
      <FooterComponent />
      <Footer2Component />
    </div>
  );
};

export default HomeLoginComponent;
