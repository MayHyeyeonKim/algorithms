<?php

class Solution {
    /**
     * @param Integer[] $nums
     * @return NULL
     */
    function moveZeroes(&$nums) {
        $j = 0;
        for ($i = 0; $i < count($nums); $i++) {
            if ($nums[$i] != 0) {
                $temp = $nums[$j];
                $nums[$j] = $nums[$i];
                $nums[$i] = $temp;
                $j++;
            }
        }
    }
}

// 예제 배열 생성
$exampleArray = [0, 1, 0, 3, 12];

// Solution 객체 생성
$solution = new Solution();

// moveZeroes 함수 호출
$solution->moveZeroes($exampleArray);

// 결과 출력
print_r($exampleArray);
