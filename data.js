export const data = {
  decisionTrees: [
    { id: 1, name: "Decision Tree 1" },
    { id: 2, name: "Decision Tree 2" },
  ],
  nodes: [
    {
      id: 1,
      decisionTreeId: 1,
      type: "boolean",
      name: "Has condition A?",
      trueNodeId: 2,
      falseNodeId: 3,
    },
    {
      id: 2,
      decisionTreeId: 1,
      type: "boolean",
      name: "Age > 65?",
      trueNodeId: 4,
      falseNodeId: 3,
    },
    {
      id: 3,
      decisionTreeId: 1,
      type: "recommendation",
      name: "No screening needed",
      trueNodeId: null,
      falseNodeId: null,
    },
    {
      id: 4,
      decisionTreeId: 1,
      type: "recommendation",
      name: "Screening recommended",
      trueNodeId: null,
      falseNodeId: null,
    },
  ],
};
