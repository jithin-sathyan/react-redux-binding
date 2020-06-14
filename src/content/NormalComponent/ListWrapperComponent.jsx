//import packages
import React from "react";
import { Row, Col, Typography, Layout } from "antd";
import styled from "styled-components";

//import components
import ListingComponent from "../../components/ListingComponent";

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
  firstList,
  secondListTitle,
  secondList,
  updateFirstList,
  updateSecondList,
}) => {
  return (
    <StyledDiv>
      <StyledHeader>
        <StyledTitle level={3}>{title}</StyledTitle>
      </StyledHeader>
      <Row>
        <Col span={24}>
          <ListingComponent
            title={firstListTitle}
            list={firstList}
            updateList={updateFirstList}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <ListingComponent
            title={secondListTitle}
            list={secondList}
            updateList={updateSecondList}
          />
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default ListWrapperComponent;
