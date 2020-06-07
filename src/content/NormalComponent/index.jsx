//import packages
import React, { useState } from "react";
import { Layout, Typography } from "antd";
import styled from "styled-components";

import ListingComponent from "../../components/ListingComponent";
import ListWrapperComponent from "./ListWrapperComponent";

const { Header, Content } = Layout;
const { Title } = Typography;

const StyledHeader = styled(Header)`
  background-color: #49548d;
  color: #ffffff;
  padding: 8px 12px;
`;

const StyledTitle = styled(Title)`
  color: #ffffff !important;
`;

const StyledLayout = styled(Layout)`
  border: 1px solid #49548d;
  border-radius: 4px;
  margin: 20px 36px;
`;

const NormalParentComponent = () => {
  const [
    itemsForFirstListingComponent,
    setItemsForFirstListingComponent,
  ] = useState([
    { id: "12345", title: "Card A", description: "Card A is a simple card" },
    { id: "23456", title: "Card B", description: "Card B is a simple card" },
    { id: "34567", title: "Card C", description: "Card C is a simple card" },
    { id: "45678", title: "Card D", description: "Card D is a simple card" },
    { id: "56789", title: "Card E", description: "Card E is a simple card" },
  ]);
  const [
    itemsForSecondListingComponent,
    setItemsForSecondListingComponent,
  ] = useState([
    { id: "123456", title: "Card AB", description: "Card AB is a simple card" },
    { id: "234567", title: "Card BC", description: "Card BC is a simple card" },
    { id: "345678", title: "Card CD", description: "Card CD is a simple card" },
    { id: "456789", title: "Card DE", description: "Card DE is a simple card" },
    { id: "567890", title: "Card EF", description: "Card EF is a simple card" },
  ]);
  const [
    itemsForSelectedListingComponent,
    setSelectedListingComponent,
  ] = useState([]);

  const updateFirstList = (item) => {
    updateSelectedList(item);
    const clonnedFirstList = itemsForFirstListingComponent.slice(0);
    const alreadyExistingItemIndex = clonnedFirstList.findIndex(
      (eachItem) => eachItem.id === item.id
    );
    clonnedFirstList[alreadyExistingItemIndex].selected = !clonnedFirstList[
      alreadyExistingItemIndex
    ].selected;

    setItemsForFirstListingComponent(clonnedFirstList);
  };

  const updateSecondList = (item) => {
    updateSelectedList(item);
    const clonnedSecondList = itemsForSecondListingComponent.slice(0);
    const alreadyExistingItemIndex = clonnedSecondList.findIndex(
      (eachItem) => eachItem.id === item.id
    );
    clonnedSecondList[alreadyExistingItemIndex].selected = !clonnedSecondList[
      alreadyExistingItemIndex
    ].selected;
    setItemsForSecondListingComponent(clonnedSecondList);
  };

  const updateSelectedList = (item) => {
    const clonnedSelectedList = itemsForSelectedListingComponent.slice(0);
    const alreadyExistingItemIndex = clonnedSelectedList.findIndex(
      (eachItem) => eachItem.id === item.id
    );
    if (alreadyExistingItemIndex !== -1) {
      clonnedSelectedList.splice(alreadyExistingItemIndex, 1);
    } else {
      clonnedSelectedList.push(item);
    }
    setSelectedListingComponent(clonnedSelectedList);
  };

  return (
    <StyledLayout>
      <StyledHeader>
        <StyledTitle level={2}>Item Listing with State and Props</StyledTitle>
      </StyledHeader>
      <Layout>
        <Content>
          <ListWrapperComponent
            title="List Group"
            firstListTitle="First List"
            firstList={itemsForFirstListingComponent}
            secondListTitle="Second List"
            secondList={itemsForSecondListingComponent}
            updateFirstList={updateFirstList}
            updateSecondList={updateSecondList}
          />
          <ListingComponent
            title="Selected Cards"
            list={itemsForSelectedListingComponent}
          />
        </Content>
      </Layout>
    </StyledLayout>
  );
};

export default NormalParentComponent;
