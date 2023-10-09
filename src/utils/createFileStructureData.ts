import { IFileStructure } from "@/interface/common";

function calculateChildCount(node: IFileStructure) {
  if (!node.children) {
    return 0;
  }

  let childCount = node.children.length;

  for (const child of node.children) {
    childCount += calculateChildCount(child);
  }

  return childCount;
}

function addTotalChildCount(data: IFileStructure) {
  const newData = { ...data };
  newData.totalChildCount = calculateChildCount(newData);

  if (newData.children) {
    let previousSiblingCount = 0;

    newData.children = newData.children.map((child) => {
      // Add the total child count of previous siblings to each sibling
      child.previousSiblingCount = previousSiblingCount;
      previousSiblingCount += calculateChildCount(child);

      return addTotalChildCount(child);
    });
  }

  return newData;
}
export default addTotalChildCount;
