# 웹 관련 기술
## 프론트엔드 기술
### HTML
> HTML 이란 ...
1. HTML Tag
2. HEAD Tag
3. BODY Tag

### css
* 선택자
  + 속성
* 값

[Github 계정](http://github.com/cyj9201/)

오늘은 날씨가 맑은편입니다.  
햇살이 화사해요.

```javascript
$(function() {
            $("#card").click(function() {
                $(this), toggleClass("flipped")
            });
        $(function() {
            $(".btn").on("click", function() {
                $("#card").toggleClass("flipped");
            });
        });
```

|  구분| 영어| 수학|
|:---:|---:|---:|
| 점수| 100| 90 |
--------
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5DXRRhntFReGDXLU8zZrosMd7bog07zhrW9oa5cnJfreFgaEt" width="150px" height="100px">

이것은 ~~마크다운~~ **문법**입니다.

> 1.빅데이터 현황 및 트렌드

cacoo.com

표현 tool : r, 타블로, 등등 다른툴이 많음

conversation system



> 2.빅데이터 구축목적과 목표 

1. 더 나은 의사결정
2. 사용자 중심의 서비스 활동
3. 창조적인 접근

* 회사가 빅데이터를 사용해야 하는 이유
    + 고객 중심 성과
    + 최적화된 운용
    + 신규사업모델 가능
    + 위기와 재정관리
    + 직원 협업

* Increasing Sales Revenue
    + 고객 타겟팅 및 세분화를 개선하기 위해 인구 통계학적 및 행동 데이터의 조합 사용(나이, 수입, 성별,생활 지표,구매 히스토리)

* Reduce Cost
    + 업무성능과 진행공백을 검출하기 위한 연관 데이터 사용

* Increase Customer Satisfaction
    + 고객 이해증대를 위한 행동 분석(만족도수준 정의, 현재 고객경험의 이해, 안정적이거나 기대를 넘는 구매 솔루션 준비, 이탈방지 또는 행동예측)

> 3.빅데이터 접근방법론 및 알고리즘

1. 빅데이터 수집방법
2. 빅데이터 관리 및 운영
3. 빅데이터를 이용한 알고리즘

* 1.Target DB Layer(What)
    + 내부 Data Warehouse(log data)
    + 웹컨텐츠, SNS API, LBSNS API(위치 기반), 공공DB
    + Import Data(Excel, csv, xml,txt…)

* Big Data Processing(DB연동, crawling:하둡,API개발)
    + HBASE(내부DB,SNS,LBSNE,공공DB)

* Algorithm
    + 빅데이터 분석 기술, Relation DB Procedure

* 데이터 수집 주요 경로
    + 비지니스거래, 로그데이터, 이메일, 일정관리, SNS, 위치정보, RFID, 센서

* 데이터 수집 방법(How)
    + 데이터의 키 소스 정의 (업무적or행동적, 구조or비구조)
    + 데이터 접근 및 집계 (데이터의 장소와 방법 정의)
    + 신규 고객 생성과 키 데이터를 이용한 프로필 예측 (유입경로)
    + 사업규칙과 데이터마트 자동결합 시스템 구축
    + 올바른 마케팅메시지로 프로파일 조정

* 2.빅데이터 효율적인 관리법 
    + 컴퓨팅은 중앙에서 관리하지만 그 실행은 특정 워크로드에 최적화된 개별시스템에서 담당

* 3.빅데이터를 이용한 알고리즘
    + 정의: 어떠한 문제를 해결하기 위한 여러 동작들의 유한한 모임, 명확하게 규정된 법칙을 이용하여 실행 가능하게 만드는 것(연합,연속,분류,집단화,예측)

|  구분| 내용|   
|:---:|:---:|
| 연합| 한 사건이 다른 사건과 상호 관련이 있음|
| 연속| 한 사건이 이후의 다른 사건 유발|
| 분류| 패턴을 인식, 새롭게 분류된 데이터 창출|
| 집단화| 알려지지 않은 사실 집단을 발견하고 가시화|
| 예측| 데이터 내에서 단순히 발견되는 패턴을 통해 미래 예측|

알고리즘의 일반적 구분   

분류 알고리즘: 데이터 집합의 다른 특성을 기반으로 하나 이상의 불연속 변수를 예측   
회귀 알고리즘: 데이터 집합의 다른 특성을 기반으로 수익 또는 손실 과 같은 하나 이상의 연속 변수를 예측   
세그먼트화 알고리즘: 데이터를 속성이 유사한 항목의 그룹 또는 클러스터로 분류   
시퀀스 분석 알고리즘: 웹 경로 흐름과 같이 데이터에서 자주 사용하는 시퀀스 또는 에피소드를 요약   
연결 알고리즘: 데이터 집합에 있는 여러 특성 사이의 상관 관계를찾아 연결규칙 발견

* 빅데이터 알고리즘의 일반적 사용처
    + 추천엔진, 네트워크 모니터링, 감성분석, 사기행위 탐지, 리스크 모델링, 고객 경험분석, 마케팅 캠페인 분석, 고객 이탈분석, R&D, 소셜그래프 분석

> 4.빅데이터 분석 및 활용을 위한 시각화

§ 방대하고 변화가 빠른 스트리밍형 비정형 데이터의 사이트를 도출하고 서비스를 구현하기 위해    
§ 일반적인 쿼리, 리스트 방식으로는 데이터 파악 및 분석이 되지 않음    
§ 빅데이터 분석 혹은 이용자의 사용자 편의성 및 접근성을 높이기 위함

* 빅데이터 시각화에 많이 사용되는 기법
    + 선 그래프, 막대그래프, 소셜 그래프 (Curved Link, Network), 등고선 (Contour Plot) / Heat Map ,Bubble Chart / 점분포,  Small multiples / 트리매핑(Treemapping), 비교 프레임워크 / Matrix, 다이어그램,Tag Cloud