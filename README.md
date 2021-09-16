# 페이워크 과제 - 캘린더 구현

### 깃허브 주소

- https://github.com/ypyp66/calendar

### 배포 주소

- https://jolly-galileo-f6afa6.netlify.app/

### 필수 기능

- [x] 각 날짜 선택 가능 및 선택 시 배경색 변경
- [x] 오늘 날짜는 항상 배경색 존재
- [x] 다른 달 날짜는 다른 색상 처리
- [x] 다른 달 날짜 선택시 해당 달로 변경
- [x] 화살표로 월 변경
- [x] 이번달 버튼 클릭시 이번 달로 변경

### 추가로 구현한 기능

#### Drag & Drop

    - drag start 시 기존 selected 날짜들 초기화
    - drag over 시 over 되는 날짜들 selected로 변경
    - drag end 시 start ~ end에 해당 되는 모든 날짜들 selected로 변경

#### TodoList 구현

    - 선택한 날짜 및 항목 입력이 모두 입력되어야 추가 가능
    - 여러 날짜 선택 시 [시작날짜 ~ 끝 날짜] 형태로 print
    - 날짜 선택 시 해당 날짜에 등록된 TodoList print
    - 여러 날짜에 같은 TodoList가 담겨 있어도 한 날짜에서 삭제/수정 하면 해당되는 모든 날짜에서 삭제/수정

#### 날짜 로딩중 애니메이션 구현

 <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b22eebe5-04fd-498e-be74-7f15f3f0622d/Animation.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210916T193033Z&X-Amz-Expires=86400&X-Amz-Signature=3089b130c99931de3e53895f42fcbbfec5926ab2eb37ae4a46d6c16253d9d0ec&X-Amz-SignedHeaders=host" width="300px"/>
