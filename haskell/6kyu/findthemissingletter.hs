-- https://www.codewars.com/kata/find-the-missing-letter/train/haskell

module Kata where
import Data.List

findMissingLetter :: [Char] -> Char
findMissingLetter cs =head ([(head cs)..(last cs)] \\ cs)