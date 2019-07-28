-- https://www.codewars.com/kata/where-my-anagrams-at/train/haskell

module Anagram where
import Data.List
  
anagrams :: String -> [String] -> [String]
anagrams w = filter (\x -> sort x == sort w)