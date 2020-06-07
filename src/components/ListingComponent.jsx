//import packages
import React from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import { Row, Col, Typography, Card, Layout } from "antd";
import styled from "styled-components";

//import images

const { Title, Text } = Typography;
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

const StyledNoContentTitle = styled(Title)`
  color: #8c8585 !important;
`;

const StyledNoContentWrapper = styled(Col)`
  text-align: center;
  padding: 40px 0;
`;

export default class DictionaryComponent extends React.Component {
  onCardClick = (eachItem) => {
    const { updateList } = this.props;
    if (updateList) {
      updateList(eachItem);
    } else {
      return false;
    }
  };
  render() {
    const { title, list } = this.props;
    return (
      <StyledDiv>
        <StyledHeader>
          <StyledTitle level={4}>{title}</StyledTitle>
        </StyledHeader>
        <Row>
          {list.length ? (
            list.map((eachCard, index) => {
              return (
                <Col
                  key={`${eachCard.id}-key-${index}`}
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={6}
                  style={{ padding: "12px" }}
                >
                  <Card
                    hoverable
                    key={eachCard.id}
                    onClick={() => {
                      this.onCardClick(eachCard);
                    }}
                    title={eachCard.title}
                    extra={
                      eachCard.selected ? <CheckCircleFilled /> : <span></span>
                    }
                  >
                    <Text>{eachCard.description}</Text>
                  </Card>
                </Col>
              );
            })
          ) : (
            <StyledNoContentWrapper span={24}>
              <StyledNoContentTitle level={4}>
                No items to show
              </StyledNoContentTitle>
            </StyledNoContentWrapper>
          )}
        </Row>
      </StyledDiv>
    );
  }
}
