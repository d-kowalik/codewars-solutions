-- https://www.codewars.com/kata/isograms/train/haskell

module Isogram where
import Data.Char (toLower)
import Data.List (nub)

isIsogram :: String -> Bool
isIsogram s = nub lowerInput == lowerInput
    where lowerInput = map toLower s