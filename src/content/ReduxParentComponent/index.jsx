//import packages
import React from "react";
import { Layout, Typography } from "antd";
import styled from "styled-components";

import SelectedListingComponent from "./SelectedListingComponent";
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

const ReduxParentComponent = () => {
  return (
    <StyledLayout>
      <StyledHeader>
        <StyledTitle level={2}>Item Listing with Redux State</StyledTitle>
      </StyledHeader>
      <Layout>
        <Content>
          <ListWrapperComponent
            title="List Group"
            firstListTitle="First List"
            secondListTitle="Second List"
          />
          <SelectedListingComponent title="Selected Cards" />
        </Content>
      </Layout>
    </StyledLayout>
  );
};

export default ReduxParentComponent;
