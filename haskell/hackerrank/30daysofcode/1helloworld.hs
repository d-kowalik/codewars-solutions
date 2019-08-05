module Main where

solve :: String -> String
solve s = "Hello, World.\n" ++ s

main :: IO ()
main = interact $ solve