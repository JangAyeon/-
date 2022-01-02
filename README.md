# 자유지대 : 우리가 마주 보는 곳

## 1. 소스 코드

[https://github.com/JangAyeon/thefreehold](https://github.com/JangAyeon/thefreehold)

## 2. 소개

웹진에 **기고된 글에 대한 데이터 분석**과 **웹진 사이트 GA 분석 결과** 발표 **웹사이트**
*‼ 웹진 참여진 보호 및 익명성 보장 위해 현재 배포 중단 상태이며 일부 캡쳐에 모자이크 있음 ‼*

## 3. 전반적 흐름

💻 **웹 Front-End**

웹/모바일 기반 반응형 UI/UX 공부 후 [이달의 소녀](https://namu.wiki/w/%EC%9D%B4%EB%8B%AC%EC%9D%98%20%EC%86%8C%EB%85%80) 소개 홈페이지 제작 경험 바탕
https://github.com/JangAyeon/Responsive_web



✏ **텍스트 마이닝**

**`Crawling`** 웹진 글 txt 수집→ **`NLP : Konlpy`** 형태소 분석 → **`Counter`** 빈도수 결과 도출→ **`Wordcloud`** 시각화

**`Data Preprocess`** 웹진 신청폼 raw data csv file → **`numpy`, `pandas`**  참여진 장르/콘텐츠 등 labeling과 sorting **→ `matplot`**, **`seaborn`** 시각화

📊 **Google Analytics**

**`GA`** 활용해 특정 페이지 뷰 수, 체류 시간 참여진 전체 데이터 지표 **`CSV 추출`** → **`Python`** 이용한 유의미한 결과 도출 →  **`HTML`** 이용한 웹페이지에 결과 시각화

## 4. 기술 스택

<img width="600" alt="image" src="https://user-images.githubusercontent.com/67853616/147869544-54f8716d-5576-434e-b517-8805775aa551.png">
