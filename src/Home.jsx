import React, { useState } from "react";
import "@ui5/webcomponents/dist/icons/add";
import { MessageToast } from "@ui5/webcomponents-react/lib/MessageToast";
import "@ui5/webcomponents/dist/icons/order-status";
import { useHistory } from "react-router-dom";
import {
  Card,
  Text,
  ShellBar,
  ShellBarItem,
  List,
  StandardListItem,
  ValueState,
  ProgressIndicator,
  Title,
  TitleLevel,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
  AnalyticalTable
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";

export function Home() {
  const [toggleCharts, setToggleCharts] = useState("LineChart");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const handleProgressHeaderClick = () => {
    history.push("/detail");
  };

  const handleHeaderClick = () => {
    if (toggleCharts === "lineChart") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("barChart");
      }, 2000);
      MessageToast.success("Changing to Bar Chart");
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("lineChart");
      }, 2000);
      MessageToast.success("Changing to Line Chart");
    }
  };

  const contentTitle =
    toggleCharts === "lineChart" ? "Line Chart" : "Bar Chart";
  const switchToChart =
    toggleCharts === "lineChart" ? "Bar Chart" : "Line Chart";

  const datasets = [
    {
      label: "Stock Price",
      data: [65, 59, 80, 81, 56, 55, 40, 0]
    }
  ];
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];

  const tableData = new Array(500).fill(null).map((_, index) => {
    return {
      name: `name${index}`,
      age: Math.floor(Math.random() * 100),
      friend: {
        name: `friend.Name${index}`,
        age: Math.floor(Math.random() * 100)
      }
    };
  });

  const tableColumns = [
    {
      Header: "Name",
      accessor: "name" //String-based value accessors!
    },
    {
      Header: "Age",
      accessor: "age"
    },
    {
      Header: "Friend Name",
      accessor: "friend.name"
    },
    {
      Header: "Friend age",
      accessor: "friend.age"
    }
  ];

  return (
    <FlexBox
      justifyContent={FlexBoxJustifyContent.Center}
      wrap={FlexBoxWrap.Wrap}
    >
      <Card
        heading="Stock Price Fiscal Year 2020"
        headerInteractive
        onHeaderClick={handleHeaderClick}
        subtitle={`Click here to switch to ${switchToChart}`}
        style={{ width: "300px", ...spacing.sapUiContentPadding }}
      >
        <Text style={spacing.sapUiContentPadding}>
          {contentTitle} for Fiscal Year 2020
        </Text>
        {toggleCharts === "lineChart" ? (
          <LineChart datasets={datasets} labels={labels} loading={loading} />
        ) : (
          <BarChart datasets={datasets} labels={labels} loading={loading} />
        )}
      </Card>
      <Card
        heading="Activity Progress"
        subtitle="List of activities for Fiscal Year 2020"
        style={{ width: "300px", ...spacing.sapUiContentPadding }}
        headerInteractive
        onHeaderClick={handleProgressHeaderClick}
        avatar="sap-icon://order-status"
        status="5 of 22"
      >
        <List>
          <StandardListItem info="completed" infoState={ValueState.Success}>
            Activity 1
          </StandardListItem>
          <StandardListItem info="cancelled" infoState={ValueState.Error}>
            Activity 2
          </StandardListItem>
          <StandardListItem
            info="in progress"
            infoState={ValueState.Warning}
            style={{ height: "80px" }}
          >
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level={TitleLevel.H5}>Activity 3</Title>
              <ProgressIndicator
                displayValue="89%"
                percentValue={89}
                width="180px"
                state={ValueState.Success}
              />
            </FlexBox>
          </StandardListItem>
          <StandardListItem
            info="in progress"
            infoState={ValueState.Warning}
            style={{ height: "80px" }}
          >
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level={TitleLevel.H5}>Activity 4</Title>
              <ProgressIndicator
                displayValue="45%"
                percentValue={45}
                width="180px"
                state={ValueState.Warning}
              />
            </FlexBox>
          </StandardListItem>
        </List>
      </Card>
      <Card
        heading="People"
        style={{ maxWidth: "950px", ...spacing.sapUiContentPadding }}
      >
        <AnalyticalTable
          data={tableData}
          columns={tableColumns}
          visibleRows={5}
        />
      </Card>
    </FlexBox>
  );
}
