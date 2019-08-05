module Main where

solve :: [Int] -> Int
solve = sum

main :: IO ()
main = interact $ show . solve . map read . tail . words