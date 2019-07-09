// https://www.codewars.com/kata/find-the-unique-number-1/train/javascript

findUniq = a =>
  a.filter(n => n !== a[0]).length > 1 ? a[0] : a.filter(n => n !== a[0])[0]
