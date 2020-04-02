import React from "react";
import { Title } from "@ui5/webcomponents-react/lib/Title";
import { BusyIndicator } from "@ui5/webcomponents-react/lib/BusyIndicator";
import { BusyIndicatorSize } from "@ui5/webcomponents-react";
import {
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection
} from "@ui5/webcomponents-react";

export function Detail() {
  return (
    <div>
      <Title>Hello World!</Title>
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
      >
        <BusyIndicator
          size={BusyIndicatorSize.Large}
          active={Boolean("active", true)}
        />
      </FlexBox>
    </div>
  );
}
