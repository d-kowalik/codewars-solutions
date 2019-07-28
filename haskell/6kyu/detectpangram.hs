-- https://www.codewars.com/kata/detect-pangram/train/haskell

module Pangram where
import Data.List (sort, nub)
import Data.Char (toLower)

isPangram :: String -> Bool
isPangram s = (length ['a'..'z']) == (length . nub . filter (`elem` ['a'..'z']) . map toLower $ s)