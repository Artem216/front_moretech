import {
  FloatingPanel,
  FloatingPanelRef,
  List,
  Picker,
  Space,
} from "antd-mobile";

import { Button, DateInput } from "@admiral-ds/react-ui";

// import { Button, Col, Rate, Row } from "antd";

import { useEffect, useRef, useState } from "react";
import { useStores } from "../hooks/useStores";
import { observer } from "mobx-react-lite";
import { Typography } from "antd";

const anchors = [0, window.innerHeight - 20];

interface Option {
  value: string | number;
  label: string;
}

const options: Option[] = [
  {
    value: "январь",
    label: "январь",
  },
  {
    value: "февраль",
    label: "февраль",
  },
  {
    value: "март",
    label: "март",
  },
  {
    value: "апрель",
    label: "апрель",
  },
  {
    value: "май",
    label: "май",
  },
  {
    value: "июнь",
    label: "июнь",
  },
  {
    value: "июль",
    label: "июль",
  },
  {
    value: "август",
    label: "август",
  },
  {
    value: "сентябрь",
    label: "сентябрь",
  },
  {
    value: "октябрь",
    label: "октябрь",
  },
  {
    value: "ноябрь",
    label: "ноябрь",
  },
  {
    value: "декабрь",
    label: "декабрь",
  },
];

const basicColumns = [
  [
    { label: "январь", value: "январь" },
    { label: "февраль", value: "февраль" },
    { label: "март", value: "март" },
    { label: "апрель", value: "апрель" },
    { label: "май", value: "май" },
    { label: "июль", value: "июль" },
    { label: "июнь", value: "июнь" },
    { label: "август", value: "август" },
    { label: "сентябрь", value: "сентябрь" },
    { label: "октябрь", value: "октябрь" },
    { label: "ноябрь", value: "ноябрь" },
    { label: "декабрь", value: "декабрь" },
  ],
  [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "2" },
    { label: "4", value: "2" },
    { label: "5", value: "2" },
    { label: "6", value: "2" },
    { label: "7", value: "2" },
    { label: "8", value: "2" },
    { label: "9", value: "2" },
    { label: "10", value: "2" },
    { label: "11", value: "2" },
    { label: "12", value: "2" },
    { label: "13", value: "2" },
    { label: "14", value: "2" },
    { label: "15", value: "2" },
    { label: "16", value: "2" },
    { label: "17", value: "2" },
    { label: "18", value: "2" },
    { label: "19", value: "2" },
    { label: "20", value: "2" },
    { label: "21", value: "2" },
    { label: "22", value: "2" },
    { label: "23", value: "2" },
    { label: "24", value: "2" },
    { label: "25", value: "2" },
    { label: "26", value: "2" },
    { label: "27", value: "2" },
    { label: "28", value: "2" },
    { label: "29", value: "2" },
    { label: "30", value: "2" },
  ],
];

const AppointmentDock = observer(() => {
  const { rootStore } = useStores();
  const ref = useRef<FloatingPanelRef>(null);

  const [value, setValue] = useState<(string | null)[]>(["M"]);

  useEffect(() => {
    if (rootStore.openAppointmentTrigger !== null) {
      console.log("openAppointmentTrigger", rootStore.openAppointmentTrigger);

      ref.current?.setHeight(window.innerHeight - 20);
    }
  }, [rootStore.openAppointmentTrigger]);

  return (
    <FloatingPanel ref={ref} className="appointment-dock" anchors={anchors}>
      <List>
        <Typography.Paragraph
          style={{
            paddingLeft: "9px",
            paddingTop: "9px",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          Выберите время посещения офиса
        </Typography.Paragraph>
        <DateInput />
        <Space wrap style={{ marginTop: "12px" }}>
          <Button appearance="ghost" dimension="m" style={{ gap: "8px" }}>
            {" "}
            9:00
          </Button>
          <Button appearance="ghost" dimension="m" style={{ gap: "8px" }}>
            10:00
          </Button>
          <Button appearance="ghost" dimension="m" style={{ gap: "8px" }}>
            11:00
          </Button>
          <Button appearance="ghost" dimension="m" style={{ gap: "8px" }}>
            12:00
          </Button>
          <Button appearance="ghost" dimension="m" style={{ gap: "8px" }}>
            13:00
          </Button>
          <Button appearance="ghost" dimension="m" style={{ gap: "8px" }}>
            14:00
          </Button>
          <Button appearance="ghost" dimension="m" style={{ gap: "8px" }}>
            15:00
          </Button>
          <Button appearance="ghost" dimension="m" style={{ gap: "8px" }}>
            16:00
          </Button>
          <Button appearance="ghost" dimension="m" style={{ gap: "8px" }}>
            17:00
          </Button>
          <Button appearance="ghost" dimension="m" style={{ gap: "8px" }}>
            18:00
          </Button>
          <Button appearance="ghost" dimension="m" style={{ gap: "8px" }}>
            19:00
          </Button>
          <Button appearance="ghost" dimension="m" style={{ gap: "8px" }}>
            20:00
          </Button>
        </Space>
        <List style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              width: "300px",
              borderRadius: "8px",
              background:
                "var(--linear, linear-gradient(92deg, #1E4BD2 1.07%, #05AAFF 98.53%))",
              gap: "10px",
            }}
          >
            Записаться в отделение
          </Button>
        </List>
      </List>
    </FloatingPanel>
  );
});

export default AppointmentDock;
