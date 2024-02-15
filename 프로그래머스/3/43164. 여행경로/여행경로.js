function solution(tickets) {
    let result = [];

        // (잔여 티켓, 현재 위치, 여행 경로)
    function DFS(tickets, current, route){
        if (!tickets.length) { // 티켓 모두 사용
            result.push(route); 
        } 
        else {
            tickets.forEach(([departure, arrival], index) => {
                if (current === departure) {
                    const remain = tickets.slice(); // 남은 티켓
                    remain.splice(index, 1);  // 사용 티켓 제거
                    DFS(remain, arrival, route.concat(arrival)); // 경로에 추가
                }
            });
        }
    };
    DFS(tickets, 'ICN', ['ICN']);   // 출발지 ICN 세팅
    
    return result.sort()[0];   // 알파벳 순 정렬
}