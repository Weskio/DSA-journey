const jsonFixer = {
  fixJson: function (partialJson) {
    let stack = [];
    let i = 0;
    let result = "";

    while (i < partialJson.length) {
      const char = partialJson[i];

      if (char === "{") {
        stack.push("{");
        result += char;
      } else if (char === "}") {
        if (stack.length > 0 && stack[stack.length - 1] === "{") {
          stack.pop();
        }
        result += char;
      } else if (char === '"') {
        let j = i + 1;
        while (j < partialJson.length && partialJson[j] !== '"') {
          j++;
        }
        if (j < partialJson.length) {
          result += partialJson.substring(i, j + 1);
          i = j;
        } else {
          const isKey =
            result.trim().endsWith("{") || result.trim().endsWith(",");
          if (isKey) {
            result += '"UNKNOWN_KEY"';
          } else {
            result += '"VALUE"';
          }
          i = partialJson.length;
        }
      } else if (char === ":") {
        result += char;
        let j = i + 1;
        while (
          j < partialJson.length &&
          (partialJson[j] === " " ||
            partialJson[j] === "\n" ||
            partialJson[j] === "\r" ||
            partialJson[j] === "\t")
        ) {
          j++;
        }
        if (j >= partialJson.length) {
          result += '"VALUE"';
          i = partialJson.length;
        } else {
          i = j - 1;
        }
      } else if (char === ",") {
        result += char;
      } else {
        result += char;
      }

      i++;
    }

    while (stack.length > 0) {
      result += "}";
      stack.pop();
    }

    return result;
  },
};
