-- https://www.codewars.com/kata/esolang-interpreters-number-1-introduction-to-esolangs-and-my-first-interpreter-ministringfuck/train/haskell

module MiniStringFuck where
import Data.Char

myFirstInterpreter :: String -> String
myFirstInterpreter code = interpret code 0

interpret :: String -> Int -> String
interpret ('+':body) value = interpret body (if value == 255 then 0 else value + 1)
interpret ('.':body) value = [chr value] ++ interpret body value
interpret "" _ = ""
interpret (_:body) value = interpret body value