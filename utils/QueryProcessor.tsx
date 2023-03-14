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
    let len = query.length;
    let cur = 0;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      if (query[i] >= '0' && query[i] <= '9') {
        cur = cur * 10 + Number(query[i]);
      }
      else {
        sum += cur;
        cur = 0;
      }
    }
    sum += cur;
    return (
      sum.toString()
    )
    
  }

  if (query.toLowerCase().includes("minus")) {
    let len = query.length;
    let cur = 0;
    let ans = 0;
    let cnt = 0;
    for (let i = 0; i < len; i++) {
      if (query[i] >= '0' && query[i] <= '9') {
        cur = cur * 10 + Number(query[i]);
      }
      else {
        if (cnt == 0) {
          ans += cur;
          cur = 0;
          cnt += 1;
        } else {
          ans -= cur;
        }
      }
    }
    return (
      ans.toString()
    )
    
  }

  return "";
}
