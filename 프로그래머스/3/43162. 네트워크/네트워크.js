function solution(n, computers) {
    let answer = 0;
    const visited = [false];
    
    const dfs = (i) => {	//dfs 함수는 깊이 우선 탐색을 수행하는 재귀함수
        visited[i] = true;
        
        for (let j = 0; j < computers.length; j++) {
            if (computers[i][j] === 1 && !visited[j]) {
                dfs(j);
            }
        }
    }
    
    for (let i = 0; i < computers.length; i++) {
        if(!visited[i]) {
            dfs(i);
            answer++;
        }
    }

   return answer;
}