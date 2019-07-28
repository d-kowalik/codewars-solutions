-- https://www.codewars.com/kata/shortest-steps-to-a-number/train/haskell

module ShortestSteps (steps) where

steps :: Int -> Int
steps = countSteps
      where countSteps n
              | n == 1 = 0
              | even n && n `div` 2 > 1 = 1 + countSteps (n `div` 2)
              | otherwise = 1 + countSteps (n-1)