# 자유지대 : 우리가 마주 보는 곳

## 1. 소스 코드

[https://github.com/JangAyeon/thefreehold](https://github.com/JangAyeon/thefreehold)

## 2. 소개

웹진에 **기고된 글에 대한 데이터 분석**과 **웹진 사이트 GA 분석 결과** 발표 **웹사이트**<br>
*‼ 웹진 참여진 보호 및 익명성 보장 위해 현재 배포 중단 상태이며 일부 캡쳐에 모자이크 있음 ‼*

## 3. 전반적 흐름

💻 **웹 Front-End**

웹/모바일 기반 **반응형** [이달의 소녀 소개 홈페이지](https://jangayeon.github.io/Responsive_web/) UI/UX 요소 활용 <br>
**source code** : https://github.com/JangAyeon/Responsive_web


✏ **텍스트 마이닝**

**`Crawling`** 웹진 글 txt 수집→ **`NLP : Konlpy`** 형태소 분석 → **`Counter`** 빈도수 결과 도출→ **`Wordcloud`** 시각화

**`Data Preprocess`** 웹진 신청폼 raw data csv file → **`numpy`, `pandas`**  참여진 장르/콘텐츠 등 labeling과 sorting **→ `matplot`**, **`seaborn`** 시각화

📊 **Google Analytics**

**`GA`** 활용해 특정 페이지 뷰 수, 체류 시간 참여진 전체 데이터 지표 **`CSV 추출`** → **`Python`** 이용한 유의미한 결과 도출 →  **`HTML`** 이용한 웹페이지에 결과 시각화

## 4. 기술 스택

<img width="600" alt="image" src="https://user-images.githubusercontent.com/67853616/147869544-54f8716d-5576-434e-b517-8805775aa551.png">

## 5. 기능별 페이지

### 5-1. 메인 랜딩
|PC|Mobile|
|:--:|:--:|
|![image](https://user-images.githubusercontent.com/67853616/147869803-0c61ffc5-939d-4a4d-857c-ac36f8605df8.png)|![image](https://user-images.githubusercontent.com/67853616/147869808-6b0895c5-1e53-4bed-94e8-c04c8ae55361.png)|

|PC|Mobile|
|:--:|:--:|
|![image](https://user-images.githubusercontent.com/67853616/147869830-7c8d955d-c583-43be-adba-2d3eb0854fdc.png)|<img width="461" alt="image" src="https://user-images.githubusercontent.com/67853616/147869847-19e34914-fe2b-46ed-9ce1-6ace99fe1b98.png">|


### 5-2. 행사 소개
|PC|Mobile|
|:--:|:--:|
|!![image](https://user-images.githubusercontent.com/67853616/147869881-8b679e8d-48e4-4851-829b-0bf4ba7423da.png)|![image](https://user-images.githubusercontent.com/67853616/147869887-05eea852-49d2-47bc-9a06-6e31b1cf3b19.png)|

|기본|Mouse Hover|
|:--:|:--:|
|<img width="107" alt="image" src="https://user-images.githubusercontent.com/67853616/147869921-d41700d6-667e-4a28-bba5-01cc8048ed91.png">|<img width="120" alt="image" src="https://user-images.githubusercontent.com/67853616/147869906-8498f21d-c1cb-4607-aae1-559ed974bcb0.png">|

### 5-3. 멤버 소개
|PC|Mobile|
|:--:|:--:|
|![image](https://user-images.githubusercontent.com/67853616/147869951-3539c058-78c2-4da5-9742-df551878562d.png)|![image](https://user-images.githubusercontent.com/67853616/147869953-a0cbf09e-94d9-4a3e-bc62-d1e671f47e39.png)|

|담당 부문별 필터링|hover해 세부 담당 역할 안내|
|:--:|:--:|
|![image](https://user-images.githubusercontent.com/67853616/147869972-dad7fcaf-018a-47bb-ba57-139a84f2ba51.png)|![image](https://user-images.githubusercontent.com/67853616/147869977-081da2c2-5136-4ab5-bf0f-7270200533e9.png)|

### 5-4. Award & Insight
#### 1. GA 자료 기반 참여진 시상식 진행
![image](https://user-images.githubusercontent.com/67853616/147869993-0fc0af5b-e158-40ad-a0e4-c28ed5c2fe42.png)

#### 2. GA 웹진 사이트 EDA 

![image](https://user-images.githubusercontent.com/67853616/147870032-d88308f5-c42f-4f41-b3ce-53396c89b053.png)

#### 3. 웹진 기고글 wordcloud

![image](https://user-images.githubusercontent.com/67853616/147870012-cea20c88-c86a-4e3b-922e-eafbd047962a.png)

### 5-5. Event - Image slide
![image](https://user-images.githubusercontent.com/67853616/147870070-fa05281b-ffa7-4ef8-9f01-3ca46bf96816.png)

### 5-6. Comments
긴 후기는 클릭시 첨부된 메모장으로 넘어가도록 연결
![image](https://user-images.githubusercontent.com/67853616/147870075-eea188d4-1803-4045-93d2-cee1f1691906.png)

### 5-7. Footer
![image](https://user-images.githubusercontent.com/67853616/147870088-02148f36-ed49-458e-b837-eee7bbafb41f.png)

