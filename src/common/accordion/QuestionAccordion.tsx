import { Collapse, CollapseProps } from "antd";

type TProp = {
  title: string;
  description: string;
};

const QuestionAccordion = ({ data }: { data: TProp[] }) => {
  const panelStyle: React.CSSProperties = {
    marginBottom: 10,
    // background: "#F9FBFF",
    borderColor: "#F5F5F5",
    fontSize: 18,
  };
  const accordionItems: CollapseProps["items"] = data.map((item, index) => {
    return {
      key: index,
      label: item.title,
      children: item.description,
      style: panelStyle,
    };
  });
  return (
    <Collapse
      defaultActiveKey={["0"]}
      expandIconPosition={"end"}
      items={accordionItems}
    />
  );
};

export default QuestionAccordion;
