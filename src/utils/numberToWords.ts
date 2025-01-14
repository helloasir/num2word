// Convert numbers to words in US style
export function numberToWordsUS(num: number): string {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const scales = ['', 'thousand', 'million', 'billion', 'trillion'];

  if (num === 0) return 'zero';

  function processGroup(n: number): string {
    if (n === 0) return '';
    
    let result = '';
    
    if (n >= 100) {
      result += ones[Math.floor(n / 100)] + ' hundred ';
      n %= 100;
    }
    
    if (n >= 10 && n < 20) {
      result += teens[n - 10];
      return result;
    }
    
    if (n >= 20 || (n < 10 && n > 0)) {
      if (n >= 20) {
        result += tens[Math.floor(n / 10)];
        n %= 10;
        if (n > 0) result += '-';
      }
      if (n > 0) {
        result += ones[n];
      }
    }
    
    return result;
  }

  let result = '';
  let groupCount = 0;
  
  while (num > 0) {
    const group = num % 1000;
    if (group !== 0) {
      const groupStr = processGroup(group);
      if (groupCount > 0) {
        result = groupStr + ' ' + scales[groupCount] + ' ' + result;
      } else {
        result = groupStr;
      }
    }
    groupCount++;
    num = Math.floor(num / 1000);
  }

  return result.trim();
}

// Convert numbers to words in Indian style
export function numberToWordsIndian(num: number): string {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const scales = ['', 'thousand', 'lakh', 'crore'];

  if (num === 0) return 'zero';

  function processGroup(n: number): string {
    if (n === 0) return '';
    
    let result = '';
    
    if (n >= 10 && n < 20) {
      return teens[n - 10];
    }
    
    if (n >= 20 || (n < 10 && n > 0)) {
      if (n >= 20) {
        result += tens[Math.floor(n / 10)];
        n %= 10;
        if (n > 0) result += '-';
      }
      if (n > 0) {
        result += ones[n];
      }
    }
    
    return result;
  }

  let result = '';
  
  // Handle crores
  const crore = Math.floor(num / 10000000);
  if (crore > 0) {
    result += processGroup(crore) + ' crore ';
    num %= 10000000;
  }
  
  // Handle lakhs
  const lakh = Math.floor(num / 100000);
  if (lakh > 0) {
    result += processGroup(lakh) + ' lakh ';
    num %= 100000;
  }
  
  // Handle thousands
  const thousand = Math.floor(num / 1000);
  if (thousand > 0) {
    result += processGroup(thousand) + ' thousand ';
    num %= 1000;
  }
  
  // Handle hundreds
  const hundred = Math.floor(num / 100);
  if (hundred > 0) {
    result += ones[hundred] + ' hundred ';
    num %= 100;
  }
  
  // Handle remaining tens and ones
  if (num > 0) {
    if (result !== '') result += 'and ';
    result += processGroup(num);
  }

  return result.trim();
}