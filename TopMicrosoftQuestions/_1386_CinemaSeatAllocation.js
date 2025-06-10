// 1386. Cinema Seat Allocation
// 4인 가족이 최대 몇 그룹이나 앉을 수 있는지
// 통로가 있을 때는 둘둘 앉아야
함수 maxNumberOfFamilies(n, reservedSeats):

    // 1. row별 예약 좌석 정보를 저장할 Map 생성
    rowToReserved = 빈 Map

    // 2. 예약 좌석들을 Map에 정리
    for 각 [row, seat] in reservedSeats:
        만약 row가 Map에 없다면:
            Map[row] = 빈 Set
        Map[row]에 seat 추가

    total = 0  // 전체 가능한 그룹 수

    // 3. 1번 줄부터 n번 줄까지 하나씩 확인
    for row in 1부터 n까지:
        만약 row가 Map에 없다면:
            // 예약된 좌석이 없는 경우 → 2개 가능
            total += 2
            계속 다음 줄로

        reserved = Map[row]  // 해당 줄의 예약된 좌석 set

        // 4. 세 그룹 위치의 가능 여부 확인
        left 가능 = 2,3,4,5가 reserved에 없음
        middle 가능 = 4,5,6,7이 reserved에 없음
        right 가능 = 6,7,8,9가 reserved에 없음

        // 5. 그룹 수 계산
        만약 left와 right 둘 다 가능:
            total += 2
        아니고, left나 middle이나 right 중 하나라도 가능:
            total += 1
        아니면:
            total += 0

    // 6. 결과 반환
    return total
