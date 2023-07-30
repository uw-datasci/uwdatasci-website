export const Tooltip = ({ interactionData }) => {
  if (!interactionData) {
    return null;
  }
  console.log(interactionData);

  return (
    <div
      className="absolute  text-white transform translate-y-1/2"
      style={{
        left: interactionData.xPos,
        top: interactionData.yPos,
        transform: "translateY(50%)"
      }}
    >
      {interactionData.name}
    </div>
  );
};

// ml-1 rounded-sm bg-black  p-1