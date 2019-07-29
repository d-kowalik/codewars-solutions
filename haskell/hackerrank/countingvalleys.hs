-- https://www.hackerrank.com/challenges/counting-valleys/problem
module Main where
import Data.List
import Data.Function

solve :: [Char] -> Int
solve = length . filter (all (/=0)) . groupBy ((==) `on` (<0)) . scanl (+) 0 . map delta
        where delta 'U' = 1
              delta 'D' = -1

main :: IO ()
main = interact $ show . solve . head . tail . words

