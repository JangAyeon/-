# 다시 만나 : 교지

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

### 5-1. 메인 랜딩 & Navbar
|PC|Mobile|
|:--:|:--:|
|![image](https://postfiles.pstatic.net/MjAyMjAyMjVfMjU3/MDAxNjQ1NzQ2ODA5OTEz.ilIRMNRnupBlQEzx2XGsRgDoRlKoW9vXg1elWkQY78sg.oNkDXCJFGNFEEq9pow9b1m3KeQRSxLwenhHeVE9RXTcg.PNG.ayeonjouvence/SE-210fd8a8-85a4-49c6-b965-a9213d41d478.png?type=w773)|![image](https://postfiles.pstatic.net/MjAyMjAyMjVfMTcz/MDAxNjQ1NzQ3MDc0NTMx.mznhERNAtv7wZx8D5SlaO_ulwNIwlDOOor6G5W-seMcg.-Zh0IaPvR82aLQyJm35w-VzDkaMovsj7YksqEtc5vQcg.PNG.ayeonjouvence/SE-9e2c06ef-6684-4e51-82df-66b5750f9e1d.png?type=w773)|

|PC|Mobile|
|:--:|:--:|
|![image](https://postfiles.pstatic.net/MjAyMjAyMjVfMTQ3/MDAxNjQ1NzQ2ODI5ODQ3.hvHTXbhlxWvk3Ss78ZrjphLj4nwGbMXxTQQoDEvIi4kg.kYcEv5Jx0CaxTCi7KmJLWv8XVu9R1x_rsMvWddSaX2Ig.PNG.ayeonjouvence/SE-fd9f8887-613c-4c2f-99dc-f096e09f88bb.png?type=w773)|<img width="461" alt="image" src="https://user-images.githubusercontent.com/67853616/147869847-19e34914-fe2b-46ed-9ce1-6ace99fe1b98.png">|


### 5-2. 행사 소개
|PC|Mobile|
|:--:|:--:|
|!![image](https://postfiles.pstatic.net/MjAyMjAyMjVfMjUz/MDAxNjQ1NzQ2ODEwNTEy.P5nzHnqmDm7rBko95PUcZ0J2vSbTwsam-nbgCb44Wbog.BlvXZ4cGnEp-jTI_ze8WXE5GnOVMs41mbMbrfXTs0wAg.PNG.ayeonjouvence/SE-c4576862-f5b3-4cbc-8eb4-a0a3657dc546.png?type=w773)|![image](https://postfiles.pstatic.net/MjAyMjAyMjVfMTAz/MDAxNjQ1NzQ2ODExMDQ1.OmbJYVu4b08D0x-y5l82N7QcuD_eauOi26IrYquU8Rcg.SNHklQuFMaMAs91sz1SVnwSn9REYlBIGODJ7_VQEcigg.PNG.ayeonjouvence/SE-06a3c6ec-320e-4154-8308-505eefdbc1b5.png?type=w773)|

|기본|Mouse Hover|
|:--:|:--:|
|<img width="107" alt="image" src="https://user-images.githubusercontent.com/67853616/147869921-d41700d6-667e-4a28-bba5-01cc8048ed91.png">|<img width="120" alt="image" src="https://user-images.githubusercontent.com/67853616/147869906-8498f21d-c1cb-4607-aae1-559ed974bcb0.png">|

### 5-3. 멤버 소개
|PC|Mobile|
|:--:|:--:|
|![image](https://postfiles.pstatic.net/MjAyMjAxMDJfNzMg/MDAxNjQxMTEwNTY2OTYz.07qpMyz5X2unYV-OaEVoulOzifZ8_isJP3DqhzYD0Fog.8m3vrgVFDL-n2hQHHpYbMlXBlAI8HYg2ls6U_ZVex4Ug.PNG.ayeonjouvence/SE-27eb1ca3-a973-4443-bef5-08052db97b3e.png?type=w773)|![image](https://user-images.githubusercontent.com/67853616/147869953-a0cbf09e-94d9-4a3e-bc62-d1e671f47e39.png)|

|담당 부문별 필터링|hover해 세부 담당 역할 안내|
|:--:|:--:|
|![image](https://user-images.githubusercontent.com/67853616/147869972-dad7fcaf-018a-47bb-ba57-139a84f2ba51.png)|![image](https://user-images.githubusercontent.com/67853616/147869977-081da2c2-5136-4ab5-bf0f-7270200533e9.png)|

### 5-4. Award & Insight
#### 1. GA 자료 기반 참여진 시상식 진행
![image](https://user-images.githubusercontent.com/67853616/147869993-0fc0af5b-e158-40ad-a0e4-c28ed5c2fe42.png)

#### 2. GA 웹진 사이트 EDA 

![image](https://postfiles.pstatic.net/MjAyMjAyMjVfMTQ1/MDAxNjQ1NzQ2ODEyNTQ5.T_istlxbR_RoHTTr5fgLlSYtwU0U62r2bfaJ7ZSrbLog.QSVnIb_yTR4wWncGP9WC6SO2WlTEhNxhHbskghCXPjYg.PNG.ayeonjouvence/SE-5ca38cdd-32d1-48c3-a308-695d1361e4e6.png?type=w773)



### 5-5. Event - Image slide
![image](https://postfiles.pstatic.net/MjAyMjAyMjVfMTc2/MDAxNjQ1NzQ2ODEzMDI3.V2Nb3KAqtSjFlIMmFwC6w3hXokbr1VmDdabliu8Yxmwg.aurxkSRupmKRvgFnqKLVOKC8TQefKJIfoURpxhGRDaIg.PNG.ayeonjouvence/SE-42186363-6727-4c1d-be9b-7669a0b641c9.png?type=w773)

### 5-6. Comments
긴 후기는 클릭시 첨부된 메모장으로 넘어가도록 연결
![image](https://postfiles.pstatic.net/MjAyMjAxMDJfMjk4/MDAxNjQxMTEwNTc1ODkw.IbSBG9GKoJTQK_TbimyHm3TgfPUAT_SZcx47c04R9p4g.BhKUTRVcZAmUfjnxQHbjPZhRn_0FdxK-bo80a7HL1wcg.PNG.ayeonjouvence/SE-17d31000-cc27-419f-9d9f-a23fc2fd3629.png?type=w773)

### 5-7. Footer
![image](https://postfiles.pstatic.net/MjAyMjAyMjVfMjEy/MDAxNjQ1NzQ2ODA5MTk4.sLtxnsebSEfETwSoeOfIHqtluueN_Cz25pEK5ryjEugg.e8Zj_Egv967BZiQTMk5qhA0xl32q3UXgsO-vplZrHswg.PNG.ayeonjouvence/SE-336d172f-fcec-48af-b89a-a49501847367.png?type=w773)

