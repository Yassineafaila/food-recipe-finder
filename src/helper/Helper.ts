
//This function is responsible for getting the url of the recipe
const extractId = (fullId: string): string | null => {
  // Regular expression to extract the desired portion
  const regex = /#recipe_(\w+)/;
  const match = fullId.match(regex);
  if (match && match.length > 1) {
    return match[1]; // Extracted ID
  }
  return null; // Return null if no match found
};
export default extractId;
