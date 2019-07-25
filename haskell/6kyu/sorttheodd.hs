-- https://www.codewars.com/kata/sort-the-odd/train/haskell

module SortArray where

sortArray :: [Int] -> [Int]
sortArray arr = let qs [] = []
                    qs (x:xs) = let smaller = qs $ filter (<x) xs
                                    bigger = qs $ filter (>=x) xs
                                in smaller ++ [x] ++ bigger
                    oddIndices xs = let go [] _ = []
                                        go (x:xs) i
                                            | odd x = i : (go xs (i+1))
                                            | even x = go xs (i+1)
                                      in go xs 0
                    soddArray = qs $ filter odd arr
                    assemble [] _ _ _ = []
                    assemble (x:xs) [] _ _ = x : assemble xs [] [] 0
                    assemble (x:xs) (y:ys) (idx:idxs) i
                              | idx == i = y : assemble xs ys idxs (i+1)
                              | otherwise = x : assemble xs (y:ys) (idx:idxs) (i+1)
                in assemble arr soddArray (oddIndices arr) 0