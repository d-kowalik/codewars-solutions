-- https://www.codewars.com/kata/jaden-casing-strings/train/haskell

module JadenCasing where
import Data.List.Split
import Data.Char (toUpper)
import Data.List

toJadenCase :: String -> String
toJadenCase s = intercalate " " . map capitalize $ splitOn " " s
          where capitalize (x:xs) = toUpper x : xs 