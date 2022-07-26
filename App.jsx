import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Screen from "./components/Screen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|shou-hou-fen-xi)">
          <Screen {...screenData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group10000069371Data = {
    percent: "9%",
};

const group10000069372Data = {
    percent: "8%",
};

const group10000069373Data = {
    percent: "7%",
};

const screenData = {
    text29: "售后分析",
    text9: "今日售后概况",
    overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/62dfa1f82b3a2856f87a159a/releases/62dfa2022b3a2856f87a159b/img/line-285@2x.png",
    rectangle34624260: "https://anima-uploads.s3.amazonaws.com/projects/62dfa1f82b3a2856f87a159a/releases/62dfa2022b3a2856f87a159b/img/rectangle-34624260@2x.png",
    line285: "https://anima-uploads.s3.amazonaws.com/projects/62dfa1f82b3a2856f87a159a/releases/62dfa2022b3a2856f87a159b/img/line-285@2x.png",
    price1: "¥10,456,291",
    text1: "(仅退款",
    price2: "¥6,291",
    text2: ")",
    text3: "退款金额",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/62dfa1f82b3a2856f87a159a/releases/62dfa2022b3a2856f87a159b/img/line-285@2x.png",
    text4: "售后订单数",
    text5: "7,524,179",
    text6: "(仅退款",
    text8: "6,291",
    text7: ")",
    text42: "售后单类型占比",
    overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/62dfa1f82b3a2856f87a159a/releases/62dfa2022b3a2856f87a159b/img/line-285@2x.png",
    text10: "售后类型",
    text11: "售后单数",
    text12: "占比",
    text13: "类型名称",
    text14: "8,646",
    percent1: "40%",
    text15: "类型名称",
    text19: "4,591",
    percent2: "20%",
    text18: "类型名称",
    text17: "4,591",
    percent3: "10%",
    text16: "类型名称",
    text25: "1,179",
    percent4: "6%",
    text24: "类型名称",
    number: "316",
    percent5: "5%",
    text28: "6%",
    percent6: "5%",
    x5292: "40%",
    x5293: "20%",
    x5294: "10%",
    x5295: "9%",
    x5296: "8%",
    x5291: "7%",
    group10000069371Props: group10000069371Data,
    group10000069372Props: group10000069372Data,
    group10000069373Props: group10000069373Data,
};

