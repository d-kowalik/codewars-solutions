-- https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/haskell

module Codewars.Kata.Spinning where

spinWords :: String -> String
spinWords = unwords . map rev . words
        where rev s
                | length s < 5 = s
                | otherwise = reverse s
