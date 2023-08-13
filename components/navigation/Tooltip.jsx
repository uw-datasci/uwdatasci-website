import { useEffect } from "react";

export const Tooltip = ({ interactionData, courses, setClosestCourses }) => {
  if (!interactionData) {
    // setClosestCourses([]);
    return null;
  }

  const euclideanDistance = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      throw new Error("Arrays must have the same length");
    }
    let dotProductSum = 0;
    let normASum = 0;
    let normBSum = 0;
    for (let i = 0; i < arr1.length; i++) {
      dotProductSum += arr1[i] * arr2[i];
      normASum += Math.pow(arr1[i], 2);
      normBSum += Math.pow(arr2[i], 2);
    }
    return dotProductSum / (Math.sqrt(normASum) * Math.sqrt(normBSum));
  };

  console.log(interactionData);

  const getIndicesOfSmallestNumbers = (arr, n) => {
    const indices = [];
    for (let i = 0; i < n; i++) {
      let minIndex = 0;
      for (let j = 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      indices.push(minIndex);
      arr.splice(minIndex, 1);
    }
    return indices;
  };

  const getClosestCourses = () => {
    const distances = courses.map((a) =>
      euclideanDistance(a.sm_sbert, interactionData.obj.sm_sbert)
    );
    const smallestN = getIndicesOfSmallestNumbers(distances, 10);
    const closestCourses = smallestN.map((sm) => courses[sm]);
    closestCourses.push(interactionData);
    setClosestCourses(closestCourses);
    console.log(closestCourses);
  };

  useEffect(() => {
    getClosestCourses();
  }, [interactionData]);
  
  return (
    <div
      className="absolute translate-y-72 translate-x-2 transform text-white bg-black p-2 rounded-sm"
      style={{
        left: interactionData.xPos,
        top: interactionData.yPos,
      }}
    >
      {interactionData.name}
    </div>
  );
};
