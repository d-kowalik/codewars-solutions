-- https://www.codewars.com/kata/return-the-first-m-multiples-of-n/train/haskell

module Multiples where

multiples :: Int -> Double -> [Double]
multiples m n = take m $ map (*n) [1..]