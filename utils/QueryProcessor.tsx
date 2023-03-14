export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "Teresa Wan"
    );
  }

  if (query.toLowerCase().includes("plus")) {
    let matches = query.match(/\d+/g);
    let len = matches?.length;
    if (!len)
      return "0";
      
    let sum = 0;
    for (let i = 0; i < len; i++) {
      sum += matches[i];
    }
    return (
      sum.toString()
    );
  }

  return "";
}
