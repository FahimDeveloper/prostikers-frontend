import { Collapse, CollapseProps } from "antd";

type TProp = {
  title: string;
  description: string;
};

const QuestionAccordion = ({ data }: { data: TProp[] }) => {
  const panelStyle: React.CSSProperties = {
    borderColor: "#F1F1F1",
    fontSize: 18,
    backgroundColor: "#F9FBFF",
    fontWeight: 500,
  };
  const accordionItems: CollapseProps["items"] = data.map((item, index) => {
    const isLinkDescription = item.description.includes(
      '<a href="/coming-soon">Click here</a>'
    );
    return {
      key: index,
      label: item.title,
      children: isLinkDescription ? (
        <div dangerouslySetInnerHTML={{ __html: item.description }} />
      ) : (
        item.description
      ),
      style: panelStyle,
    };
  });
  return (
    <Collapse
      style={{ border: "1px solid #f1f1f1" }}
      expandIconPosition={"end"}
      items={accordionItems}
    />
  );
};

export default QuestionAccordion;
