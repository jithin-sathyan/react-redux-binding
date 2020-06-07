//import packages
import React from "react";
import { Row, Col, Typography, Layout } from "antd";
import styled from "styled-components";

//import components
import FirstListingComponent from "./FirstListingComponent";
import SecondListingComponent from "./SecondListingComponent";

const { Title } = Typography;
const { Header } = Layout;

const StyledHeader = styled(Header)`
  background-color: #49548d;
  color: #ffffff;
  padding: 8px 12px;
`;

const StyledTitle = styled(Title)`
  color: #ffffff !important;
`;

const StyledDiv = styled.div`
  border: 1px solid #49548d;
  border-radius: 4px;
  margin: 20px 28px;
`;

const ListWrapperComponent = ({
  title,
  firstListTitle,
  secondListTitle,
}) => {
  return (
    <StyledDiv>
      <StyledHeader>
        <StyledTitle level={3}>{title}</StyledTitle>
      </StyledHeader>
      <Row>
        <Col span={24}>
          <FirstListingComponent
            title={firstListTitle}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <SecondListingComponent
            title={secondListTitle}
          />
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default ListWrapperComponent;
